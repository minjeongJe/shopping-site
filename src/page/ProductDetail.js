import { wait } from '@testing-library/user-event/dist/utils';
import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';

const ProductDetail = () => {
  let{ id } = useParams();
  const[product,setProduct] = useState(null);
  const getProductDetail = async() => {
    let url = `http://localhost:5000/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    console.log("ddd",data);
    setProduct(data);
  }

  useEffect(()=> {
    getProductDetail()
  },[])

  return <Container> 
    <Row className='product-container'>
      <Col className='product-img'>
        <img src={product?.img}/>
      </Col>
      <Col className='products-items' >
        <div  className='product-title'>{product?.title}</div>
        <div className='product-price'>￦{product?.price}</div>
        <div className='Product-label'>{product?.choice == true?  "Conscious choice" : ""}</div>
        <div className=''>{product?.new}</div>
        <select className='product-dropdown-menu'>
          <option value="" selected hidden>
            사이즈 선택
          </option>
          {product?.size?.map((size, index) => (
            <option key={index} value={size}>
              {size.toUpperCase()}
            </option>
          ))}
        </select>
        <button className='add-btn'>추가</button>
      </Col>
    </Row>
  </Container>
}

export default ProductDetail
