import React from 'react'
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineVisibility } from 'react-icons/md';
import { MdOutlineVisibilityOff } from 'react-icons/md';
import { Link } from 'react-router-dom';

function FormLogin() {
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    
    return (
        <div className='2xl:w-1/3 2xl:mx-auto'>
            <div className='mb-4'>
                <h2 class="font-Inter font-semibold text-lg mb-1.5 text-black">
                    Sign in to your account
                </h2>
                <p className="text-sm text-gray">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            
            <div className='flex gap-0.5 sm:gap-10 2xl:justify-between'>
                <a className='p-2 bg-white border border-[#f1f3f5] rounded-md drop-shadow hover:cursor-pointer hover:drop-shadow-md text-black flex items-center gap-1'>Login dengan <FcGoogle/></a>
                <a className='p-2 bg-white border border-[#f1f3f5] rounded-md drop-shadow hover:cursor-pointer hover:drop-shadow-md text-black'>Login dengan <span className='text-[#1877F2]'>Facebook</span></a>
            </div>

            <div className='flex items-center my-7'>
                <div className='h-px bg-gray flex-1'/>
                <p className='text-gray text-base font-Inter mx-6'>or</p>
                <div className='h-px bg-gray flex-1'/>  
            </div>

            <div>
                <form>
                    <div className='mb-4'>
                        <p className='text-sm font-Inter text-black font-semibold mb-3'>Email</p>
                        <input placeholder='Masukkan Email' type="text" name='email' className='p-2 border border-[#D9D9D9] rounded-md w-full'/>
                    </div>

                    <div className='mb-4'>
                        <div className='mb-3  flex justify-between'>
                            <p className='text-sm font-Inter text-black font-semibold'>Password</p>
                            <Link to='/forget-password'>
                                <p className='text-sm font-Inter text-gray'>Lupa Password?</p>
                            </Link>
                            
                        </div>
                        
                        <div className='flex'>
                            <input placeholder='Masukkan Password' type={passwordShown ? "text" : "password"} name='password' className='p-2 border-y border-l border-[#D9D9D9] rounded-l-md w-full'/>
                            <button onClick={togglePassword} className='bg-white p-2 border-r border-y border-[#D9D9D9] rounded-r-md'>
                                {passwordShown === false ?
                                    <MdOutlineVisibility className='fill-gray'/>
                                    :
                                    <MdOutlineVisibilityOff className='fill-gray'/>
                                }
                                
                            </button>
                        </div>
                        
                    </div>

                    <div className='flex gap-2 mb-4'>
                        <input type="checkbox" className='' id='staylogin'/>
                        <label className='text-sm font-Inter text-gray' for='staylogin'>Tetap Login</label>
                    </div>

                    <button className='p-2 w-full text-white bg-primary rounded-md'>Masuk</button>
                </form>
                
            </div>
        </div>
    )
}

export default FormLogin