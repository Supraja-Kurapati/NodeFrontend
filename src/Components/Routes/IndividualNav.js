import React from 'react'
import { NavLink,useNavigate } from 'react-router-dom'

const IndividualNav = () => {
   const navigate= useNavigate();

  return (
    <>
    <div className='IndividualNav'>
        <head className='thesirentext'>
        <h4 className='the'>The</h4> 
        <h1 className='siren'>Siren</h1>
        </head>

         <div className='Getstarted'>Get Started</div>

    </div>
    <div className='ParentBackandhome'>
      <div className='Homebtn'>
        <NavLink to={'/'}>
        <img src='https://static.thenounproject.com/png/610387-200.png' alt='Not Found' id='Imgbackbtn'/></NavLink></div>


        <div className='Backbtn' style={{display:"flex"}}>
          
          <img src='https://www.shutterstock.com/image-vector/arrow-back-vector-icon-direction-260nw-1638337234.jpg' alt='NotFound' id='backbtnimg' onClick={()=>navigate(-1)}/> <div className='BackText' style={{margin:"5px 5px"}}>Back</div>
          </div>
    </div>
    </>
  )
}

export default IndividualNav