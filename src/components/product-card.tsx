import { useEffect } from 'react';
import { Button } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';
import { Product } from '../model/product.model';

const ProductCard: React.FC<{product: Product}> = ({product}) => {
  const router = useHistory();

    useEffect(() => {
    }, [])
    

  const goToDetail = () => {
    router.push(`/product/${product.id}`);
    //router.go(0)
  }

  return(
    <div onClick={goToDetail} style={{ "textDecoration" : "none"}}>
      <div className='item'>
        <div className="rounded">
          <div className='product-card-thumb' style={{'backgroundImage':`url(${product.cover})`}}>
          </div>
          <div className='caption'>
            <div className='d-flex justify-content-between item-info'>
              <div className='item-name'>{product.name}</div>
              <div className='item-price'>${product.price}</div>
            </div>
            <Button className='rounded-btn mb-2' variant='outline-dark' type="button">Add to cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
} 

export default ProductCard;