import React from 'react'

const Card = ({card}) => {
  return (
   <div className='relative group'>
      <div>
         <div className='absolute h-full w-full bg-blk/50 group-hover:bg-wht/70  transition-all ease-in-out duration-300'></div>
         <picture>
            {
               card.srcSetMedia.map((srcset, index) => (
                  <source key={index} srcSet={srcset.src} media={srcset.media} />
               ))
            }
            <img src={card.imgUrl} alt={card.imgUrl.split("/").slice(-1)} />
         </picture>
      </div>
      <p className='absolute top-[44%] lg:top-[78%] left-5 lg:left-[14%] z-10 w-[40%] lg:w-[60%] leading-6 text-[1.49rem] lg:text-3xl text-wht group-hover:text-blk group-hover:font-semibold font-josefinSans uppercase transition-all ease-in-out duration-150'>{card.title}</p>
   </div>
  )
}

export default Card