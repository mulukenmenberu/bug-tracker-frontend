import { NavBar } from '../data/NavBar';
import bug from '../images/bug-logo.png'
import React, { useState } from 'react';
const LeftPane = ()=>{
  const [isactive, setActive] = useState('Home')
    const changeActiveMenu = (title)=>{
      setActive(title)
    }
    return(
        <div className="left-container">
        <div className='logo'>
          <div className = "logo-text">
            <img src = {bug} alt="Bug Tracker"/>
          
          </div>
          <hr></hr>
        </div>
        <div className='menus'>
       
          {
            NavBar.map((item,index)=>{
              return (
                
                <div className={isactive===item.title? 'menu-item active' : 'menu-item'} key={index} onClick={()=>changeActiveMenu(item.title)}>
                  <span><item.icon/></span>
                  <span>{item.title}</span>
                  </div>
                   
              )
            })}
        </div>
    </div>
    )
}
export default LeftPane;