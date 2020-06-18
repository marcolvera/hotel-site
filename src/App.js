import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Explore/Explore';



function App() {
  return (
    <div>
      <Switch>
        <Route exact path = '/' render = {() =>
          <Home />
        }/>
        <Route exact path = '/about' render = {() =>
          <About />
        }/>
        <Route exact path = '/explore' render = {() =>
          <Contact />
        }/>
      </Switch>
    </div>
  );
}

export default App;
