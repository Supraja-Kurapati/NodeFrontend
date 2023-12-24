import React, { useContext } from 'react'
import {Store} from '../StoreData/Store'
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';

function Bollywood() {
  const [data] =useContext(Store);
  console.log(data)
 
const hrred={
  border:' 1px solid rgb(226, 17, 17)'
  ,borderRadius:"10px",
   width:"30px",
   marginTop:"-10px", 
   marginLeft:"0px"
}
  return (
    <>
    <Navbar/> 
    <div className='dataParent'>
      <div className='menutopposts'>
      <div className='menu'>
        <h3>BOLLYWOOD</h3> <hr style={hrred}/>
        {data.filter((e) => e.category === 'Bollywood').map((item, index)=>{
          
        return(
          <>
          <div className='article'>
          <div className='picture'>         
          <img src={item.Image} alt='not found' id='image'/>
          </div> 

          <div className='data mqstyle'>
          <NavLink to={`/Individual/${item.id}`} style={{textDecoration:"none",color:"black"}}>
          <h4>{item.heading}</h4></NavLink>
          <p>{item.description.slice(0,180)}...</p>
          <h5 style={{fontWeight:"bold"}}>{item.category}</h5>
          </div>
          </div>
          <hr/>
          
          
          </>
          
          )
        })}  
         <div className='Load'>
          <img src='https://cdn-icons-png.flaticon.com/512/56/56747.png' alt='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtmvVsAn9Aw6jar5FaWhMvz6DSw9aEHNQAqw&usqp=CAU' id='load'/>
         <p id='loadtext'>Load More</p></div>

       </div>

        <div className='topposts' style={{display:"block"}}>  
         <h3>Top Posts</h3> <hr style={hrred}/>
          <div className='bigpost'>
          {data.filter((e)=>e.id===6).map((item,index)=>{
           return(
            <>
            <div className='parentpicture'>
            <div className='picture'>         
            <img src={item.Image} alt='not found' id='imagebigpost'/>
            </div> 
            <div className='dataright'>
              <NavLink to={`/Individual/${item.id}`} style={{textDecoration:"none",color:"black"}}>
              <h4 className='mqstyle'>{item.heading}</h4>
              </NavLink>
              <h5 style={{fontWeight:"bold"}} className='mqstyle'>{item.category}</h5>
            </div> <hr/>
            </div>

            <div className='smallposts'> 
            {data.filter((e)=>e.id%12===0).map((item,index)=>{
               return(
               <>
               <div className='mqroutespost'>
                <img src={item.Image} alt='NOT Found' id='smallpostsimg'/>
                
                <div className='mqroutesheadcategory'>                <NavLink to={`/Individual/${item.id}`} style={{textDecoration:"none",color:"black"}}>
                <h4>{item.heading}</h4></NavLink>
                <h5 style={{fontWeight:"bold"}}>{item.category}</h5></div>
</div>
                <hr/>
                </> 
               )
            })}
            </div>

            </>
           )
           })}
           </div> <br/>
           <div className='Advertisementparent'>
            <div className='Advertisement'>
              <img src='https://i.pinimg.com/564x/44/69/c7/4469c769cb0d648dedccabe24d6fab8e.jpg' alt='Not Found' id='ads'/>
            </div>
           </div>

         </div> 

        </div>            
     </div>
     
</>
  )
}

export default Bollywood

