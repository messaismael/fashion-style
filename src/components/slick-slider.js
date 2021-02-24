import React from "react";
import Slider from "react-slick";
import { Button } from 'react-bootstrap'

function SoftSlider(props) {
    const settings = {
        dots: true,
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <div>
            <h2>Featured Products</h2>
            <Slider {...settings}>
                {
                    props.data.map((item, i) => {
                        return (
                            <div>
                                <div className='item rounded'>
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
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    );
}

export default SoftSlider;


