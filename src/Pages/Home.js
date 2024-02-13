import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Blog from './Blog';
import Loader from '../Components/Loader';
import Header from '../Components/Header';
import About from './About';
import Form from './Form';
import TravelClub from './TravelClub';


function Home() {
  return (
    <>
      <Loader/>
      <Header/>
      <Routes>
        <Route path="/" exact element={ <Form/> } />
        <Route path="about" element={ <About/> } />
        <Route path="travel" element={ <TravelClub/> } />
        <Route path="blog" element={ <Blog/> } />
      </Routes>
      <Footer/>
    </>
  )
}

export default Home;
