import React from "react";
import Slider from "react-slick";
import ProductCard from './product-card'

type Props = {
  data:any
}

function SoftSlider({data}:Props) {
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
                data.map((product:any, i:number) => {
                    return (
                        <div key={i}>
                            <ProductCard product={product} />
                        </div>
                    )
                })
            }
        </Slider>
    </div>
  );
}

export default SoftSlider;


