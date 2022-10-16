import React, {useState} from 'react'
import {LoopStudioLogo} from './images/LoopStudioLogo'
import {Navlinks} from './NavLinks'
import {Menu} from './images/Menu'
import {Close} from './images/Close'
import LinkItem from './LinkItem'

const Header = () => {
   const [isOpen, setIsOpen] = useState(false)
   const [isScrolledDown, setIsScrolledDown] = useState(false)

   const body = document.querySelector('body')

   {
      isOpen ? body.classList.add('overflow-hidden') : body.classList.remove('overflow-hidden')
   }

   /* reset the isOpen state and remove the className overflow-hidden from body when resized lg-sm vice-versa */
   window.addEventListener('resize', () => {
      if (screen.width >= 768) {
         setIsOpen(false)
      }
   })

   window.onscroll = function () {
      let top = window.scrollY;
      if (top >= 50) {
         setIsScrolledDown(true)
      } else {
         setIsScrolledDown(false)
      }
   };

  return (
   <header className={`w-full fixed top-0 left-0 z-50 ${isScrolledDown ? 'bg-blk' : 'bg-blk/0'} transition-all duration-700 ease-in-out`}>
      <nav className={`container lg:px-9 md:flex items-center justify-between py-10 ${isScrolledDown ? 'lg:mt-0' : 'lg:mt-6'} transition-all ease-in-out duration-700 ${isOpen && 'bg-blk'} md:bg-transparent`}>
         
         <div className='max-w-min'>
            <a href="/"><LoopStudioLogo/></a>
         </div>

         <a role="button" className='md:hidden absolute right-6 top-11 cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
            {isOpen? <Close/> : <Menu/>}
         </a>

         <ul className={`h-screen md:h-auto md:flex items-center md:pt-0 pt-32 absolute md:static bg-blk md:bg-transparent text-wht md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-6 md:gap-9 transition-all md:transition-none duration-500 ease-in ${isOpen? 'top-20 opacity-100': 'top-[-600px] md:opacity-100 opacity-0'}`}>
         {
            Navlinks.map(link => (
               <LinkItem key={link.title} link={link}/>
            ))
         }
      </ul>
      </nav>
   </header>
  )
}

export default Header