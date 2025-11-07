import {Routes, Route} from 'react-router-dom';
import {useState,useEffect} from 'react';
import axios from 'axios';
import { HomePage } from './pages/home/HomePage'; 
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { OrdersPage } from './pages/orders/OrdersPage';
import { TrackingPage } from './pages/TrackingPage';
import './App.css'

function App() {
  const[cart,setCart]=useState([]);


  const loadCart= async()=>{          //move loadCart function outside useEffect to reuse it for auto reload when new product added to cart
    const response= await axios.get('/api/cart-items?expand=product')
     setCart(response.data);
     }
  useEffect(()=>{
    // const loadCart= async()=>{
    //  const response= await axios.get('/api/cart-items?expand=product')
    //   setCart(response.data);
    // }
      loadCart();
   },[]);
   
  

  return (
   
    <>
    <Routes>
    <Route index element={<HomePage cart={cart} loadCart={loadCart} />}/>
    <Route path="checkout" element={<CheckoutPage cart={cart}/>}></Route>
    <Route path="orders" element={<OrdersPage cart={cart}/>}></Route>
    <Route path="tracking" element={<TrackingPage/>}></Route>
    </Routes>
    </>
  )
}

export default App
