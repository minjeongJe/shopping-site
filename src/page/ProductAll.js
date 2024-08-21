import React,{useEffect, useState} from "react"
import ProductCard from "../component/ProductCard"

function ProductAll() {
  const [productList, setProductList] = useState([])
  const getProducts = async() => {
    let url = `http://localhost:5000/products`
    let response = await fetch(url);
    let data = await response.json(); 
    console.log("ddd",data);
    setProductList(data);
  }
  useEffect(()=> {
    getProducts();
  },[])

  return (
    <div>
      <ProductCard/>
    </div>
  )
}

export default ProductAll
