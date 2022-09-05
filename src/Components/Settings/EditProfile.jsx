import React from 'react'
import { IoMdPerson } from 'react-icons/io';

function EditProfile() {
  return (
    <div>
        <div className='bg-white rounded-lg drop-shadow-lg p-5 border border-[#f1f3f5]'>
            <h2 class="font-Inter font-semibold text-base pb-3 border-b border-primary">
                Edit Profile
            </h2>

            <h4 class="font-Inter font-semibold text-sm py-3">
                Foto Profile
            </h4>

            <div className='flex flex-col md:flex-row items-center gap-5 mb-4'>
                <div className='w-24 h-24 bg-gray-light rounded-xl flex items-center justify-center'>
                    <IoMdPerson className='fill-gray'/>
                </div>

                <div className='w-1/2'>
                    <p className='text-gray text-sm mb-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text It is a long established.</p>
                    <button className='bg-primary rounded-md p-2 text-white px-10'>Pilih Foto Profil</button>
                </div>
            </div>

            <form>
                <div className='mb-3'>
                    <p className='text-sm font-Inter text-black font-semibold mb-3'>Nama</p>
                    <div className='flex gap-4'>
                        <input placeholder='Ikram' type="text" name='email' className='p-2 border border-[#D9D9D9] rounded-md w-full'/>
                        <input placeholder='Sinapoy' type="text" name='email' className='p-2 border border-[#D9D9D9] rounded-md w-full'/>
                    </div>
                </div>
                <div className='mb-3'>
                    <p className='text-sm font-Inter text-black font-semibold mb-3'>Alamat Email</p>
                    <input placeholder='ikramsinapoy@gmail.com' type="text" name='email' className='p-2 border border-[#D9D9D9] rounded-md w-full'/>
                </div>
                <div className='mb-3'>
                    <p className='text-sm font-Inter text-black font-semibold mb-3'>Nama Pengguna (Username)</p>
                    <input placeholder='ikram' type="text" name='email' className='p-2 border border-[#D9D9D9] rounded-md w-full'/>
                </div>
                <div className='mb-3'>
                    <p className='text-sm font-Inter text-black font-semibold mb-3'>Nomor Telephon</p>
                    <input placeholder='Masukkan nomor telephon' type="text" name='email' className='p-2 border border-[#D9D9D9] rounded-md w-full'/>
                </div>
                <div className='mb-3'>
                    <p className='text-sm font-Inter text-black font-semibold mb-3'>Jenis Kelamin</p>
                    <input type="radio" id="html" name="fav_language" value="HTML" className='mr-2'/>
                    <label for="html">Laki-laki</label><br></br>
                    <input type="radio" id="css" name="fav_language" value="CSS" className='mr-2'/>
                    <label for="css">Perempuan</label><br></br>
                </div>
                <div className='mb-3'>
                    <p className='text-sm font-Inter text-black font-semibold mb-3'>Tanggal Lahir</p>
                    <input placeholder='Masukkan nomor telephon' type="date" name='email' className='p-2 border border-[#D9D9D9] rounded-md w-full'/>
                </div>

                <button className='bg-primary rounded-md p-2 text-white px-6 mt-7'>Simpan Perubahan</button>
            </form>
        </div>
    </div>
  )
}

export default EditProfile