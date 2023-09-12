import React,{useEffect, useState} from 'react'
import axios from 'axios';
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {
  const [gif,setGif] = useState('');
 
   async function fetchData(){
     const url=`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}` ;
     const output=await axios.get(url);
     console.log(output);
   }
   useEffect(()=>{
    fetchData();
   },[])
 
  function clickHandler(){

  }
  return (
    <div className=' mt-[80px] w-1/2 h-[350px] flex flex-col items-center gap-y-5  bg-green-500 rounded-lg border border-black'>
      <h1 className='text-2xl underline uppercase font-bold'> A Random Gifs</h1>
      <img src={gif} width="450"/>
      <button  className='w-9/12 bg-white opacity-30 text-lg py-2 rounded-lg 'onClick={clickHandler}> 
        Generate</button>
    </div>
  )
}

export default Random
