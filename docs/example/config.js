import React from 'react';
import { config, configure, addDecorator } from 'storybox';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import reducers from 'store/reducers';
import { theme } from 'components';
import params from './params';

// const path = require('path');
// const req = require.context('components', true, /.story.js$/)

// let stories = {
//   modules: {},
//   options: {
 //     name: 'YourComponent',
//   },
//   info: true,
// };

// function loadStories() {
//   req.keys().forEach(filename => {
//     let module = req(filename);
//     stories.modules[path.join('../src/components/', filename)] = module;
//   });
// }

// PASSING INITIAL STATE FROM SERVER STORE
const initialState = window.INITIAL_STATE;
const store = createStore(reducers, initialState);

addDecorator(story => (
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {story()}
      </ThemeProvider>
    </BrowserRouter>
  </Provider>
));

const path = require('path');
const сontext = require.context('components', true, /\.story\.js$/);

сontext.keys().forEach(filename => {
  let module = сontext(filename);
  params.modules[path.join('../src/components/', filename)] = module;
});

config(params);

if (module.hot) {
  module.hot.accept(сontext.id, () => {
    const reloadedContext = require.context('components', true, /\.story\.js$/);

    var changedModules = reloadedContext.keys()
      .map(function (key) {
        return [key, reloadedContext(key)];
      })
      .filter(function (reloadedModule) {
        return params.modules[path.join('../src/components/', reloadedModule[0])] !== reloadedModule[1];
      });

    changedModules.forEach(function (module) {
      params.modules[path.join('../src/components/', module[0])] = module[1];
    });

    config(params);
  });
}
