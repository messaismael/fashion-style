import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Product } from '../model/product.model';

const ProductCard: React.FC<{product: Product}> = ({product}) => {
  
  return(
    <Link to={`/product/${product.id}`} style={{ "textDecoration" : "none"}}>
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
    </Link>
  );
} 

export default ProductCard;