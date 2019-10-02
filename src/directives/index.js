import injectReact from './inject-react';
import numbersList from './numbers-list';

export default ngModule => {
  injectReact(ngModule);
  numbersList(ngModule);
};
