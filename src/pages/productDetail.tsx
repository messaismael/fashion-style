import { useState, useEffect } from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import { Product } from '../model/product.model';
import SoftSLider from '../components/slick-slider'


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
    window.scrollTo(0, 0)

    getProdById(params.id);
    /* if(!prod.id){
      route.push("/");
    } */
  }, [params]);

  const handleNumCart = (num: number) => {
    if(num !== 0){
      setNumCart(num);
    }
  }
  
  const getProdById = (id:string) => {
    let result = stockData.filter(i=> i.id === params.id);
    console.log("filter results ...", result);
    setProd({...result[0]});
  }

  return (
    <>
      <NavBar/>
      { prod?.id &&
        <div className="prod-container" style={{"marginTop":80}}> 
          <Row  style={{minHeight: "70vh"}} className="mb-5">
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
                <Col  lg={3} md={3} sm={4} xs={8} style={{margin: "auto"}} className='cart-num-cont mt-2'>
                  <Button onClick={() => handleNumCart(numCart-1)} variant="secondary" className='cart-num'>-</Button>
                  <input className='cart-num' onChange={()=>{}} value={numCart} />
                  <Button onClick={() => handleNumCart(numCart+1)} variant="secondary" className='cart-num'>+</Button>
                </Col>
                <Col lg={9} md={9} sm={8} xs={11} className='mt-2' style={{margin: "auto"}}>
                  <Button className='add-cart-button' variant="dark">Add To Cart</Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <div>
            <h4>Related Products</h4>
            <p style={{"margin":"auto", "width":"60%" }}>You can stop autoplay, increase/decrease, animation speen and number of grid to show and product form store admin</p>
            <div>
              <SoftSLider data={stockData}/>
            </div>
          </div>
        </div>
      }
      <Footer/>
    </>
  )
}

export default ProductDetail;