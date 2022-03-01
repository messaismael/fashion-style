import '../css/category.scss'
import { Button, Col } from 'react-bootstrap';
import { productByCateg } from '../data';
import NavBar from './navbar';
import Footer from './footer';
import ProductCard from './product-card';
import { Product } from '../model/product.model';

type Props = {
    category:string
}

const Category = ({category}:Props) => {
    return (
        <>
            <NavBar/>
            <div className='container row' style={{ margin: 'auto' }}>
                {
                    productByCateg[category].map((item:Product, i:number) => {
                        return (
                            <Col sm={4} md={3} className="pl-1 pr-1">

                            <ProductCard product={item} />

                            {/* <div className="col-12 col-sm-4 col-md-3 mb-3" key={i}>
                                <div className='item'>
                                    <div className='product-card-thumb'>
                                        <img src={item.cover} alt={item.name} />
                                    </div>
                                    <div className='caption'>
                                        <div className='d-flex justify-content-between item-info'>
                                            <div className='item-name'>{item.name}</div>
                                            <div className='item-price'>${item.price}</div>
                                        </div>
                                        <Button className='rounded-btn' variant='outline-dark' type="button">Add to cart</Button>
                                    </div>
                                </div>
                            </div> */}</Col>
                        )
                    })
                }
            </div>
            <Footer />
        </>
    )
}

export default Category;