import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className='w-full z-500 flex items-center justify-between py-3 wrapper shadow-[0_0px_0_1px_rgba(0,0,0,0.25)]'>
      <h1 className='font-bold text-3xl text-[#1F7D53]'>Kheti Karo</h1>
      <div>
        <ul className='flex items-center justify-between gap-25 poppins'>
          <li className='hover:text-[#1F7D53] cursor-pointer'><Link to='/'>Home</Link></li>
          <li className='hover:text-[#1F7D53] cursor-pointer'><Link to='/about'>About</Link></li>
          <li className='hover:text-[#1F7D53] cursor-pointer'><Link>Instruction</Link></li>
          <li className='flex items-center gap-5 cursor-pointer'>
            <button className='py-[8px] px-5 bg-[#479773] rounded-sm text-white cursor-pointer'>
              Login
            </button>
            <button className='py-[8px] px-5 border-1 rounded-sm cursor-pointer border-[#479773]'>
              Sign Up
            </button>
          </li>
          <li>
            <div className='h-14 w-14 rounded-full border-[#479773] border-2 overflow-hidden'>
              <img
                className='object-cover  w-full h-full'
                src='https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg'
                alt=''
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
