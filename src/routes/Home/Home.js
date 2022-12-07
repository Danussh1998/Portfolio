import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../homepage/Footer/Footer';
import HomePage from '../../homepage/HomePage'
import '../Home/Home.css';
const Home = () => {
  return (
    <div className='home-container'>
      <Navbar></Navbar>
      <HomePage></HomePage>
      <Footer></Footer>
    </div>
  )
}

export default Home
