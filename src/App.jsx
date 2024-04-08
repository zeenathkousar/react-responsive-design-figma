import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Header,Footer,Testimonials,Info,Topics,Blog } from  './components/indexcomponents'

function App() {

  return (
    <>
      <Header/>
      <Topics/>
      <Info/>
      <Blog/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default App
