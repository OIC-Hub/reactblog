import React from 'react'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'
import Form from './components/Form'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import { FaCarAlt } from 'react-icons/fa'

function App() {

  return (
    <>
   <Navbar />
   <Button name="Login"  icon={<FaCarAlt />}/>
   <Button name="Sign up" />
   <Button name="Buy Now" />
   <Profile />
   <Card />
   <Form />
    </>
  )
}

export default App
