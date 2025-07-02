import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [login, setLogin] = useState(true)

  const handleLogBtn = () => {
    console.log("buttin clicked");

    setLogin(login => !login)
    // setLogin((login) => {
    //   console.log(login);
    //   console.log(!login);
      
    //   return !login
      
    // })
  }

  return (
    <div className="header">
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        
        <li>
          <button className="log-btn" onClick={handleLogBtn}>
            {login === true ? "Logout ❌" : "Login ✅"}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
