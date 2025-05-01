"use client"
import React from "react";
import Slider from "react-slick";

import Image from 'next/image';


const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 50000,
        autoplaySpeed: 1000,
        cssEase: "linear"
    };
     const SliderDate = [
        {
            id: 0,
            img:"/image/priscilla-du-preez-dlxLGIy-2VU-unsplash.jpg",
            title:"",
            maintitle:"",
            price:"",
        },
        {
            id: 1,
            img:"/image/freestocks-_3Q3tsJ01nc-unsplash.jpg",
            title:"",
            maintitle:"",
            price:"",
        },
        {
            id: 2,
            img:"/image/tamara-bellis-U2ymajzuqFk-unsplash.jpg",
            title:"",
            maintitle:"",
            price:"",
        },
     ];
      
     return (
        <div className="rounded-4xl sm:rounded-none">
          <div className=" container pl-20 pr-6 pt-6 lg:pt-0 outline-none border-none relative  ">
              <Slider {...settings}>
                {SliderDate.map((item) => (
                    <div key={item.id}>
                     <Image className="w-[100%] h-[300%] rounded-4xl mb:h-auto object-cover object-right
                     md:object-left-bottom " src={item.img} alt={item.title} width={1500} height={500} />
                     {item.title}
                     {item.maintitle}
                     {item.price}
                    </div>
                ))}
              </Slider>
          </div>
        </div>
     );
  
}

export default Hero;
