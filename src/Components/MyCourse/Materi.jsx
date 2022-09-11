import React from 'react'
import course from '../../Asset/class.jpg';
import ProgresBar from '../Kelas/ProgresBar';
import DetailMateri from './DetailMateri';

function Materi() {
  return (
    <div>
        <div className='w-full h-96 mb-8'>
            <img src={course} className='w-full h-full object-cover rounded-lg'/>
        </div>

        <div>
            
            <ul class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tab"
                role="tablist">
                <li class="nav-item" role="presentation">
                    <a href="#tabs-home" class="
                    nav-link
                    block
                    font-semibold
                    text-sm
                    text-gray
                    leading-tight
                    uppercase
                    border-x-0 border-t-0 border-b-2 border-transparent
                    px-10
                    py-3
                    my-2
                    hover:border-transparent hover:bg-gray-100
                    focus:border-transparent
                    active
                    " id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home"
                    aria-selected="true">Detail Materi</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a href="#tabs-profile" class="
                    nav-link
                    block
                    font-semibold
                    text-sm
                    text-gray
                    leading-tight
                    uppercase
                    border-x-0 border-t-0 border-b-2 border-transparent
                    px-10
                    py-3
                    my-2
                    hover:border-transparent hover:bg-gray-100
                    focus:border-transparent
                    " id="tabs-profile-tab" data-bs-toggle="pill" data-bs-target="#tabs-profile" role="tab"
                    aria-controls="tabs-profile" aria-selected="false">Transkrip Video</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a href="#tabs-messages" class="
                    nav-link
                    block
                    font-semibold
                    text-sm
                    text-gray
                    leading-tight
                    uppercase
                    border-x-0 border-t-0 border-b-2 border-transparent
                    px-10
                    py-3
                    my-2
                    hover:border-transparent hover:bg-gray-100
                    focus:border-transparent
                    " id="tabs-messages-tab" data-bs-toggle="pill" data-bs-target="#tabs-messages" role="tab"
                    aria-controls="tabs-messages" aria-selected="false">Dokumen</a>
                </li>
            </ul>
            <div class="tab-content" id="tabs-tabContent">
                <div class="tab-pane fade show active" id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab">
                    <div className='mt-1'>
                        <h3 className='font-Inter font-semibold text-2xl text-black mb-3' id='kelas'>Detail Materi</h3>
                        <p className='font-Inter text-black text-sm indent-8'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>

                        <ol className='font-Inter text-black text-sm list-decimal ml-6'>
                            <li>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                            </li>
                            <li>
                                If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                            </li>
                            <li>
                                All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                            </li>
                        </ol>
                    </div>
                </div>
                <div class="tab-pane fade static" id="tabs-profile" role="tabpanel" aria-labelledby="tabs-profile-tab">
                    <div className='mt-1'>
                        <h3 className='font-Inter font-semibold text-2xl text-black mb-3' id='kelas'>Transkrip Video</h3>
                        <p className='font-Inter text-black text-sm indent-8'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>

                        <ol className='font-Inter text-black text-sm list-decimal ml-6'>
                            <li>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                            </li>
                            <li>
                                If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                            </li>
                            <li>
                                All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
                            </li>
                        </ol>

                        <p className='font-Inter text-black text-sm indent-8'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                        </p>

                        <p className='font-Inter text-black text-sm indent-8'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                        </p>
                    </div>
                </div>
                <div class="tab-pane fade" id="tabs-messages" role="tabpanel" aria-labelledby="tabs-profile-tab">
                    <div className='mt-1'>
                        <h3 className='font-Inter font-semibold text-2xl text-black mb-3' id='kelas'>Dokumen</h3>
                        <p className='font-Inter text-black text-sm'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>

                        <ol class="list-decimal ml-4">
                            <li>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <h4 className='text-base font-semibold font-Inter'>Judul Dokumen.pdf</h4>
                                        <p className='font-Inter text-black text-sm'>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </p>
                                    </div>
                                    
                                    <button className='bg-white rounded-md p-2 text-primary px-6 mt-7 border-2 border-[#f1f3f5] drop-shadow'>Simpan Perubahan</button>
                                </div>
                            </li>

                            <li>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <h4 className='text-base font-semibold font-Inter'>Judul Dokumen.xls</h4>
                                        <p className='font-Inter text-black text-sm'>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </p>
                                    </div>
                                    
                                    <button className='bg-white rounded-md p-2 text-primary px-6 mt-7 border-2 border-[#f1f3f5] drop-shadow'>Simpan Perubahan</button>
                                </div>
                            </li>

                            <li>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <h4 className='text-base font-semibold font-Inter'>Judul Dokumen.pptx</h4>
                                        <p className='font-Inter text-black text-sm'>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        </p>
                                    </div>
                                    
                                    <button className='bg-white rounded-md p-2 text-primary px-6 mt-7 border-2 border-[#f1f3f5] drop-shadow'>Simpan Perubahan</button>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Materi