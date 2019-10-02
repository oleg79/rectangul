import angular from 'angular';
import ngRedux from 'ng-redux';
import store from './store';
import directivesInit from './directives';


const config = ($ngReduxProvider, store) => {
  $ngReduxProvider.provideStore(store);
};

const ngModule =
  angular.module('app', [ngRedux])
    .constant('store', store)
    .config(config)
    .controller('numbersCtrl', function ($scope, $ngRedux) {
      $scope.count = 1000;

      const disconnect = $ngRedux.connect(
        mapState,
        mapDispatch
      )($scope);

      $scope.$on('destroy', disconnect);

      $scope.setNewCount = count => {
        $scope.count = count;
        $scope.$apply();
      };

      function mapState(state) {
        return {
          numbers: state.numbers,
          words: state.words
        };
      }

      function mapDispatch(dispatch) {
        return {
          addNumber: number => dispatch({type: 'ADD_NUMBER', payload: number}),
          clearNumbers: () => dispatch({type: 'CLEAR_NUMBERS'})
        };
      }
    });

directivesInit(ngModule);
