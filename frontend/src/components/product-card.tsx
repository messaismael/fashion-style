import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../css/product-card.scss'
import { Product } from '../model/product.model';

const ProductCard: React.FC<{product: Product}> = ({product}) => {
  
  return(
    <Link to={`/product/${product.id}`}>
      <div className='item rounded'>
        <div className='product-card-thumb'>
            <img src={product.cover} alt={product.name} />
        </div>
        <div className='caption'>
          <div className='d-flex justify-content-between item-info'>
            <div className='item-name'>{product.name}</div>
            <div className='item-price'>${product.price}</div>
          </div>
          <Button className='rounded-btn' variant='outline-dark' type="button">Add to cart</Button>
        </div>
      </div>
    </Link>
  );
} 

export default ProductCard;