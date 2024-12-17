import React from 'react'
import { HomeContext } from '../Context/HomeContext';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const { all_products } = useContext(HomeContext);
  const { productId } = useParams();

  
  
  const product = all_products.find(item => item.id === Number(productId));

  if (!product) {
    return <div>Product not found</div>; // Fallback UI
  }

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};


export default Product
