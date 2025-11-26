import React, { useState } from 'react'
import Toast from "./Toast"

const Practice = () => {
     const [count, setCount] = useState(0)
     const [color, setColor] = useState("red")
     const [toast, setToast] = useState(false)
 
     const handleCount = () =>{
        setCount((count) => count + 1)
     }

    //  function handleCount(){
    //      setCount((count) => count + 1);
    //  }

     const changeColor = () => {
        setColor("blue")
     }

     const handleToast = () =>{
        setToast(true)
     }
  return (
    <>
      <p>{count}</p>
      <button onClick={handleCount}>Count</button>
      <p style={{ backgroundColor: `${color}` }}>{color}</p>
      <button onClick={changeColor}>Change color</button>
      <button onClick={handleToast}>Show Toast</button>
      {toast && (
       <Toast />
      )}
    </>
  );
}

export default Practice