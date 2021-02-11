import Carousel from 'react-bootstrap/Carousel'
import '../css/hero-carousel.css'
import { heroData } from './stock.js'


function HeroCarousel() {
    return (
        <div>
            <Carousel>
                {
                    heroData.map((item, i) => {
                        return (
                            <Carousel.Item interval={50000} key={i}>
                                <img
                                    className="d-block w-100"
                                    src={item.cover}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>{item.category}</h3>
                                    <p>{item.name}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default HeroCarousel;