import React from 'react'

const LinkItem = ({link}) => {
  return (
   <li key={link.title} className='text-2xl font-josefinSans lg:font-alata md:text-base md:my-0 my-3 uppercase md:capitalize max-w-max'>
      <a href={link.url} className={link.cName}>{link.title}</a>
   </li>
  )
}

export default LinkItem