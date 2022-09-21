import React from 'react'

function Silabus() {
  return (
    <div className='mb-8'>
        <div className='p-3 bg-white border border-[#e9ecef] rounded-lg drop-shadow-lg w-60'>
            <h2 class="font-Inter font-semibold text-base py-3 border-b border-primary">
                Silabus
            </h2>
            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white">
                    <h2 class="accordion-header mb-0 font-Inter font-semibold text-sm" id="flush-headingOne">
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
                    <div id="flush-collapseOne" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body py-2 ">
                            <div className='flex items-center gap-2'>
                                <input type="checkbox" id='design_grafis' name="design_grafis" className='bg-pink border-primary text-green focus:ring-orange' value="design_grafis"></input>
                                <label for="design_grafis" className='font-Inter text-sm font-medium'>Design Grafis</label><br></br>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white">
                    <h2 class="accordion-header mb-0 font-Inter font-semibold text-sm" id="flush-headingTwo">
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
                    <div id="flush-collapseTwo" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body py-2 ">
                            <div className='flex items-center gap-2'>
                                <input type="checkbox" id='design_grafis' name="design_grafis" className='bg-pink border-primary text-green focus:ring-orange' value="design_grafis"></input>
                                <label for="design_grafis" className='font-Inter text-sm font-medium'>&lt; 5 Jam</label><br></br>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white">
                    <h2 class="accordion-header mb-0 font-Inter font-semibold text-sm" id="flush-headingThree">
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
                    <div id="flush-collapseThree" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body py-2 ">
                            <div className='flex items-center gap-2'>
                                <input type="checkbox" id='design_grafis' name="design_grafis" className='bg-pink border-primary text-green focus:ring-orange' value="design_grafis"></input>
                                <label for="design_grafis" className='font-Inter text-sm font-medium'>&lt; 10 Lessons</label><br></br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Silabus