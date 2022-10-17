import Carousel from 'react-bootstrap/Carousel'
import { heroData } from '../data'


const HeroCarousel:React.FC = () => {
    return (
        <Carousel>
            {
                heroData.map((item, i) => {
                    return (
                        <Carousel.Item interval={3000} key={i}>
                            <img className="d-block w-100" src={item.cover} alt="First slide" />
                            <Carousel.Caption>
                                <h3>{item.category}</h3>
                                <p>{item.name}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })
            }
        </Carousel>
    )
}

export default HeroCarousel;