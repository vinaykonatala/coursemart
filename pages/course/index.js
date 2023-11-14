import React from 'react'
import Header from '/src/app/components/header'
import Courses from '/src/app/components/courses'
import '../globals.css'
import styles from './course.module.css'

const Home = () => (
  <div className="App">
    <div className='main'>
    <Header />
    <div className={styles.banner}>
      <div className='container'>
        <h1>Node js Courses</h1>
        <p>Join Our Comprehensive Node.js Course for Beginners to Advanced Developers. Build Scalable and High-Performance Web Applications.
           Enroll Now and Level Up Your Coding Skills!. Unlock the World of Node.js: From Basics to Advanced Techniques! 
           Dive into Asynchronous Programming, Express.js, MongoDB, and More. Hands-On Projects, Real-World Applications,
            and Expert Guidance Await You. Elevate Your Development Journey  Enroll Today!</p>
      </div>
    </div>
    <Courses />
    </div>


  </div>
);

export default Home;