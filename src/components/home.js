import { homeData } from './stock'
import { Button } from 'react-bootstrap'
import '../css/home.scss'


function Home() {
    return (
        <div className='container-md home' >
            <div className='row'>
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
                <Button  href={'/shop-categories'} variant='outline-secondary'>
                    All Categories
                </Button>
            </div>
            <div className='row promotion'>
                <div className='col-12 col-md-6 mb-5'>
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
                <div className='col-12 col-md-6 img-container mb-5' style={{ minHeight: "270px" }}>
                    <div className='img-cover rounded' style={{ "backgroundImage": `url(https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80)` }}>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;