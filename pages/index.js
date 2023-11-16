import React from 'react'
import Header from '../src/app/components/header'
import Banner from '../src/app/components/banner'
import Wizard from '../src/app/components/wizard'
import Courses from '../src/app/components/courses'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

const Home = () => (
  <ClerkProvider>
    <main className='main'>
      <Header />
      <Banner />
      <Courses />
      {/* <Wizard /> */}
    </main>
  </ClerkProvider>
)

export default Home
