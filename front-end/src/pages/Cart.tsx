import React from 'react';
import { Button, Card } from 'react-bootstrap';
import CartComponent from '../components/cartComponent';
import Footer from '../components/footer';
import NavBar from '../components/navbar';


const CartPage: React.FC = () => {
  return (
    <>
      <NavBar />
      <CartComponent />
      <Footer />
    </>
  )
}

export default CartPage;