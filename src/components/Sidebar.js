import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiBars3BottomLeft } from "react-icons/hi2";
import { IoIosCloseCircle } from "react-icons/io";
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons'
import './Sidebar.css';

function Sidebar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <div className="navbar">
                    <Link to="#" className='menu-bars'>
                        <HiBars3BottomLeft onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to='#' className='menu-bars'>
                                <IoIosCloseCircle />
                            </Link>
                        </li>
                        {
                            SidebarData.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Sidebar;