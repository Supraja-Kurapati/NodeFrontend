 import React,{createContext,useEffect,useState} from 'react'
import axios from 'axios'
 export const Store=createContext();

 function DataComp(props) {
const [data,setData]=useState([]);
useEffect(()=>{
  const fetchData=async()=>{
try{
    const response=await axios.get('https://blog-18eo.onrender.com/api/page')
    setData(response.data)
  }
  catch(err){
console.log("Fetch Data Error",err);
  }
  }
  fetchData()
},[])

    return(
     <Store.Provider value = {[data]}>
        {props.children}
     </Store.Provider>
    )

 }

 export default DataComp