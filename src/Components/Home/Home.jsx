import React from 'react'
import Header from '../Header/Header'
import SearchHouse from '../SeachHouse/SearchHouse'
import Footer from '../Footer/Footer'
import PopularProperties from '../PopularProperties/PopularProperties'
import GetAllProperties from '../GetAllProperties.jsx/GetAllProperties'
import PostSellerProperty from '../PostProperty/PostProperty.jsx'

const Home = () => {
  return (
    <>
      <Header/>
      <SearchHouse/>
      <GetAllProperties/>
      <PostSellerProperty/>
      {/* <PopularProperties/> */}
      <Footer/>
    </>
  )
}

export default Home