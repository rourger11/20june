import Navigation from './Components/Navigation/Navigation';
import React,{useState} from 'react';
import {BrowserRouter,Route,Routes}from 'react-router-dom'
import Cart from './Components/actions/Cart'
import Home from './Components/Home/Home';
import NotFound from './Components/Notfound/NotFound';
import Login from './Components/Login/Login';

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }


  return (
    <div className="App">

 <BrowserRouter>
 {/* <Navigation/> */}

      <Routes>
      <Route path='/' element={<Login/>}/>

      <Route path='Home' element={<Home/>}/>
          <Route path='Cart' element={<Cart/>}/>
          <Route path='/*' element={<NotFound/>}/>


      </Routes>
      </BrowserRouter>   </div>
  );
}

export default App;
