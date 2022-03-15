
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CartCard from './cartCard';

const CartComponent: React.FC = () => {
  return (
    <Container className='mt-3' >
      <div className='p-5'>
        <h2 className='text-left'>My Cart</h2>
        <p className='text-left'>Review and edit your order, and then proceed  to Checkout</p>
      </div>
      <Row className='mb-5' style={{ margin: 'auto' }}>
        <Col md={8}>
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
        </Col>
        <Col md={4}>
          <CartCard />
        </Col>
      </Row>

    </Container>
  )
}

export default CartComponent;