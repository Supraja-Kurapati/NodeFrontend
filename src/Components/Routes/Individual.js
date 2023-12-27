import React,{useContext} from 'react'
import { useParams } from 'react-router-dom'
import { Store } from '../StoreData/Store'
import profile from './Images/profile.png';
import { NavLink } from 'react-router-dom';
import IndividualNav from './IndividualNav';

export default function Individual() {
  const individualId =useParams().id;
  const [ContextData]=useContext(Store);
const [data]=useContext(Store)
    return (
   <>
   <IndividualNav/>
   <div className='individualparent'>
       
         <div className='clapsandshareparent'>
          <div className='clapsandshareimages'>
            <div className='clap'>
              <div className='clapsimage'>
                  <img src='https://www.supercoloring.com/sites/default/files/styles/coloring_full/public/cif/2021/12/clapping-hands-coloring-page.png' alt='not found' id='clapsimage'/>
              </div><span style={{paddingTop:"15px"}}>4.3K</span>
            </div> 
            <div className='share'>
              <div className='shareimage'>
              <img src='https://cdn.icon-icons.com/icons2/1477/PNG/512/socialshare_101904.png' alt='Not Found' id='shareimage'/>
              </div><span style={{paddingTop:"8px",paddingLeft:"5px"}}>Share this article</span>
            </div>  
          </div>
         </div>

         <div className='individualdata'>
            
            {ContextData.filter((data)=>data.id===parseInt(individualId)).map((item,index)=>{
             return(
            <div key={index}>
            <h2 className='mqhead'> {item.heading}</h2>

           <div className='ProfileParent'>
              <div className='Profile'>
                <img src={profile}alt='Not found'/> 
                <div className='ProfileName' >
                  <p id='profilenameName'>Supraja</p> <p id='profilenameread'>23/12/23  .5 mins read</p>
                  </div> 
                </div>

                <div className='socialmediaicons'>
                  <div><img src='https://cdn3.iconfinder.com/data/icons/picons-social/57/43-twitter-512.png' alt='Not found' id='socialmedia'/> </div>

                  <div><img src='https://www.iconpacks.net/icons/1/free-linkedin-icon-112-thumb.png' alt='Not found' id='socialmedia' /> </div> 

                  <div><img src='https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png' alt='Not found' id='socialmedia'/> </div> 

                  <div><img src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-icon.png' alt='Not found' id='socialmedia'/> </div>                  
                </div>

           </div>

            <img src={item.Image} alt="not Found" id='mqimg' className='mob' style={{height:"20vw",width:"100%"}}/>
            <p id='mqdescription'>{item.description}</p>                
            </div>
            )
            })}


<div className='boxes' style={{display:"flex"}}>
  <div className='like'> <img src='https://cdn-icons-png.flaticon.com/512/126/126473.png' alt='not found' id='boxes'/> </div>
  <div className='dislike'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa_GpMsxfkUs95_MC7-LtnLts9UrBmynm5Xg&usqp=CAU' alt='not found' id='boxes' style={{marginTop:"10px"}}/></div>
  <div className='comment'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9JkJbYV8vI1jgtGodj0zYUEIULTK0hvrSHQ&usqp=CAU' alt='not found' id='boxes'/></div>
</div> <hr/>

<div className='ProfileParent'>
              <div className='Profile'>
                <img src={profile}alt='Not found'/> 
                <div className='ProfileName' >
                 <p style={{color:"grey"}}> Written By</p>
                  <p id='profilenameName'>Supraja</p> <p id='profilenameread'>23/12/23  .5 mins read</p>
                  </div> 
                </div>
</div><hr/>
         </div>
         <div className='empty'></div>


         <div className='MorefromSiren'>
         
         <h4 id='morefromsiren'>More From The Siren</h4>
            <hr/>

              <div className='parentmoresirenposts'>
                <div className='moresirenposts'>
                 
            {data.filter((e)=>e.id%13===3).map((item,index)=>{
               return(
               <>
               <div className='sirenpost'>
                <img src={item.Image} alt='NOT Found' id='sirenpostsimg' className='mqprofile'/>
                <NavLink to={`/Individual/${item.id}`} style={{textDecoration:"none",color:"black"}}>
                <h4>{item.heading.slice(0,60)}</h4></NavLink>
                <h5 style={{fontWeight:"bold"}}>{item.category}</h5>

                <div className='ProfileParent mqprofile'>
              <div className='Profile'>
                <img src={profile}alt='Not found' id='Mqtabletimg'/> 
                <div className='ProfileName' >
                 <p style={{color:"grey"}}> Written By</p>
                  <p id='profilenameName'>Supraja</p> <p id='profilenameread'>23/12/23  .5 mins read</p>
                  </div> 
                </div>
</div>
                </div>
                </> 
               )
            })}
            
           


                </div>
              </div>
{/*  */}
         


         </div>
   </div><br/><br/>

   </>
   
  )
}
