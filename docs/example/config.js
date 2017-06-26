import React from 'react';
import { config, configure, addDecorator } from 'storybox';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import reducers from 'store/reducers';
import { theme } from 'components';
import params from './params';

// PASSING INITIAL STATE FROM SERVER STORE
const initialState = window.INITIAL_STATE;
const store = createStore(reducers, initialState);

addDecorator(story => (
  <Provider store={store}>
    <BrowserRouter>
     <ThemeProvider theme={theme}>{story()}</ThemeProvider>
    </BrowserRouter>
  </Provider>
))

config(params);
