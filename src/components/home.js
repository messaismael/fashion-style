import { homeData} from './stock'
import { Button } from 'react-bootstrap'
import '../css/home.scss'


function Home() {
    return (
        <div className='container home' >
            <div className='row'>
                {
                    homeData.map((item, i) => {
                        return (
                            <div className='col-12 col-sm-4' key={i}>
                                <div className='home-block'>
                                    <div className='block-text'>
                                        <p>{item.category}</p>
                                        <p style={{width:'70%'}}> { item.name }</p>
                                        <p> ${item.price }</p>
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

        </div>
    )
}

export default Home;