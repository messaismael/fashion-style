import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { Product } from '../../model/product.model';
import { CartService } from '../../services/cart/cart.services';
import { Link } from 'react-router-dom';

const CartItem: React.FC<{ product: Product, removeFromCart?: any }> = ({ product, removeFromCart }) => {
  const [numCart, setNumCart] = useState(1);

  const handleNumCart = (num: number) => {
    if (num !== 0) {
      setNumCart(num);
    }
  }
  return (
    <Card className='cart-item'/* style={{ width: '18rem' }} */>
      <Link to={`product/${product.id}`}>
        <Card.Img className='cart-image' variant="top" src={product.cover || '/images/logo.png'} />
      </Link>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Button variant="danger" className='margin-auto' onClick={removeFromCart}><FontAwesomeIcon icon={faTimes} size="lg" /></Button>
      </Card.Body>
      <div className='cart-qte' >
        <h4  >${product.price}</h4>
        <div style={{ margin: "auto" }} className='d-flex justify-content-center'>
          <input style={{ width: "40px" }} className='cart-input text-center' onChange={() => { }} value={numCart} />
          <div>
            <Button onClick={() => handleNumCart(numCart - 1)} variant="outline-dark" className='cart-num'>-</Button>
            <Button onClick={() => handleNumCart(numCart + 1)} variant="outline-dark" className='cart-num'>+</Button>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default CartItem;

