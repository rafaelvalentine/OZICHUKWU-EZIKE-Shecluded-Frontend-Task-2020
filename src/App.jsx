import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Error from './tools/Error/errorHandling'
import Routes from './routes/routes.jsx'
import ScrollToTop from './tools/ScrollToTop'
import './themes/sass/App.sass';

export default () => {
  return (
    <div id="App">
      <Router>
        <Error>
          <ScrollToTop>
            <Routes />
          </ScrollToTop>
        </Error>
      </Router>
    </div>
  );
}

