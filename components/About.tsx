"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import image from "../public/imagr.png"
const About = () => {
        return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2 overflow-hidden'>
          <p className='uppercase text-3xl tracking-widest text-[#5651e5] animate-left-to-right-slow font-bold'>
            About
          </p>
          <h2 className='py-4 animate-left-to-right-slow text-2xl'>Who I Am</h2>
          <p className='py-2 text-slate-300 animate-left-to-right-slow italic'>
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          <p className='py-2 text-slate-300 animate-left-to-right-slow italic'>
            I started web developement in 2013 managing multiple e-commerce
            websites on CMS platforms such as WordPress, BigCommerce, and
            Shopify. I have experience working directly with clients and taking
            mock wireframes all the way to deployed applications. In my spare
            time I run Code Commerce, a Youtube channel where I teach web
            developement and various front-end technologies.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer animate-left-to-right-slow'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div>
      <Image
        src={image}
        alt="My Photo"
        width={500}
        height={500}
        className="object-cover object-left p-16"
      />
    </div>
        </div>
        </div>
  )
}
export default About