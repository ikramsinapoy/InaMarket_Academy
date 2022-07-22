import React from 'react'
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineVisibility } from 'react-icons/md';
import { MdOutlineVisibilityOff } from 'react-icons/md';

function FormRegis() {
  const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
  return (
    <div className='md:w-1/3 md:mx-auto'>
        <div className='mb-3'>
            <h2 class="font-Inter font-semibold text-lg mb-1.5 text-black">
                Silahkan Daftar ke Ina Market Academy
            </h2>
            <p className="text-sm text-gray">Untuk dapat menggunakan Ina Market Academy anda harus mendaftar terlebih dahulu.</p>
        </div>

        <div>
            <form>
                <div className='mb-4'>
                    <p className='text-sm font-Inter text-black font-semibold mb-3'>Nama</p>
                    <div className='flex gap-2 items-center'>
                        <input placeholder='Nama Depan' type="text" name='namaDepan' className='p-2 border border-[#D9D9D9] rounded-md w-full'/>
                        <input placeholder='Nama Belakang' type="text" name='namaBelakang' className='p-2 border border-[#D9D9D9] rounded-md w-full'/>
                    </div>
                </div>

                <div className='mb-4'>
                    <p className='text-sm font-Inter text-black font-semibold mb-3'>Email Address</p>
                    <input placeholder='Masukkan Email' type="text" name='email' className='p-2 border border-[#D9D9D9] rounded-md w-full'/>
                </div>

                <div className='mb-4'>
                    <p className='text-sm font-Inter text-black font-semibold mb-3'>Nama Pengguna (Username)</p>
                    <input placeholder='Masukkan Username' type="text" name='email' className='p-2 border border-[#D9D9D9] rounded-md w-full'/>
                </div>

                <div className='mb-4'>
                    <p className='text-sm font-Inter text-black font-semibold mb-3'>Password</p>
                    
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

                <div className='flex gap-2 mb-4 items-center'>
                    <input type="checkbox" className='' id='staylogin'/>
                    <label className='text-sm font-Inter text-gray' for='staylogin'>Dengan membuat akun, menyatakan anda telah setuju dengan <a className='text-primary hover:cursor-pointer'>Syarat & Ketentuan</a> kami.</label>
                </div>

                <button className='p-2 w-full text-white bg-primary rounded-md'>Masuk</button>
            </form>
            
        </div>
    </div>
  )
}

export default FormRegis