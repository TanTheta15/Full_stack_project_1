// import logo from './logo.svg';
import './App.css';
import Flexbox from './Flexbox/Flexbox';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Router from './Rounting/Router';

function App() {
  const name = "React";
  return (
    <BrowserRouter>
    <Link to="/">Home</Link>
    <Link to = "/flex">Flex</Link>
    <Link to = "/route">Route</Link>
      <Routes>
      <Route path='/' element = {
      <div className="App">
        <h1>Router Links</h1>
      <h1>Welcome to {name}</h1>
      {/* <Flexbox/> */}
    </div>
    }/>
    <Route path='/flex' element = {<Flexbox/>}/>
    <Route path='/route/:id' element = {<Router/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
