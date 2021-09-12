import { Button } from 'react-bootstrap'
import '../css/product-card.scss'

type Props = {
  product:any
}

const ProductCard = ({product}:Props) => {
  
  return(
    <>
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
    </>
  );
} 

export default ProductCard;