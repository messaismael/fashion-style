
import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const CartItem: React.FC = () => {
  const [numCart, setNumCart] = useState(1);


  const handleNumCart = (num: number) => {
    if(num !== 0){
      setNumCart(num);
    }
  }
  return (
    <Card  className='cart-item'/* style={{ width: '18rem' }} */>
      <Card.Img className='cart-image' variant="top" src='/images/logo.png' />
      <Card.Body>
        <Card.Title>Card Title Card Title Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="danger" className='margin-auto'><FontAwesomeIcon  icon={faTimes} size="lg"/></Button>
      </Card.Body>
        <div className='cart-qte' >
          <h4  >$15.00</h4>
          <div style={{ margin: "auto"}} className='d-flex justify-content-center'>
            <input style={{width: "40px"}} className='cart-input text-center' onChange={()=>{}} value={numCart} />
            <div>
              <Button onClick={() => handleNumCart(numCart-1)} variant="outline-dark" className='cart-num'>-</Button>
              <Button onClick={() => handleNumCart(numCart+1)} variant="outline-dark" className='cart-num'>+</Button>
            </div>
          </div>
        </div>
    </Card>
  )
}

export default CartItem;

