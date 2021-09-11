import React, { useState } from 'react';
import './header.css'
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';


function Header() {
    // const [showMenu, setshowMenu] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const setMenu = (()=>{
        setShowMenu(true)
    })
    return (
        <div className="header">
            <div className="header__logo__div">
                <img className="header__logo" src="images/logo.PNG" width="200px" height="130px" alt="logo" />
            </div>
            <div className="header__links">
                <ul className="navBar">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#product">Products</a></li>
                    <li><a href="#footer">Contact</a></li>
                </ul>
                <IconButton className="menu__button" onClick={setMenu}>
                    <MenuIcon className="menu"/>
                </IconButton>
            </div>
            {showMenu ?
                <div className="navBar__menu" >
                    <div className="closeButton__div">
                        <CloseIcon className="closeIcon" onClick={()=>setShowMenu(false)}/>
                    </div>
                    <li onClick={()=>setShowMenu(false)}><a href="#home">Home</a></li>
                    <li onClick={()=>setShowMenu(false)}><a href="#about">About</a></li>
                    <li onClick={()=>setShowMenu(false)}><a href="#product">Products</a></li>
                    <li onClick={()=>setShowMenu(false)}><a href="#footer">Contact</a></li>
                </div>
            :
                ""
            }

        </div>
    )
}
export default Header
