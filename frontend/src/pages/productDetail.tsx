import { useState, useEffect } from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import { Product } from '../model/product.model';

import '../css/productDetail.scss'
import { stockData } from '../data'

import Footer from '../components/footer';
import NavBar from '../components/navbar';


interface RouteParams {
  id: string
}
const ProductDetail:React.FC = () => {
  const [prod, setProd] = useState<Product>(new Product);
  const [numCart, setNumCart] = useState(1);
  
  const params = useParams<RouteParams>();
  const route = useHistory();


  useEffect(() => {

    getProdById(params.id);
    /* if(!prod.id){
      route.push("/");
    } */
  }, []);

  const handleNumCart = (num: number) => {
    if(num != 0){
      setNumCart(num);
    }
  }
  
  const getProdById = (id:string) => {
    let result = stockData.filter(i=> i.id === "prod-11");
    console.log("filter results ...", result);
    setProd({...result[0]});
  }

  return (
    <>
      <NavBar/>
      { prod?.id &&
        <Container className="prod-container"> 
          <Row>
            <Col md={5} className='mb-4'>
              <div className='image-container'> <Image src={prod?.cover} /></div>
            </Col>
            <Col md={7}>
              <div className="prod-infos">
                <h3>{prod.name}</h3>
                <div className="prod-status"><span className="badge child-1">In stock</span> <span className="child-2">6 reviews</span> </div>
                <h4 className='mt-3'>${prod.price}</h4>
                <div className='prod-description'>
                  <p>{prod.description}</p>
                </div>
                <div className='box-dot'>Hury! Only <strong>4</strong> left in stock.</div>
              </div>
              <Row className="mt-4 vendor">
                <Col  lg={3} md={3}  className='cart-num-cont mt-2'>
                  <Button onClick={() => handleNumCart(numCart-1)} variant="secondary" className='cart-num'>-</Button>
                  <input className='cart-num' value={numCart} />
                  <Button onClick={() => handleNumCart(numCart+1)} variant="secondary" className='cart-num'>+</Button>
                </Col>
                <Col lg={9} md={9} className='mt-2 pl-0'>
                  <Button className='add-cart-button' variant="dark">Add To Cart</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      }
      <Footer/>
    </>
  )
}

export default ProductDetail;