import {Route, Switch} from 'react-router-dom';
import Navbar from './Navbar';
import About from "./About";
import Home from "./Home";
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <main>
        <Switch>
          <Route exact path= '/'>
            <Home/>
          </Route>
          <Route exact path='/about'>
            <About/>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
