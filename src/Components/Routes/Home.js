import React, { useContext } from 'react'
import {Store} from '../StoreData/Store';
import { NavLink } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import Navbar from './Navbar';

function Home() {
  const [data] =useContext(Store)
  console.log(data);

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
    <div>
            <div className='threeimages'>
                  <div className='Bigimage'> 
                    {data.filter((e)=>e.id===11).map((item,index)=>{
                     return(
                     <>
                      <img src={item.Image} alt='not found' id='webbigimg' />
                       <NavLink to={`/Individual/${item.id}`} style={{textDecoration:"none",color:"black"}}>
                       <h4 style={{marginTop:"-60px", marginLeft:"20px", color:"white"}} className='mqstyle'>{item.heading}</h4>
                       </NavLink>
                       <h5 style={{fontWeight:"bold",color:"white" ,marginTop:"-15px",marginLeft:"20px"}}>{item.category}</h5>
                    </>
                   )
                 }) }
               </div>

            <div className='twoimages'>
              <div className='image1 imagestyle'> 
              {data.filter((e)=>e.id===36).map((item,index)=>{
                  return(
                    <>
                    <img src={item.Image} alt='not found'id="imageset" />
                    <NavLink to={`/Individual/${item.id}`} style={{textDecoration:"none",color:"black"}}>
              <h4 style={{marginTop:"-60px", marginLeft:"20px",color:"white"}}>{item.heading}</h4>
              </NavLink>
              <h5 style={{fontWeight:"bold",color:"white" ,marginTop:"-15px",marginLeft:"20px"}}>{item.category}</h5>
                    </>
                  )
                }) }

               </div>
              <div className='image2 imagestyle'> 
              {data.filter((e)=>e.id===39).map((item,index)=>{
                  return(
                    <>
                    <img src={item.Image} alt='not found' id='imageset' />
                    <NavLink to={`/Individual/${item.id}`} style={{textDecoration:"none",color:"black"}}>
              <h4 style={{marginTop:"-65px", marginLeft:"20px",color:"white"}}>{item.heading}</h4>
              </NavLink>
              <h5 style={{fontWeight:"bold",color:"white" ,marginTop:"-15px",marginLeft:"20px"}}>{item.category}</h5>
                    </>
                  )
                }) }

               </div>
            </div>
          </div>
              
              <div className='topposts' style={{display:"block"}}>  
               <h3>The Latest</h3> <hr style={hrred}/>
               <div className='thelatest'>

               {data.filter((e)=>e.id%11===0).map((item,index)=>{
                return(
              <>

                        <div className='latestarticle'>
                         <div className='latestpicture'>         
                          <img src={item.Image} alt='not found' id='latestimage'/>
                         </div> 

                         <div className='latestdata'>
                           <NavLink to={`/Individual/${item.id}`} style={{textDecoration:"none",color:"black"}}>
                           <h4 className='mqstyle'>{item.heading}</h4></NavLink>
                           <p>{item.description.slice(0,200)}...</p>
                           <h5 style={{fontWeight:"bold",margin:"2px"}}>{item.category}</h5>
                          </div>
                        </div><br/>
                        
              </>
            )
          })}
          </div>
         </div>
      


         <div className='topposts' style={{display:"block"}}>  
               <h3>Latest Articles</h3> <hr style={hrred}/>
         </div> 
         <div className='homelatestarticles'>
          
            <div className='LeftArticles'> 
             <div className='homeleftarticles'>
                 {data.filter((e)=>e.id===10).map((item,index)=>{
                  return(
                    <>
                    <div className='homeimagebigpost' >
                    <div className='homeleftbigpicture'>         
                   <img src={item.Image} alt='not found' id='homeimagebigpost'/>
                   </div> 
                   <div className='homedata' >
                   <NavLink to={`/Individual/${item.id}`} style=   {{textDecoration:"none",color:"black"}}>
                   <h4 className='mqstyle'>{item.heading}</h4>
                   <p>{item.description.slice(0,200)}...</p>
                   </NavLink>
                   <h5 style={{fontWeight:"bold"}}>{item.category}</h5><br/><hr/>
                  </div> 
                 </div>
                    </>
                  )
                 })}
             </div>

             <div className='homeleftarticles'>
                 {data.filter((e)=>e.id%8===0).map((item,index)=>{
                  return(
                    <>
                    <div className='homelftsmlartcles'>
                    <div className='homeleftsmallpicture'>         
                   <img src={item.Image} alt='not found' id='homeleftsmallpicture'/>
                   </div> 
                   <div className='homesmalldata'>
                   <NavLink to={`/Individual/${item.id}`} style=   {{textDecoration:"none",color:"black"}}>
                   <h4>{item.heading}</h4>
                   <p>{item.description.slice(0,200)}</p>
                   </NavLink>
                   <h5 style={{fontWeight:"bold"}}>{item.category}</h5><hr/>
                  </div> 
                  
                 </div>

                 
                    </>
                  )
                 })}
             </div>
              <br/>
             <div className='Load'>
          <img src='https://cdn-icons-png.flaticon.com/512/56/56747.png' alt='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtmvVsAn9Aw6jar5FaWhMvz6DSw9aEHNQAqw&usqp=CAU' id='load'/>
         <p id='loadtext'>Load More</p></div>

         <div className='carouselarticles'>
                 {data.filter((e)=>e.id===7).map((item,index)=>{
                  return(
                    <>
                    
                    <div>
                    
                      <img src={item.Image}  alt='Not Found' id='carouselimg' />
                      <div className='carouseltext'>
                      <h4 className='mqstyle'>{item.heading}</h4>
                      <h4 className='mqstyle'>{item.category}</h4>
                      </div>
                      
                    </div>
                    
                    </>
                  )
                 })}

              </div>


       </div>
              
            

            <div className='RightArticles'> 

                <div className='homeAdvertisementparent'>
                 <div className='homeAdvertisement'>
               <img src='https://i.pinimg.com/564x/44/69/c7/4469c769cb0d648dedccabe24d6fab8e.jpg' alt='Not Found' id='homeads'/>
               </div>
              </div>

              <div className='homebigpost'>
              {data.filter((e)=>e.id===25).map((item,index)=>{
               return(
               <>
            <div className='homebigarticle hid'>
            <div className='homepicture'>         
            <img src={item.Image} alt='not found' className='homerightbigimg'/>
            </div> 
            <div className='homedataright'>
              <NavLink to={`/Individual/${item.id}`} style={{textDecoration:"none",color:"black"}}>
              <h3>{item.heading}</h3>
              </NavLink>
              <h5 style={{fontWeight:"bold"}}>{item.category}</h5>
            </div> <br/><hr/>
            </div>

            <div className='smallposts'> 
            {data.filter((e)=>e.id%12===0).map((item,index)=>{
               return(
               <>
               <div id='smallposts'>
                <img src={item.Image} alt='NOT Found' id='smallpostsimg'/>
                     <div>
                <NavLink to={`/Individual/${item.id}`} style={{textDecoration:"none",color:"black"}}>
                <h4 className='mqstyle'>{item.heading}</h4></NavLink>
                <h5 className='mqstyle' style={{fontWeight:"bold"}}>{item.category}</h5>
                </div> 
                </div>
                </> 
               )
            })}
            </div>

            </>
           )
           })}
           </div> 

                


      </div>
            </div>

<div className='LatestStories'>
<div className='topposts' style={{display:"block"}}>  
         <h3>Latest Stories</h3> <hr style={hrred}/>
         </div><hr/>

     <div className='homeLatestpost' >
      {data.filter((e)=>e.id%13===4).map((item,index)=>{
        return(
          <div className='latestarticlehome'>
            <>
            <NavLink to={`/Individual/${item.id}`} style={{textDecoration:"none",color:"black"}}>

            <h3>{item.heading.slice(0,60)}</h3>
            <p>{item.description.slice(0,300)}...</p>           
             </NavLink>

            <span style={{fontWeight:"bold"}}>{item.category}</span>
            </>
          </div>
        )
      })}
     </div>

</div>

  </div>
        

  </>     
      
  )
}

export default Home