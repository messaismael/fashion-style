import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link, Router, useNavigate } from 'react-router-dom';
import { homeData } from '../data'
import SoftSLider from '../components/slick-slider'
import HeroCarousel from '../components/hero-carousel';
import BrandSlider from '../components/brand-slider'
import NavCategory from '../components/nav-category'

import Footer from '../components/footer';
import NavBar from '../components/navbar';

const Home:React.FC = () => {

    let navigate = useNavigate();


    const goToLink = (path: string) => {

        navigate("/"+path);
    }


    return (
        <>
            <NavBar />
            <div className='home'>
                <Container fluid>
                    <HeroCarousel />
                    <NavCategory />
                </Container>

                <Container>
                    <Row className='mt-4 mb-4   '>
                    {
                        homeData['section1'].map((item, i) => {
                            return (
                                <Col key={i} sm={4}>
                                    <div className='home-block mt-3'>
                                        <div className='block-text'>
                                            <p>{item.category}</p>
                                            <p style={{ width: '70%' }}> {item.name}</p>
                                            <p> ${item.price}</p>
                                        </div>
                                        <Button onClick={()=>goToLink("product/"+item.id)} variant='dark'> Get it</Button>
                                        <div className='img-presentation' >
                                            <img src={item.cover} alt={item.category + i} width='100%' />
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    }
                    </Row>
                </Container>
                <Container>
                    <div className='all-categories mb-4'>
                        <Button href={'/shop-categories'} variant='outline-secondary'>
                            All Categories
                        </Button>
                    </div>
                    <Row className='section2'>
                        <Col md={6} className='mt-2'>
                            <div className="rounded bg-light pb-5 position-relative">
                                <span className='product-badge'>LIMITED OFFER</span>
                                <h3 className="pt-5"> New </h3>
                                <h1> {homeData['section2'].name}</h1>
                                <div className='countdown'>
                                    <div className='date-item'>
                                        <div className='days mb-2'>00</div>
                                        <div className='days-label'>DAYS</div>
                                    </div>
                                    <div className='date-item'>
                                        <div className='hours mb-2'>00</div>
                                        <div className='hours-label'>HOURS</div>
                                    </div>
                                    <div className='date-item'>
                                        <div className='mins mb-2'>00</div>
                                        <div className='mins-label'>MINS</div>
                                    </div>
                                    <div className='date-item'>
                                        <div className='secs mb-2'>00</div>
                                        <div className='secs-label'>SECS</div>
                                    </div>
                                </div>
                                <div className='btn-container' >
                                    <Button variant={"secondary"} >View Offers</Button>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} className='mt-2'>
                            <div className='img-container position-relative' style={{ minHeight: "280px", height:"100%" }}>
                                <div className='img-cover rounded' style={{ "backgroundImage": `url(${homeData.section2.cover})` }}></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row className='section3 mb-5' style={{ "minHeight": '270px' }}>
                        <Col lg={12}>
                            <div className='img-cover rounded' style={{ "backgroundImage": `url(${homeData.section3.cover})` }}>
                                <div className='overlay rounded'></div>
                                <div className="position-relative"> 
                                    {
                                        homeData.section3.description.split('&').map((item, i) => {
                                            return (
                                                <div className={`text${i}`} key={i}>{item}</div>
                                            )
                                        })
                                    }
                                    <Button href={'#contact'} className="rounded-btn mt-5" variant='outline-dark'>Locates Stores</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container className='section4 mb-5'>
                    <h2>Featured Products</h2>
                    <SoftSLider data={homeData['section4']} />
                </Container>
                <div className='container mx-auto row section5'>
                    <div className='col-12 col-sm-6 col-md-4'>
                        <h4 className='widget-title'>Top Sellers</h4>
                        {
                            homeData['section4'].filter((item, i)=>( i < 3)).map((item, index) => {
                                return (
                                    <Link to={`/product/${item.id}`} key={index}>
                                        <div className='entry' key={index} >
                                            <div className="entry-thumb">
                                                <img src={item.cover} width='62' alt='entry thumb' />
                                            </div>
                                            <div className="entry-content">
                                                <h6 className='entry-title'>{item.name}</h6>
                                                <div className='entry-price'>${item.price}</div>
                                            </div>
                                        </div>
                                    </Link>

                                );
                            })
                        }
                    </div>
                    <div className='col-12 col-sm-6 col-md-4'>
                        <h4 className='widget-title'>New Arrivals</h4>
                        {
                            homeData['section4'].filter((item, i)=>( i < 3)).map((item, index) => {
                            
                                return (
                                    <Link to={`/product/${item.id}`} key={index}>
                                        <div className='entry' key={index} >
                                            <div className="entry-thumb">
                                                <img src={item.cover} width='62' alt='entry thumb' />
                                            </div>
                                            <div className="entry-content">
                                                <h6 className='entry-title'>{item.name}</h6>
                                                <div className='entry-price'>${item.price}</div>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })
                        }
                    </div>
                    <div className='col-12 col-sm-6 col-md-4'>
                        <h4 className='widget-title'>Bests Rated</h4>
                        {
                            homeData['section4'].filter((item, i)=>( i < 3)).map((item, index) => {
                            
                                return (
                                    <Link to={`/product/${item.id}`} key={index}>
                                        <div className='entry' key={index} >
                                            <div className="entry-thumb">
                                                <img src={item.cover} width='62' alt='entry thumb' />
                                            </div>
                                            <div className="entry-content">
                                                <h6 className='entry-title'>{item.name}</h6>
                                                <div className='entry-price'>${item.price}</div>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })
                        }
                    </div>
                </div>
                <div className='container mx-auto mt-4 section6'>
                    <BrandSlider/>
                </div>

                <div className='container'>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;