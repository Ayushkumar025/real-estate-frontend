import React from 'react'

import SearchHouse from '../SeachHouse/SearchHouse'
import Footer from '../Footer/Footer'
import PopularProperties from '../PopularProperties/PopularProperties'
import GetAllProperties from '../GetAllProperties.jsx/GetAllProperties'
import PostSellerProperty from '../PostProperty/PostProperty.jsx'
import Carousel from '../Carousel/Carousel.jsx'
import Navbar from '../Header/Header.jsx'
import Customer from '../Customer/Customer.jsx'

const Home = () => {

  const imageArray = [
    "./Images/images.jpeg",
    "./Images/1.jpg",
    "./Images/2.jpg",
    "./Images/3.jpg",
    "./Images/4.jpeg"
  ];

  return (
    <>
      <Navbar/>
      <SearchHouse/>
      <div>
        <div className="m-5 mb-20 flex justify-center items-center">
          <Carousel images={imageArray} />
        </div>
      </div>
      <div className="m-5 mb-20 flex justify-center items-center mt-10">
          <Customer/>
      </div>
      <div className='hidden'>
        <GetAllProperties/>
      </div>
      <Footer/>
    </>
  )
}

export default Home