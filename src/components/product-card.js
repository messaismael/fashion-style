import { Button } from 'react-bootstrap'
import '../css/product-card.scss'

function ProductCard (props) {
  
  return(
    <>
      <div className='item rounded'>
        <div className='product-card-thumb'>
            <img src={props.product.cover} alt={props.product.name} />
        </div>
        <div className='caption'>
            <div className='d-flex justify-content-between item-info'>
                <div className='item-name'>{props.product.name}</div>
                <div className='item-price'>${props.product.price}</div>
            </div>
            <Button className='rounded-btn' variant='outline-dark' type="button">Add to cart</Button>
        </div>
      </div>
    </>
  );
} 

export default ProductCard;