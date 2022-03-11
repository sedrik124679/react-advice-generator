import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ThemeProvider} from "@mui/material";
import {theme} from "./Theme/theme";

ReactDOM.render(
      <ThemeProvider theme={theme}>
          <App />
      </ThemeProvider>,
  document.getElementById('root')
);
