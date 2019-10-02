export default ngModule => ngModule.directive('numbersList', () => ({
  restrict: 'E',
  scope: {
    numbers: '=',
    addNumber: '&',
    clear: '&',
  },
  template: `
  <div>
    <input type="number" ng-model="vm.newNumber">
    <button ng-click="vm.add()">add</button>
    <button ng-click="clear()">clear</button>
    <ul><li ng-repeat="num in numbers track by $index">{{$index + 1}} - {{num}}</li></ul>
  </div>
  `,
  controllerAs: 'vm',
  controller: function($scope) {
    const vm = this;

    vm.newNumber = 0;
    vm.add = add;

    function add () {
      $scope.addNumber({newNumber: vm.newNumber});
      vm.newNumber = 0;
    }
  }
}));
