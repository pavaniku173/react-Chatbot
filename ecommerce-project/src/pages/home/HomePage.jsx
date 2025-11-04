import axios from 'axios';
import { useEffect,useState } from 'react';
import './HomePage.css';
import { Header } from '../../components/Header';
import { ProductsGrid } from './ProductsGrid';
//import { products} from '../../starting code ecommerce/data/products';

export function HomePage({cart}){
  const[products,setProducts]=useState([]);
useEffect(()=>{
    axios.get('/api/products')
     .then((response)=>{
     //console.log(response);
     setProducts(response.data);
  
   });
     

},[]);
  
    return(
        <>
        <title>HomePage</title>
      <Header  cart={cart}/>

    <div className="home-page">
      <ProductsGrid products={products}/>
    </div>
        </>
    );
}