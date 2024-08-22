import React from 'react'
import ProductDetail from '../page/ProductDetail';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({authenticate}) => {
    //상품을 눌렀을 때 로그인이 안되어있을 시 로그인페이지로 이동.
  return authenticate == true? <ProductDetail/> : <Navigate to="/login"/>;
};

export default PrivateRoute;
