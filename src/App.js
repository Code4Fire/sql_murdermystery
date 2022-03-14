import {Route, Routes} from 'react-router-dom';
import Navbar from './Navbar';
import About from "./About";
import Home from "./Home";
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Navbar/>
      <main>
        <Routes>
          <Route path= '/'element ={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
