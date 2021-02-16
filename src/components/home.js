import { homeData } from './stock'
import { Button } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import '../css/home.scss'


function Home() {
    return (
        <div className='container home' >
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
            <div className='all-categories'>
                <NavLink to={'/shop-categories'}> All Categories </NavLink>
            </div>
            <div className='row'>
                <div className='col-12 col-md-6'>
                    <p> New </p>
                    <p> {homeData['section2'].name}</p>
                    <div className='countdown mb'>
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
                        <Button className="offer-btn" variant={"primary"} >View Offers</Button>
                    </div>
                </div>
                <div className='col-12 col-md-6 img-container'>
                    <div className='img-cover' style={{ "backgroundImage": `url(https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80)` }}>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;