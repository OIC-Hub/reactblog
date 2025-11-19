import React, { useState } from "react";
import "../styles/Form.css"


const Form = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleLogin = (e) => {
        e.preventDefault()
        setEmail(email)
        setPassword(password)
        console.log(email, password);  
        localStorage.setItem(email, JSON.stringify([email, password]))
    }
    //   if (!(email.includes("@") && email.includes("."))) {
    //     console.log("Enter a valid email");
    //   } else {
    //     console.log("Good");
    //   }

 
  return (
    <>
      <form action="" id="login-form">
        <h2>Login</h2>
        <div>
            <p>{email}</p>
          <label htmlFor="">Email</label>
          <input type="email" id="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">Password</label>
            <input type="text" id="pwd" value={password} onChange={(e)=> setPassword(e.target.value)}/>
        </div>
        <button onClick={handleLogin}>Login</button>
      </form>
    </>
  );
};

export default Form;
