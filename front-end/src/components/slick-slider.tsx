import React from "react";
import Slider from "react-slick";
import { Product } from "../model/product.model";
import ProductCard from './product-card'

type Props = {
  data:any
}

function SoftSlider({data}:Props) {
  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
      <Slider {...settings}>
        {
          data.map((prod:Product, i:number) => {
            return (
              <div key={i}>
                <ProductCard product={prod}  />
              </div>
            )
          })
        }
      </Slider>
    </div>
  );
}

export default SoftSlider;


