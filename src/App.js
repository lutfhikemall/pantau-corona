// React
import React from 'react';

// Logo
import './App.css';

// Utils
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

// Themes
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import theme from './theme';

// Component
import Home from './pages/Home';
import Data from './pages/Data';
import FAQ from './pages/FAQ';

// Theme
const pantauTheme = createMuiTheme(theme);

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <MuiThemeProvider theme={pantauTheme} >
        <div className="App">
          <div className="content" >
            <Router>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/data" exact component={Data} />
                <Route path="/faq" exact component={FAQ} />
                <Route render={() => <p>Wrong Page</p>} />
              </Switch>
            </Router>
          </div>
        </div>
      </MuiThemeProvider>
    </React.Fragment>
  );
}

export default App;
