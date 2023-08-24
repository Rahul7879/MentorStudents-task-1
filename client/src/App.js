
import './App.css';
import Logedin from './components/Logedin';
import Login from './components/account/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/register' element={<Login/>}></Route>
    <Route path='/logedin' element={<Logedin/>}></Route>
    
    </Routes>
    
    </BrowserRouter>
  );
}


export default App;
