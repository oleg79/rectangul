import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from '../store';
import Counter from '../components/Counter';
import LettersList from "../components/LettersList";

export default ngModule => {
  ngModule.directive('injectReact', () => ({
    restrict: 'E',
    scope: {
      setNewCount: '&',
      count: '='
    },
    template: `<div id="reactApp"></div>`,
    link: (scope, el, attrs) => {
      scope.$watch('count', (newCounter, oldCounter) => {
        // newCounter !== oldCounter &&
        render(
          <Provider store={store}>
            <LettersList/>
            <Counter initialCount={newCounter} setNewCount={scope.setNewCount}/>
          </Provider>,
          document.getElementById('reactApp')
        );
      });
    }
  }));
};
