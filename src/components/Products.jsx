import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Products = () => {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        const fetchApi = async() =>{
            const response = await axios.get("https://dummyjson.com/products")
            setProducts(response.data.products)
            console.log(response.data.products);
        }
        fetchApi()
    }, [])
  return (
    <>
    {
        products.map((item, index)=>(
      <div key={index}>
          <p>{item.title}</p>
          <p>{item.image}</p>
          <button onClick={() => navigate(`/product/${item.id}`)}>Buy now</button>
      </div>
        ))
    }
        
        </>
  )
}

export default Products