import React from 'react';
import { GoHomeFill } from "react-icons/go";
import { HiDocumentReport } from "react-icons/hi";
import { FaCartShopping, FaPeopleGroup, FaMessage } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <GoHomeFill />,
        cName: 'nav-text'
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <HiDocumentReport />,
        cName: 'nav-text'
    },
    {
        title: 'Products',
        path: '/products',
        icon: <FaCartShopping />,
        cName: 'nav-text'
    },
    {
        title: 'About Us',
        path: '/about-us',
        icon: <FaPeopleGroup />,
        cName: 'nav-text'
    },
    {
        title: 'Contact Us',
        path: '/contact-us',
        icon: <FaMessage />,
        cName: 'nav-text'
    },
    {
        title: 'Support',
        path: '/support',
        icon: <BiSupport />,
        cName: 'nav-text'
    }
]