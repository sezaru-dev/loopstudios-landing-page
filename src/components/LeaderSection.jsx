import React, {useState} from 'react'
import interactiveLg from '../assets/desktop/image-interactive.jpg'
import Button from './Button'
import Card from './Card'
import {cardlist} from './cardlist'

const LeaderSection = () => {


  return (
    <section>
      <div className="container lg:px-9 py-[6rem] lg:py-40 overflow-hidden">
         <div className='relative'>
            <div className=' flex lg:block item-center justify-center'>
               <img src={interactiveLg} alt="leader.png" className='w-full md:max-w-2xl' />
            </div>
            <div className=' max-w-lg mx-auto md:max-w-2xl lg:max-w-[40rem] text-center md:text-left p-6 md:p-14 lg:p-24 lg:absolute -bottom-[15%] -right-[9%] bg-wht'>
               <h2 className='font-josefinSans text-[2rem] leading-8 lg:text-5xl uppercase w-full'>The leader in interactive VR</h2>
               <p className='mt-4 text-dark-gray leading-6'>Founded in 2011, Loopstudios has been producing world-class virtual reality 
   projects for some of the best companies around the globe. Our award-winning 
   creations have transformed businesses through digital experiences that bind 
   to their brand.</p>
            </div>
         </div>

         <div className="flex items-center flex-col mt-16 lg:mt-32">
            <div className='flex items-center justify-between md:w-full mb-10'>
               <h2 className='text-[2rem] lg:text-5xl font-josefinSans uppercase'>Our creations</h2>
               <Button styles='hidden md:block'>
                  See all
               </Button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 md:mb-0'>
                  {
                     cardlist.map(card => (
                        <Card  key={card.id} card={card}/>
                     ))
                  }
            </div>
            <Button styles='md:hidden'>
                  See all
            </Button>

         </div>
      </div>
    </section>
  )
}

export default LeaderSection
