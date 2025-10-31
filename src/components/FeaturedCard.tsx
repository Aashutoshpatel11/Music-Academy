'use client'
import { div } from 'framer-motion/client'
import React from 'react'
import Link from 'next/link'
import coursesData from '@/data/music_courses.json'
import { BackgroundGradient } from './ui/background-gradient'

interface Course{
    id: Number,
    title: String,
    slug: String,
    description: String,
    price: Number,
    instructor: String,
    isFeatured: Boolean,
}

function FeaturedCard() {

    let featuredCourses = coursesData.courses.filter( (course:Course) => course.isFeatured )

  return (
    <div className='flex flex-col justify-center items-center gap-5 p-20 bg-slate-950' >
        <div className='flex flex-col justify-center items-center gap-3' >
            <h2 className='text-cyan-500/50 font-medium text-sm md:text-md' >FEATURED COURSES</h2>
            <p className='font-bold text-4xl md:text-5xl' >Learn With the Best</p>
        </div>
        <div className="mt-10 mx-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {featuredCourses.map((course:Course)=> (
                    <div key={course.id} className="flex justify-center gap-5">
                        <BackgroundGradient
                        className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center grow">
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 grow">{course.description}</p>
                                <Link 
                                className='mt-8 bg-white/50 py-2 px-4 rounded-md hover:bg-white/90 text-black/90'
                                href={`/courses/${course.slug}`}>
                                Learn More
                                </Link>
                            </div>
                        </BackgroundGradient>
                    </div>
                ))}
            </div>
        </div>
        <div className='mt-20' >
            <Link href={'/courses'} >
                <button 
                className='cursor-pointer px-4 py-2 rounded-md shadow-xs hover:shadow-cyan-600 border border-gray-600 ' 
                type="button"
                >
                    View All Courses
                </button>
            </Link>
        </div>
    </div>
  )
}

export default FeaturedCard