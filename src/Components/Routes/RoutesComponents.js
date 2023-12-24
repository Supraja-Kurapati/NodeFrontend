import React from 'react'
import Home from './Home'
import Hollywood from './Hollywood'
import Bollywood from './Bollywood'
import Food from './Food'
import Fitness from './Fitness'
import Technology from './Technology'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import DataComp from '../StoreData/Store'
import Individual from './Individual'

function RoutesComponents() {
  // const menustyle={
  //   textDecoration:'none',
  //   color: "black",
  //   fontWeight:"bold",
  //   fontSize:"large",
  //   fontFamily:"Serif",
  //   textShadow:"2px 2px 2px grey"
  // }
  return (
    <div>
      {/* <head className='thesirentext'>
        <h4 className='the'>The</h4> 
        <h1 className='siren'>Siren</h1>
      </head> */}
        <BrowserRouter>
        {/* <nav className='Navbar'>
        <NavLink to='/' style={menustyle}>   Home   </NavLink>
        <NavLink to='/Bollywood' style={menustyle} >   Bollywood   </NavLink>
        <NavLink to='/Hollywood' style={menustyle} >   Hollywood   </NavLink>
        <NavLink to='/Food' style={menustyle}>   Food   </NavLink>
        <NavLink to='/Fitness' style={menustyle}>   Fitness   </NavLink>
        <NavLink to='/Technology' style={menustyle}>   Technology   </NavLink>
        </nav>
        <hr style={{width:"100%"}}/> */}
       <DataComp>
        <Routes>

            <Route path='/' element={<Home/>}></Route>
            <Route path='/Bollywood' element={<Bollywood/>}></Route>
            <Route path='/Hollywood' element={<Hollywood/>}></Route>
            <Route path='/Food' element={<Food/>}></Route>
            <Route path='/Fitness' element={<Fitness/>}></Route>
            <Route path='/Technology' element={<Technology/>}></Route>

            <Route path='/Individual/:id'  element={<Individual/>}></Route>
        </Routes>
        </DataComp>

        </BrowserRouter>
        
    </div>
  )
}

export default RoutesComponents