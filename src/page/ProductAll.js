import React,{useEffect, useState} from "react"
import ProductCard from "../component/ProductCard"
import { Container,Row, Col } from "react-bootstrap";

const ProductAll = () =>  {
  const [productList, setProductList] = useState([])
  const getProducts = async() => {
    let url = `https://my-json-server.typicode.com/minjeongJe/shopping-site/products`
    let response = await fetch(url);
    let data = await response.json(); 
    console.log("ddd",data);
    setProductList(data);
  };

  useEffect(()=> {
    getProducts();
  },[])

  return (
    <div>
      <Container>
        <Row>
        {productList.map(menu=> (
          <Col lg={3} className="Products-list">
            <ProductCard item={menu}/>
            </Col>
        ))}
        </Row>
      </Container>
      <ProductCard/>
    </div>
  )
}

export default ProductAll
