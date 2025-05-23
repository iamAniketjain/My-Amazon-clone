import './App.css';
import { Main } from './Component/Amazon/Main';
import { BrowserRouter ,Navigate, Routes, Route } from 'react-router-dom';
import {Login} from './Component/Amazon/login'
import {Cart} from './Component/Amazon/cart'

 
const name = "aniket"
function App() {
  
  return ( 
    <div className='app' >
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Login/>}/>
          <Route path="/Main" element={<Main/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;