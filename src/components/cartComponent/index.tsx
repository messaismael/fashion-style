
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CartItem from './cart-item';
import CheckoutSummary from './checkoutSummary';

const CartComponent: React.FC = () => {
  return (
    <Container fluid="sm" className='mt-3' >
      <div className='p-5'>
        <h2 className='text-left'>My Cart</h2>
        <p className='text-left'>Review and edit your order, and then proceed  to Checkout</p>
      </div>
      <Row className='mb-5' style={{ margin: 'auto' }}>
        <Col md={8}>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </Col>
        <Col md={4}>
          <CheckoutSummary />
        </Col>
      </Row>

    </Container>
  )
}

export default CartComponent;