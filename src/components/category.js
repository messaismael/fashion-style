import '../css/category.css'
import { dataItems } from './stock'
import { Button } from 'react-bootstrap';


function Category (props) {
    return (
        <div className='row'>
            {
                dataItems[props.category].map( (item, i) =>{
                    return (
                        <div className="col-3 col-md-3" key={i}>
                            <div className='item'>
                                <img src={item.cover} alt={item.name} height='80%'/>
                                <div className='caption'>
                                    <div className='d-flex justify-content-between item-info'>
                                        <div className='item-name'>{ item.name }</div>
                                        <div className='item-price'>${item.price}</div>
                                    </div>
                                    <Button variant='dark' type="button">Add to cart</Button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Category;