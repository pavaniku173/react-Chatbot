import {Routes, Route} from 'react-router-dom';
import { HomePage } from './pages/HomePage'; 
import { CheckoutPage } from './pages/CheckoutPage';
import './App.css'

function App() {

  return (
    <>
    <Routes>
    <Route index element={<HomePage />}/>
    <Route path="checkout" element={<CheckoutPage/>}></Route>
    </Routes>
    </>
  )
}

export default App
