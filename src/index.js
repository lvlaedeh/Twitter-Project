import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ThemeProvider from "@material-ui/styles/ThemeProvider"
import Theme from './component/Theme';
import { TweetProvider } from './conext/TweetContext';

ReactDOM.render(
  <Suspense fallback={<div></div>}>
  <ThemeProvider theme={Theme}>
  <React.StrictMode>
    <TweetProvider>
      <App />
    </TweetProvider>
  </React.StrictMode>
  </ThemeProvider>
  </Suspense>,
  document.getElementById('root')
);

