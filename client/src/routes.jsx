import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './Home'
import Contact from './components/Contact'
import About from './components/About'
const Router = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      
    </div>
  )
}

export default Router;
