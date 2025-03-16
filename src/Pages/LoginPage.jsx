import React from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className='max-w-full  w-[700px] mx-auto mt-4 p-4 border-[1px] border-[#1f7d5362] rounded-sm'>
      <div className='w-full'>
        <h2 className='font-semibold text-right text-[20px] text-[#1F7D53] poppins'>
          Kheti Karo
        </h2>
        <p className='py-2 font-semibold text-right text-gray-700 poppins'>
          Login into app
        </p>
      </div>
      <form className='mt-4 flex flex-col gap-4'>
        <div className='flex flex-col gap-1'>
          <label htmlFor='email' className='poppins'>
            Email
          </label>
          <input
            type='email'
            id='email'
            className='p-2 outline-none rounded-sm border-[1px] border-gray-300'
            placeholder='Enter your email'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='password' className='poppins'>
            Password
          </label>
          <input
            type='password'
            id='password'
            className='p-2 outline-none rounded-sm border-[1px] border-gray-300'
            placeholder='Password'
          />
        </div>
        <button className='bg-blue-500 cursor-pointer py-3 text-white rounded-full poppins'>
          Log In
        </button>
      </form>

      <div className='my-5 flex items-center gap-2'>
        <div className='flex-1 h-[2px] bg-gray-200'></div>
        <p>OR</p>
        <div className='flex-1 h-[2px] bg-gray-200'></div>
      </div>

      <button className='w-full flex gap-2 item-center py-3 cursor-pointer justify-center  poppins border-[1px] border-gray-500 rounded-sm'>
        <img
          className='h-6'
          src='https://static.vecteezy.com/system/resources/thumbnails/046/861/647/small/google-logo-transparent-background-free-png.png'
          alt=''
        />
        <span>Login With Google</span>
      </button>
      
      <div className="mt-10 text-center">
       <p className= 'text-blue-500 font-semibold'><span className="text-gray-500 font-normal mr-2">Don't have an account?</span><Link>Sign Up</Link></p>
      </div>
    </div>
  );
}
