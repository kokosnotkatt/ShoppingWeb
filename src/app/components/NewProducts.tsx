"use client"
import React from 'react'
import Image from "next/image";


const ProductsData = [
    {
        id:0,
        img: "/image/jacket.jpg",
        title:"jacket",
        desc:"jacket",
        rating:"4",
        price:"45.00",
    },
    {
        id:1,
        img: "/image/Shirt.jpg",
        title:"Shirt",
        desc:"Shirt",
        rating:"5",
        price:"35.00",
    },
    {
        id:2,
        img: "/image/Watches.jpg",
        title:"Watches",
        desc:"Watches",
        rating:"4",
        price:"75.00",
    },


]

const NewProducts = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="frot-medium text-2xl pb-4">New Products</h2>
        <div className="grid grid-cols-1 place-items-center sm:place-content-start sm:grid-cols-2
        lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10 w-[1000px] h-[500px]">
        {ProductsData.map(( item ) => (
            <div className=" grid grid-cols-1" key={item.id}>
            <Image className="w-full h-full object-cover border border-gray-200 rounded-xl hover:scale-110 transition-all duration-120 "  
            src={item.img} alt={item.title} width={1000} height={500} />
             
             <div className="flex justify items-center font-bold text-xl mt-2 text-gray-500">
              <p className="mr-10">ชื่อ</p> {item.desc}
             </div>
             <div className="flex justify items-center font-bold text-xl mt-2 text-gray-500" >
              <p className="mr-10">คะเเนน</p> {item.rating}
             </div>
             <div className="flex justify items-center font-bold text-xl mt-2 text-gray-500">
              <p className="mr-10">ราคา</p> {item.price}
             </div>
            </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default NewProducts
