import React from 'react'

function ChangePass() {
  return (
    <div>
        <div className='bg-white rounded-lg drop-shadow-lg p-5 border border-[#f1f3f5]'>
            <h2 class="font-Inter font-semibold text-base pb-3 border-b border-primary">
                Edit Profile
            </h2>

            <p className='text-gray text-sm mt-3 mb-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text It is a long established.</p>

            <form>
                <div className='mb-3'>
                    <p className='text-sm font-Inter text-black font-semibold mb-3'>Kata Sandi Lama</p>
                    <input placeholder='Masukkan kata sandi lama' type="password" name='email' className='p-2 border border-[#D9D9D9] rounded-md w-full'/>
                </div>
                <div className='mb-3'>
                    <p className='text-sm font-Inter text-black font-semibold mb-3'>Kata Sandi Baru</p>
                    <input placeholder='Masukkan kata sandi baru' type="password" name='email' className='p-2 border border-[#D9D9D9] rounded-md w-full'/>
                </div>
                <div className='mb-3'>
                    <p className='text-sm font-Inter text-black font-semibold mb-3'>Ulangi Kata Sandi Baru</p>
                    <input placeholder='Ulangi kata sandi baru' type="password" name='email' className='p-2 border border-[#D9D9D9] rounded-md w-full'/>
                </div>

                <button className='bg-primary rounded-md p-2 text-white px-6 mt-7'>Simpan Perubahan</button>
            </form>
        </div>
    </div>
  )
}

export default ChangePass