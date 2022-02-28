import { useState, useEffect } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
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
  
  const params = useParams<RouteParams>();
  const route = useHistory();


  useEffect(() => {

    getProdById(params.id);
    /* if(!prod.id){
      route.push("/");
    } */
  }, [prod]);

  
  
  const getProdById = (id:string) => {
    let result = stockData.filter(i=> i.id === "prod-2");
    console.log("filter results ...", result);
    setProd({...result[0]});
  }

  return (
    <>
      <NavBar/>
      { prod?.id &&
        <Container className="prod-container"> 
          <Row>
            <Col md={5}>
              <div className='image-container'> <Image src={prod?.cover} /></div>
            </Col>
            <Col md={7}>
              <div className="prod-infos">
                <h3>{prod.name}</h3>
                <div className="prod-status"><span className="badge child-1">In stock</span> <span className="child-2">6 reviews</span> </div>
                <div>
                  <p>{prod.description}</p>
                </div>
                <h4>{prod.price}</h4>
              </div>
            </Col>
          </Row>
        </Container>
      }
      <Footer/>
    </>
  )
}

export default ProductDetail;