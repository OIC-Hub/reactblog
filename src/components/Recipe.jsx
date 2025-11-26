import React, { useEffect, useState } from 'react'
import axios from "axios"

const Recipe = () => {
const [recipe, setRecipe] = useState([])
//    useEffect(()=>{
//     const fetchApi = async () => {
//       await fetch("https://dummyjson.com/recipes")
//         .then((res) => res.json())
//         .then((data) => {
//           setRecipe(data.recipes);
//           console.log(data.recipes);
//         });
//     };
//     fetchApi()
//    }, [])

  useEffect(()=>{
    const url = "https://dummyjson.com/recipes";
    const fetchData = async() => {
        const response = await axios.get(url);
        setRecipe(response.data.recipes)
        console.log(response.data.recipes);
        
    }
    fetchData()
  }, [])



  return (
    <>
    {
        recipe.map((item, index)=>(
         <div key={index}>
              <p>{item.name}</p>
              <img src={item.image} alt="" />
         </div>
        ))
    }
    
    
    
    </>
  )
}

export default Recipe