import React from 'react'
import Mortal from "/Wood.png"
import Pokergame from "/pokergame.png"
import { FaAddressBook, FaAirbnb, FaCartPlus, FaGlobe } from 'react-icons/fa';

const Card = () => {
    const data = [
      {
        img: Mortal,
        title: "Mortal",
        price: "#3,000",
        // icon: <FaCartPlus />,
        desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus quos vitae quia sapiente sint aliquam deleniti tempore hic nihil libero at, perspiciatis suscipit asperiores, minus necessitatibus fugit repudiandae corrupti maiores.`,
      },
      {
        img: Pokergame,
        title: "Mortal",
        price: "#31,000",
        // icon: <FaGlobe />,
        desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus quos vitae quia sapiente sint aliquam deleniti tempore hic nihil libero at, perspiciatis suscipit asperiores, minus necessitatibus fugit repudiandae corrupti maiores.`,
      },
      {
        img: Mortal,
        title: "Mortal",
        price: "#34,000",
        // icon: <FaAddressBook />,
        desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus quos vitae quia sapiente sint aliquam deleniti tempore hic nihil libero at, perspiciatis suscipit asperiores, minus necessitatibus fugit repudiandae corrupti maiores.`,
      },
      {
        img: Pokergame,
        title: "Mortal",
        price: "#35,000",
        // icon: <FaAirbnb />,
        desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus quos vitae quia sapiente sint aliquam deleniti tempore hic nihil libero at, perspiciatis suscipit asperiores, minus necessitatibus fugit repudiandae corrupti maiores.`,
      },
    ];
  return (
    <>
     <div className='card' style={{display: "flex", justifyContent: "space-evenly", gap: "4px"}}>
        {
            data.map((item, index)=>(
                <div key={index} style={{border: "1px solid grey", padding: "5px", borderRadius: "8px"}}>
                   <img src={item.img} alt={item.title} />
                   <p>{item.title}</p>
                   <p>{item.price}</p>
                   <p>{item.desc}</p>
                   <p>{item.icon}</p>
                   <FaCartPlus />
                   <button>Buy Now</button>
                </div>
            ))
        }
     </div>
    
    
    
    
    </>
  )
}

export default Card