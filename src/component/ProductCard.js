import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({item}) => {

  const Navigate = useNavigate();
  const showDetail = () => {
    Navigate(`/product/${item.id}`);
  };

  return (
    <div className='Product-area' onClick={showDetail}>
      <img src= {item?.img}/>
      <div className='Product-label'>{item?.choice == true?  "Conscious choice" : ""}</div>
      <div className='Product-title'>{item?.title}</div>
      <div className='Product-price'>￦{item?.price}</div>
      <div className='Product-new'>{item?.new == true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard
