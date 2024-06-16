import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Copmponants/Navbar'
import Form from './Copmponants/Form'

function App() {

  return (
  <div className='main_Page_Div'>
    <Navbar />
    <Form />
  </div>
  )
}

export default App
