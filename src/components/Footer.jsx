import React from 'react'
import {Navlinks} from './NavLinks'
import logo from '../assets/logo.svg'
import { GrFacebook } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className='bg-blk text-wht'>
      <div className="container lg:px-9 py-14 md:py-11 flex flex-col md:flex-row items-center justify-between gap-9">
         <div className="col-1 flex flex-col items-center md:items-start justify-center gap-8 md:gap-[1.2rem]">
            <img src={logo} alt="loopstudios.svg" className='w-36' />
            <ul className={`flex flex-col md:flex-row item-center justify-center text-wht gap-[.78rem]`}>
               {
                  Navlinks.map(link => (
                     <li key={link.title} className='text-center md:text-left'>
                        <a href={link.url} className={link.cName}>{link.title}</a>
                     </li>
                  ))
               }
            </ul>
         </div>

         <div className="col-2 flex items-center justify-center md:items-end flex-col gap-2 md:gap-[1.2rem]">
               <ul className='flex gap-4'>
                  <li><a href="#"><GrFacebook size={24}/></a></li>
                  <li><a href="#"><FaTwitter size={24}/></a></li>
                  <li><a href="#"><FaPinterest size={24}/></a></li>
                  <li><a href="#"><GrInstagram size={24}/></a></li>
               </ul>
            <p className='font-normal text-darker-gray'>© 2021 Loopstudios. All rights reserved.</p>
         </div>
      </div>
    </footer>
  )
}

export default Footer