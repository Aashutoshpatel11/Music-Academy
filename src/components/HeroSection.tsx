import React from 'react'
import Link from 'next/link'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'

function HeroSection() {
  return (
    
    <div className=' bg-black max-w-screen h-screen pt-40  flex flex-col items-center justify-center overflow-hidden' >
        <Spotlight
            className="-top-40 left-0 md:-top-20 md:left-60"
            fill="white"
        />
        <div
            className='flex flex-col items-center justify-center p-8 gap-4' 
        >
            <h1
                className='text-2xl md:text-5xl lg:text-7xl font-bold '
            >Ignite Your Creator Journey</h1>
            <p 
                className=' text-sm md:text-md text-center w-full md:w-1/2' 
            >Dive into our comprehensive creator masterclasses and transform your content journey today. From mastering viral video trends and building an authentic personal brand to unlocking diverse monetization strategies, our expert mentors guide you every step of the way.</p>
        </div>
        <div className='mt-8' >
            <Link href='/courses' >
                <Button
                    borderRadius="1.75rem"
                    className=" bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                    Explore
                </Button>
            </Link>
        </div>
    </div>
  )
}

export default HeroSection