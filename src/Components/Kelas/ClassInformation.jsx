import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';

function ClassInformation() {
  return (
    <div>
        <div className='mb-6'>
            <h3 className='font-Inter font-semibold text-2xl text-black mb-3'>Detail Kelas</h3>
            <p className='font-Inter text-black text-sm'>
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

        <div className='mb-6'>
            <h3 className='font-Inter font-semibold text-2xl text-black mb-3'>Tujuan Pembelajaran Kelas</h3>
            <p className='font-Inter text-black text-sm'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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

        <div className=''>
            <h3 className='font-Inter font-semibold text-2xl text-black mb-3'>Silabus</h3>
            <p className='font-Inter text-black text-sm mb-3'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

            <div className='w-full'>
            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item border-l-0 border-r-0 bg-white p-3 border border-[#e9ecef] rounded-lg drop-shadow mb-2">
                    <h2 class="accordion-header mb-0 font-Inter font-semibold text-base" id="flush-headingOne">
                    <button class="accordion-button
                    collapsed
                    relative
                    flex
                    items-center
                    w-full
                    py-2
                    
                    text-black text-left
                    bg-white
                    border-0
                    rounded-none
                    transition
                    focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                        aria-expanded="false" aria-controls="flush-collapseOne">
                        Bla Bla Bla
                    </button>
                    </h2>
                    
                    <div className="flex gap-5">
                        <div className="flex items-center gap-2">
                            <AiOutlineClockCircle className="fill-primary"/>
                            <p className="text-xs">52 Jam</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <BiBook className="fill-primary"/>
                            <p className="text-xs">64 Lessons</p>
                        </div>
                    </div>

                    <div id="flush-collapseOne" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body py-2 ">
                            <div className='flex items-center gap-2'>
                                <input type="checkbox" id='design_grafis' name="design_grafis" className='bg-pink border-primary text-green focus:ring-orange' value="design_grafis"></input>
                                <label for="design_grafis" className='font-Inter text-sm font-medium'>&lt; 5 Jam</label><br></br>
                            </div>

                            <div className='flex items-center gap-2'>
                                <input type="checkbox" id='design_grafis' name="design_grafis" className='bg-pink border-primary text-green focus:ring-orange' value="design_grafis"></input>
                                <label for="design_grafis" className='font-Inter text-sm font-medium'>5 - 10 Jam</label><br></br>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion-item border-l-0 border-r-0 bg-white p-3 border border-[#e9ecef] rounded-lg drop-shadow mb-2">
                    <h2 class="accordion-header mb-0 font-Inter font-semibold text-base" id="flush-headingTwo">
                    <button class="accordion-button
                    collapsed
                    relative
                    flex
                    items-center
                    w-full
                    py-2
                    
                    text-black text-left
                    bg-white
                    border-0
                    rounded-none
                    transition
                    focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                        aria-expanded="false" aria-controls="flush-collapseTwo">
                        Bla Bla Bla
                    </button>
                    </h2>

                    <div className="flex gap-5">
                        <div className="flex items-center gap-2">
                            <AiOutlineClockCircle className="fill-primary"/>
                            <p className="text-xs">52 Jam</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <BiBook className="fill-primary"/>
                            <p className="text-xs">64 Lessons</p>
                        </div>
                    </div>

                    <div id="flush-collapseTwo" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body py-2 ">
                            <div className='flex items-center gap-2'>
                                <input type="checkbox" id='design_grafis' name="design_grafis" className='bg-pink border-primary text-green focus:ring-orange' value="design_grafis"></input>
                                <label for="design_grafis" className='font-Inter text-sm font-medium'>&lt; 5 Jam</label><br></br>
                            </div>

                            <div className='flex items-center gap-2'>
                                <input type="checkbox" id='design_grafis' name="design_grafis" className='bg-pink border-primary text-green focus:ring-orange' value="design_grafis"></input>
                                <label for="design_grafis" className='font-Inter text-sm font-medium'>5 - 10 Jam</label><br></br>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion-item border-l-0 border-r-0 bg-white p-3 border border-[#e9ecef] rounded-lg drop-shadow mb-2">
                    <h2 class="accordion-header mb-0 font-Inter font-semibold text-base" id="flush-headingThree">
                    <button class="accordion-button
                    collapsed
                    relative
                    flex
                    items-center
                    w-full
                    py-2
                    
                    text-black text-left
                    bg-white
                    border-0
                    rounded-none
                    transition
                    focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                        aria-expanded="false" aria-controls="flush-collapseThree">
                        Bla Bla Bla
                    </button>
                    </h2>

                    <div className="flex gap-5">
                        <div className="flex items-center gap-2">
                            <AiOutlineClockCircle className="fill-primary"/>
                            <p className="text-xs">52 Jam</p>
                        </div>

                        <div className="flex items-center gap-2">
                            <BiBook className="fill-primary"/>
                            <p className="text-xs">64 Lessons</p>
                        </div>
                    </div>
                    
                    <div id="flush-collapseThree" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body py-2 ">
                            <div className='flex items-center gap-2'>
                                <input type="checkbox" id='design_grafis' name="design_grafis" className='bg-pink border-primary text-green focus:ring-orange' value="design_grafis"></input>
                                <label for="design_grafis" className='font-Inter text-sm font-medium'>&lt; 10 Lessons</label><br></br>
                            </div>

                            <div className='flex items-center gap-2'>
                                <input type="checkbox" id='design_grafis' name="design_grafis" className='bg-pink border-primary text-green focus:ring-orange' value="design_grafis"></input>
                                <label for="design_grafis" className='font-Inter text-sm font-medium'>10 - 25 Lessons</label><br></br>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </div>
    </div>
  )
}

export default ClassInformation