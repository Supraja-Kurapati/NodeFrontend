import React from 'react'
import { useRef } from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
const menustyle={
        textDecoration:'none',
        color: "black",
        fontWeight:"bold",
        fontSize:"large",
        fontFamily:"Serif",
        textShadow:"2px 2px 2px grey"
      }

      const navRef = useRef();
      const shownavbar=()=>{
        navRef.current.classList.toggle("responsivenav")
      }
  return (
    <header>
    <div className='navmq'>
      <head className='thesirentext'>
        <h4 className='the'>The</h4> 
        <h1 className='siren'>Siren</h1>
      </head>


      <nav className='Navbar' ref={navRef}>
        <NavLink to='/' style={menustyle}>   Home   </NavLink>
        <NavLink to='/Bollywood' style={menustyle} >   Bollywood   </NavLink>
        <NavLink to='/Hollywood' style={menustyle} >   Hollywood   </NavLink>
        <NavLink to='/Food' style={menustyle}>   Food   </NavLink>
        <NavLink to='/Fitness' style={menustyle}>   Fitness   </NavLink>
        <NavLink to='/Technology' style={menustyle}>   Technology   </NavLink>

       <button onClick={shownavbar} className='navbtn navclosebtn'> <img src='https://cdn-icons-png.flaticon.com/512/61/61155.png' alt='NotFound' id='navmobclose'/> </button>

        </nav>
        <button onClick={shownavbar} className='navbtn'>
          <img src='https://freesvg.org/img/menu-icon.png' alt='notfound' id='navmobclose'/>
        </button>


    </div>
    <hr style={{width:"100%"}}/>

    </header>

  )
}

export default Navbar