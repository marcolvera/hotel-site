import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';



function App() {
  return (
    <div>
      <Switch>
        <Route exact path = '/home' render = {() =>
          <Home />
        }/>
        <Route exact path = '/about' render = {() =>
          <About />
        }/>
        <Route exact path = '/contact' render = {() =>
          <Contact />
        }/>
      </Switch>
    </div>
  );
}

export default App;
