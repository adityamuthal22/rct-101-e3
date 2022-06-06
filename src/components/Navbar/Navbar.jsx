import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const {isAuth,logout} =useContext(AuthContext);
  const navigate=useNavigate();
  const handleLoginClick=()=>{
    if(isAuth){
      logout();
    }
    else{
      navigate("/Login");
    }
  }
  return (
    <div data-cy="navbar"
    style={{
      padding:"10px",
      dispaly:"flex",
      gap:"20px",
      border:"1px solid blue",
      paddingLeft:"500px",
      width:"95%",
    }}
    >
      <Link to="/Home" data-cy="navbar-home-link"></Link>
      <span data-cy="navbar-cart-items-count" >Count:0</span>
      <button data-cy="navbar-login-logout-button" onClick={handleLoginClick}>
        {isAuth ? "Logout" : "Login"}
        </button>
    </div>
  );
};

export default Navbar;
