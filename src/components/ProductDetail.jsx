import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const [detail, setDetail] = useState()
    const { id } = useParams()
      useEffect(() => {
        const fetchApi = async () => {
          const response = await axios.get(`https://dummyjson.com/products/${id}`);
            setDetail(response.data)
            console.log("detail", response.data);
            
        };
        fetchApi();
      }, []);
  return (
    <>
     <p>{detail?.title}</p>
     <p>{detail?.description}</p>
     <img src={detail?.images[0]} alt="" />
    
    
    
    </>
  )
}

export default ProductDetail