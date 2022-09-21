import React from 'react'

function ChangeLanguage() {
  return (
    <div>
        <div className='bg-white rounded-lg drop-shadow-lg p-5 border border-[#f1f3f5]'>
            <h2 class="font-Inter font-semibold text-base pb-3 border-b border-primary">
                Edit Profile
            </h2>

            <p className='text-gray text-sm mt-3 mb-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text It is a long established.</p>

            <form>
                <div className='mb-3'>
                    <p className='text-sm font-Inter text-black font-semibold mb-3'>Bahasa yang dipilih</p>
                    <input type="radio" id="html" name="fav_language" value="HTML" className='mr-2'/>
                    <label for="html" className='text-sm text-gray cursor-pointer'>Bahasa Indonesia</label><br></br>
                    <input type="radio" id="css" name="fav_language" value="CSS" className='mr-2'/>
                    <label for="css" className='text-sm text-gray cursor-pointer'>Bahasa Inggris</label><br></br>
                </div>

                <button className='bg-primary rounded-md p-2 text-white px-6 mt-7'>Simpan Perubahan</button>
            </form>
        </div>
    </div>
  )
}

export default ChangeLanguage