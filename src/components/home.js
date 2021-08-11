import { Button } from 'react-bootstrap'
import '../css/home.scss'
import { homeData } from '../stock'
import SoftSLider from './slick-slider'
import BrandSlider from './brand-slider'



function Home() {
    return (
        <div className='home'>
            <div className='container-md mx-auto row'>
                {
                    homeData['section1'].map((item, i) => {
                        return (
                            <div className='col-12 col-sm-4' key={i}>
                                <div className='home-block'>
                                    <div className='block-text'>
                                        <p>{item.category}</p>
                                        <p style={{ width: '70%' }}> {item.name}</p>
                                        <p> ${item.price}</p>
                                    </div>
                                    <Button variant='dark'> Get it</Button>
                                    <div className='img-presentation' >
                                        <img src={item.cover} alt={item.category + i} width='100%' />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='all-categories mb-5'>
                <Button href={'/shop-categories'} variant='outline-secondary'>
                    All Categories
                </Button>
            </div>
            <div className='container-md mx-auto row section2 mb-0'>
                <div className='col-12 col-md-6 mb-2'>
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
                </div>
                <div className='col-12 col-md-6 img-container mb-2' style={{ minHeight: "270px" }}>
                    <div className='img-cover rounded' style={{ "backgroundImage": `url(${homeData.section2.cover})` }}>
                    </div>
                </div>
            </div>

            <div className='container-md mx-auto row section3 mb-5' style={{ "minHeight": '270px' }}>
                <div className='col-12 col-lg-12'>
                    <div className='img-cover rounded' style={{ "backgroundImage": `url(${homeData.section3.cover})` }}>
                        <div className='overlay rounded'></div>
                        <div className="position-relative"> {homeData.section3.description.split('&').map((item, i) => {
                            return (
                                <div className={`text${i}`} key={i}>{item}</div>
                            )
                        })}
                            <Button href={'#contact'} className="rounded-btn mt-5" variant='outline-dark'>Locates Stores</Button></div>
                    </div>
                </div>
            </div>

            <div className='container-md section4 mb-5'>
                <SoftSLider data={homeData['section4']} />
            </div>
            <div className='container-md mx-auto row section5'>
                <div className='col-12 col-sm-6 col-md-4'>
                    <h4 className='widget-title'>Top Sellers</h4>
                    {
                        homeData['section4'].filter((item, i)=>( i < 3)).map((item, index) => {
                            return (
                                <div className='entry' key={index} >
                                    <div className="entry-thumb">
                                        <img src={item.cover} width='62' alt='entry thumb' />
                                    </div>
                                    <div className="entry-content">
                                        <h6 className='entry-title'>{item.name}</h6>
                                        <div className='entry-price'>${item.price}</div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                <div className='col-12 col-sm-6 col-md-4'>
                    <h4 className='widget-title'>New Arrivals</h4>
                    {
                        homeData['section4'].filter((item, i)=>( i < 3)).map((item, index) => {
                        
                            return (
                                <div className='entry' key={index} >
                                    <div className="entry-thumb">
                                        <img src={item.cover} width='62' alt='entry thumb' />
                                    </div>
                                    <div className="entry-content">
                                        <h6 className='entry-title'>{item.name}</h6>
                                        <div className='entry-price'>${item.price}</div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                <div className='col-12 col-sm-6 col-md-4'>
                    <h4 className='widget-title'>Bests Rated</h4>
                    {
                        homeData['section4'].filter((item, i)=>( i < 3)).map((item, index) => {
                        
                            return (
                                <div className='entry' key={index} >
                                    <div className="entry-thumb">
                                        <img src={item.cover} width='62' alt='entry thumb' />
                                    </div>
                                    <div className="entry-content">
                                        <h6 className='entry-title'>{item.name}</h6>
                                        <div className='entry-price'>${item.price}</div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <div>
                <BrandSlider/>
            </div>
        </div>
    )
}

export default Home;