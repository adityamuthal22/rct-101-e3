import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate=useNavigate();
const [loginCreds,setLoginCreds]=useState({});
const {login}=useContext(AuthContext);

  const handleChange=(e)=>{
    const {name ,value} =e.target;
    setLoginCreds({
      loginCreds,
      [name]:value,
    });
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    login();
    navigate("/Product")
  }
  return (
    <div>
      <form onSubmit={handleSubmit} 
      style={{
        display:"flex",
        flexDirection:"column",
        margin:"auto",
        width:"200px",
        gap:"20px",
      }}
      >
      <input data-cy="login-email" name="email" type="text" placeholder="email" onChange={handleChange} />
      <input data-cy="login-password"  type="password" placeholder="Enter Password" onChange={handleChange} />
      <button data-cy="login-submit" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
