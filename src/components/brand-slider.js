import React from "react";
import Slider from "react-slick";
import { brandList } from "../stock"


function BrandSlider(props) {
  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
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
          brandList.map((item, i) => {
            return (
              <div key={i}>
                <div className=''>
                  <img src={item.image} alt={item.name}/>
                </div>
              </div>
            )
          })
        }
      </Slider>
    </div>
  );
}

export default BrandSlider;


