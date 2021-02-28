// export { default } from './src/index';
import { Provider } from 'react-redux';
import React from 'react';
import Root from './src/index';
import store from './src/store/store';

const App = () => (
  <Provider store={store}>
    <Root />
  </Provider>
);

export default App;
