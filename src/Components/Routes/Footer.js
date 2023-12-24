import React from 'react'
import Logo from './Images/siren.png'
import copyright from './Images/copyright.png'

const Footer = () => {
  return (
    <div className='parentFooter'>
        <div className='ChildFooter'>

             <div className='Footerlogo'><img src={Logo} alt='Not Found' id='Footerlogo'/></div>
             
             <div className='columnone'>
                <h4 className='boldtext'>Company</h4>
                <ul style={{listStyleType:"none",color:"white"}}>
                    <li>About us</li>
                    <li>Quality & Services</li>
                    <li>Brands</li>
                    <li>Contact</li>
                </ul>
             </div>

             <div className='columntwo'>
                <ul style={{listStyleType:"none",color:"white"}}>
                <br/>

                    <li>Privacy Policy</li>
                    <li>Payment Methods</li>
                    <li>T&C's</li>
                    <br/>
                    <li>Use of Cookies</li>
                    <li>Cookies Policy</li>
                </ul>
             </div>

             <div className='columnthree'>
                <h4 className='boldtext' style={{textDecoration:"underline"}}>Newletter</h4>
             </div>


             <h3 style={{color:"white"}}> <img className='copyright' src={copyright} alt='notfound'/>   2023.Supraja</h3>


        </div>
    </div>
  )
}

export default Footer