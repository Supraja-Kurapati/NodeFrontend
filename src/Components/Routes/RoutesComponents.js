import React from 'react'
import Home from './Home'
import Hollywood from './Hollywood'
import Bollywood from './Bollywood'
import Food from './Food'
import Fitness from './Fitness'
import Technology from './Technology'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import DataComp from '../StoreData/Store'
import DataComp from '../StoreData/Store'
import Individual from './Individual'

function RoutesComponents() {
  return (
    <div>
        <BrowserRouter>
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