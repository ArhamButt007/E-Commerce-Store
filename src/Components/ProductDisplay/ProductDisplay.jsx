import React, { use } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { HomeContext } from '../../Context/HomeContext'
import { useContext } from 'react'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(HomeContext);
  return (
    <div className='product-display'>
        <div className="product-display-left">
            <div className="product-display-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="product-display-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(48)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-old-price">
                    ${product.old_price}
                </div>
                <div className="productdisplay-right-new-price">
                    ${product.new_price}
                </div>
            </div>
            <div className="productdisplay-right-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim quas commodi, eveniet quod quidem numquam ipsam, earum temporibus distinctio nobis quisquam. Perspiciatis debitis illum temporibus, possimus voluptates quae. Pariatur, sapiente?
            </div>
            <div className="productdisplay-right-size">
                <h1>Choose Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
            <p className='productdisplay-right-category'>
                <span>Category :</span> Women, T-Shirt, Crop Top
            </p>
            <p className='productdisplay-right-category'>
                <span>Tags :</span> Modern, Latest
            </p>
        </div>
      
    </div>
  )
}

export default ProductDisplay
