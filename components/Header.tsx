'use client'

// import React from 'react'

// function Header() {
//   return (
//     <div className='bg-slate-500 text-4xl text-red-500'>hello </div>
//   )
// }

// export default Header
// import Link from 'next/link';

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 py-4">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center">
//           <Link href="/">
//             <p className="text-xl font-semibold text-white  font-myfont">Sufiyan Protfolio</p>
//           </Link>
//           <ul className="flex space-x-4">
//             <li>
//               <Link href="/">
//                 <p className="text-white hover:text-gray-300">Home</p>
//               </Link>
//             </li>
//             <li>
//               <Link href="/about">
//                 <p className="text-white hover:text-gray-300">About</p>
//               </Link>
//             </li>
//             <li>
//               <Link href="/contact">
//                 <p className="text-white hover:text-gray-300">Contact</p>
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// import { useState } from 'react';
// import Link from 'next/link';




// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-gray-800">
//       <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
//         <div className="relative flex items-center justify-between h-16">
//           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             <button
//               type="button"
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//               aria-controls="mobile-menu"
//               aria-expanded="false"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//               <svg
//                 className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           </div>
//           <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
//             <div className="flex-shrink-0">
//               <Link href="/">
//                 <p className="text-white font-bold text-xl">My Website</p>
//               </Link>
//             </div>
//             <div className="hidden sm:block sm:ml-6 px-60">
//               <div className="flex space-x-4">
//                 <Link href="/about">
//                   <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
//                     About
//                   </p>
//                 </Link>
//                 <Link href="/blog">
//                   <p className="text-gray-300import Link from 'next/link';
// import React, { useState, useEffect } from 'react';
// import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

// const Navbar = () => {
//   const [nav, setNav] = useState(false);
//   const [color, setColor] = useState('transparent');
//   const [textColor, setTextColor] = useState('white');

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   useEffect(() => {
//     const changeColor = () => {
//       if (window.scrollY >= 90) {
//         setColor('#ffffff');
//         setTextColor('#000000');
//       } else {
//         setColor('transparent');
//         setTextColor('#ffffff');
//       }
//     };
//     window.addEventListener('scroll', changeColor);
//   }, []);

//   return (
//     <div
//       style={{ backgroundColor: `${color}` }}
//       className='fixed left-0 top-0 w-full z-10 ease-in duration-300'
//     >
//       <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
//         <Link href='/'>
//           <h1 style={{ color: `${textColor}` }} className='font-bold text-4xl'>
//             Captur
//           </h1>
//         </Link>
//         <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
//           <li className='p-4'>
//             <Link href='/'>Home</Link>
//           </li>
//           <li className='p-4'>
//             <Link href='/#gallery'>Gallery</Link>
//           </li>
//           <li className='p-4'>
//             <Link href='/work'>Work</Link>
//           </li>
//           <li className='p-4'>
//             <Link href='/contact'>Contact</Link>
//           </li>
//         </ul>

//         {/* Mobile Button */}
//         <div onClick={handleNav} className='block sm:hidden z-10'>
//           {nav ? (
//             <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
//           ) : (
//             <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
//           )}
//         </div>
//         {/* Mobile Menu */}
//         <div
//           className={
//             nav
//               ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
//               : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
//           }
//         >
//           <ul>
//             <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
//               <Link href='/'>Home</Link>
//             </li>
//             <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
//               <Link href='/#gallery'>Gallery</Link>
//             </li>
//             <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
//               <Link href='/work'>Work</Link>
//             </li>
//             <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
//               <Link href='/contact'>Contact</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

//                     Blog
//                   </p>
//                 </Link>
//                 <Link href="/contact">
//                   <p className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
//                     Contact
//                   </p>
//                 </Link> 
  
                

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//  </nav>
//   )
// }


// export default Navbar


import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#ffffff');
        setTextColor('#000000');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className='fixed left-0 top-0 w-full z-10 ease-in duration-300'
    >
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
        <Link href='/'>
          <h1 style={{ color: `${textColor}` }} className='font-bold text-4xl'>
            PROTFOLIO
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
          <li className='p-4  hover:text-gray-500'>
            <Link href='/'>about</Link>
          </li>
          <li className='p-4  hover:text-gray-500'>
            <Link href='/#gallery'>skills</Link>
          </li>
          <li className='p-4  hover:text-gray-500'>
            <Link href='/work'>project</Link>
          </li>
          <li className='p-4  hover:text-gray-500'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/'>About</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/#gallery'>skills</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/work'>Work</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

