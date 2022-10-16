import React from 'react'

const Button = (props) => {
  return (
    <button className={`${props.styles} py-2.5 px-[2.6rem] uppercase tracking-widest border-2 border-blk text-blk hover:bg-blk hover:text-wht transition-all ease-in-out duration-20`}>
      {props.children}
    </button>
  )
}

export default Button