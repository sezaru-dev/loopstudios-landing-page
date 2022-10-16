import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import LeaderSection from './components/LeaderSection'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header/>
      <main>
         <Hero/>
         <LeaderSection/>
      </main>
      <Footer/>
    </>
  )
}

export default App