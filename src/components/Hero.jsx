import React from 'react'

const Hero = () => {
  return (
    <section className="relative h-[650px] bg-[url('assets/mobile/image-hero-sm.jpg')] md:bg-[url('assets/desktop/image-hero-lg.jpg')] bg-no-repeat bg-cover bg-center overflow-hidden">

      <div className="container lg:px-9 font-josefinSans">
         <div className='p-5 lg:py-[2.3rem] lg:px-[38px] border-[3px] border-wht w-full md:w-8/12 lg:w-7/12 mt-56'>
            <h1 className='text-[2.5rem] leading-10 md:text-6xl md:leading-[4rem] lg:text-7xl uppercase lg:leading-[4.4rem] text-wht'>Immersive experiences that deliver</h1>
         </div>
      </div>
    </section>
  )
}

export default Hero