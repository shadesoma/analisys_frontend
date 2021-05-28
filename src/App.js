import './App.css';
import Root from './components/root';
import Spinner from './components/spinner';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import Devices from './components/devices';
import Settings from './components/settings';
import Reports from './components/reports';
import Events from './components/events';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Spinner />}>
        <BrowserRouter>
          <Switch>
            <Root>
              <Route exact path="/">
                <Devices />
              </Route>
              <Route exact path="/reports">
                <Reports />
              </Route>
              <Route exact path="/events">
                <Events />
              </Route>
              <Route exact path="/settings">
                <Settings />
              </Route>
            </Root>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
