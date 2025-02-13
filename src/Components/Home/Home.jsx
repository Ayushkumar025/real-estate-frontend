import React from 'react'
import Header from '../Header/Header'
import SearchHouse from '../SeachHouse/SearchHouse'
import Footer from '../Footer/Footer'
import PopularProperties from '../PopularProperties/PopularProperties'

const Home = () => {
  return (
    <>
      <Header/>
      <SearchHouse/>
      {/* <PopularProperties/> */}
      <Footer/>
    </>
  )
}

export default Home