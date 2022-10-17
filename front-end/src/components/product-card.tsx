import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import { Product } from '../model/product.model';
import { addProduct } from '../redux/actions';
import { CartService } from '../services/cart/cart.services';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [isInCart, setIsInCart] = useState(false);
  const navigate = useNavigate();
  const productsCart = [];


  useEffect(() => {
    if(CartService.isInCart(product)){
      setIsInCart(true);
    }
  }, [])


  const addToCart = () => {
    setIsInCart(!isInCart);
    let res = CartService.addItem(product);
    if(res.success){
    }
  }

  return (
    <div className='item position-relative'>
      <div className="rounded pb-5">
        <Link to={`/product/${product.id}`} style={{ "textDecoration": "none" }}>
          <div className='product-card-thumb' style={{ 'backgroundImage': `url(${product.cover})` }}>
          </div>
          <div className='caption'>
            <div className='d-flex justify-content-between item-info'>
              <div className='item-name'>{product.name}</div>
              <div className='item-price'>${product.price}</div>
            </div>
          </div>
        </Link>
      </div>
      <Button onClick={addToCart} className='btn-add-cart rounded-btn mb-2' variant='outline-dark' type="button" disabled={isInCart}>{isInCart ? 'In Cart':'Add to cart'}</Button>
    </div>
  );
}

export default ProductCard;