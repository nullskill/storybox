import React from 'react';
import { config, configure, addDecorator } from 'storybox';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from 'components';
import params from './params';

addDecorator(story => (
  <BrowserRouter>
     <ThemeProvider theme={theme}>{story()}</ThemeProvider>
  </BrowserRouter>
))

config(params);
