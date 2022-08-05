import React from "react";
import "./Header.css"
import Logo from "../assets/logo.png"


function Header(){
  return(

    <div className="Header">
       
        
        <div className="header_center">
        {/* <img className="header_logo" alt="" src={Logo}/> */}
            <div className="cbutton">Home</div>
            <div className="cbutton">Listing </div>
            <div className="cbutton">Offers</div>
            <div className="cbutton">My Bookings</div>
            
            <div className="cbutton">Profile</div>
            <button className="header_button">Sing Up</button>
        </div>
        <div className="header_right">
            <div className="headerContainer">
                
            </div>

        </div>
    </div>
  )
}
export default Header;