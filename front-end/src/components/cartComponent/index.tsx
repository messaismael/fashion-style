
import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Product } from '../../model/product.model';
import { CartService } from '../../services/cart/cart.services';
import CartItem from './cart-item';
import CheckoutSummary from './checkoutSummary';

const CartComponent: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProductCart();
  }, []);

  const getProductCart = () => {
    const data = CartService.getItems();
    setProducts([...data]);
  }
  const remove = (prod: Product) => {
    CartService.removeItem(prod);
    getProductCart();
  }

  return (
    <Container fluid="sm" className='mt-3' >
      <div className='p-5'>
        <h2 className='text-left'>My Cart</h2>
        <p className='text-left'>Review and edit your order, and then proceed  to Checkout</p>
      </div>
      <Row className='mb-5' style={{ margin: 'auto' }}>
        <Col md={8}>
          {
            products.map((product, i) => (<CartItem key={i} product={product} removeFromCart={() => remove(product)} />))
          }
        </Col>
        <Col md={4}>
          <CheckoutSummary />
        </Col>
      </Row>

    </Container>
  )
}

export default CartComponent;