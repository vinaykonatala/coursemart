import React from 'react'
import Header from '../src/app/components/header'
import Banner from '../src/app/components/banner'
import Wizard from '../src/app/components/wizard'
import Courses from '../src/app/components/courses'
import './globals.css'

const Home = () => (
  <div className="App">
    <div className='main'>
    <Header />
    <Banner />
    <Courses />
    {/* <Wizard /> */}
    </div>


  </div>
);

export default Home;