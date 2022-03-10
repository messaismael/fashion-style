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
            <div className=' row' style={{ margin: 'auto', padding: "0 30px","maxWidth": '1200px' }}>
                {
                    productByCateg[category].map((item:Product, i:number) => {
                        return (
                            <Col sm={4} md={3} className="pl-1 pr-1">
                                <ProductCard product={item} />
                            </Col>
                        )
                    })
                }
            </div>
            <Footer />
        </>
    )
}

export default Category;