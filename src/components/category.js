import '../css/category.css'
import { dataItems } from './stock'


function Category (props) {
    return (
        <div className='row'>
            {
                dataItems[props.category].map( (item, i) =>{
                    return (
                        <div className="col-sm-3 col-md-3" key={i}>
                            <div className='item'>
                                <div className='thumbnail'>
                                    <img src={item.cover} alt={item.name} width='100%'/>
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