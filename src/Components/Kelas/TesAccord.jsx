import React from 'react'

function TesAccord() {
  return (
    <div className='p-4 bg-white rounded-lg drop-shadow-lg'>
        <h2 class="accordion-header mb-0 font-Inter font-semibold text-base px-5 py-3 border-b border-primary" id="flush-headingOne">
            Filter
        </h2>
        <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white">
                <h2 class="accordion-header mb-0 font-Inter font-semibold text-sm" id="flush-headingOne">
                <button class="accordion-button
                relative
                flex
                items-center
                w-full
                py-2
                px-5
                text-left
                bg-white
                border-0
                rounded-none
                transition
                focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                    aria-expanded="false" aria-controls="flush-collapseOne">
                    Kategori
                </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse border-0 collapse show"
                aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body py-2 px-5">
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='design_grafis' name="design_grafis" className='bg-pink border-primary text-green focus:ring-orange' value="design_grafis"></input>
                            <label for="design_grafis" className='font-Inter text-sm font-medium'>Design Grafis</label><br></br>
                        </div>

                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='branding' name="branding" value="branding"></input>
                            <label for="branding" className='font-Inter text-sm font-medium'>Branding</label><br></br>
                        </div>

                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='marketing' name="marketing" value="marketing"></input>
                            <label for="marketing" className='font-Inter text-sm font-medium'>Marketing</label><br></br>
                        </div>

                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='java' name="java" value="java"></input>
                            <label for="java" className='font-Inter text-sm font-medium'>Java</label><br></br>
                        </div>

                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='frontend' name="frontend" value="frontend"></input>
                            <label for="frontend" className='font-Inter text-sm font-medium'>Front End Developers</label><br></br>
                        </div>

                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='backend' name="backend" value="backend"></input>
                            <label for="backend" className='font-Inter text-sm font-medium'>Back End Developers</label><br></br>
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
                px-5
                text-black text-left
                bg-white
                border-0
                rounded-none
                transition
                focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                    aria-expanded="false" aria-controls="flush-collapseTwo">
                    Waktu Belajar
                </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body py-2 px-5">
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='design_grafis' name="design_grafis" className='bg-pink border-primary text-green focus:ring-orange' value="design_grafis"></input>
                            <label for="design_grafis" className='font-Inter text-sm font-medium'>&lt; 5 Jam</label><br></br>
                        </div>

                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='design_grafis' name="design_grafis" className='bg-pink border-primary text-green focus:ring-orange' value="design_grafis"></input>
                            <label for="design_grafis" className='font-Inter text-sm font-medium'>5 - 10 Jam</label><br></br>
                        </div>

                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='design_grafis' name="design_grafis" className='bg-pink border-primary text-green focus:ring-orange' value="design_grafis"></input>
                            <label for="design_grafis" className='font-Inter text-sm font-medium'>10 - 20 Jam</label><br></br>
                        </div>

                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='design_grafis' name="design_grafis" className='bg-pink border-primary text-green focus:ring-orange' value="design_grafis"></input>
                            <label for="design_grafis" className='font-Inter text-sm font-medium'>20 - 50 Jam</label><br></br>
                        </div>

                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='design_grafis' name="design_grafis" className='bg-pink border-primary text-green focus:ring-orange' value="design_grafis"></input>
                            <label for="design_grafis" className='font-Inter text-sm font-medium'>50 - 100 Jam</label><br></br>
                        </div>

                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='design_grafis' name="design_grafis" className='bg-pink border-primary text-green focus:ring-orange' value="design_grafis"></input>
                            <label for="design_grafis" className='font-Inter text-sm font-medium'>&gt; 100 Jam</label><br></br>
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
                px-5
                text-black text-left
                bg-white
                border-0
                rounded-none
                transition
                focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                    aria-expanded="false" aria-controls="flush-collapseThree">
                    Jumlah Lessons
                </button>
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body py-2 px-5">
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='design_grafis' name="design_grafis" className='bg-pink border-primary text-green focus:ring-orange' value="design_grafis"></input>
                            <label for="design_grafis" className='font-Inter text-sm font-medium'>&lt; 10 Lessons</label><br></br>
                        </div>

                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='design_grafis' name="design_grafis" className='bg-pink border-primary text-green focus:ring-orange' value="design_grafis"></input>
                            <label for="design_grafis" className='font-Inter text-sm font-medium'>10 - 25 Lessons</label><br></br>
                        </div>

                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='design_grafis' name="design_grafis" className='bg-pink border-primary text-green focus:ring-orange' value="design_grafis"></input>
                            <label for="design_grafis" className='font-Inter text-sm font-medium'>25 - 50 Lessons</label><br></br>
                        </div>

                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='design_grafis' name="design_grafis" className='bg-pink border-primary text-green focus:ring-orange' value="design_grafis"></input>
                            <label for="design_grafis" className='font-Inter text-sm font-medium'>50 - 100 Lessons</label><br></br>
                        </div>

                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='design_grafis' name="design_grafis" className='bg-pink border-primary text-green focus:ring-orange' value="design_grafis"></input>
                            <label for="design_grafis" className='font-Inter text-sm font-medium'>&gt; 100 Lessons</label><br></br>
                        </div>
                    </div>
                </div>
            </div>

            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white">
                <h2 class="accordion-header mb-0 font-Inter font-semibold text-sm" id="flush-headingFour">
                <button class="accordion-button
                collapsed
                relative
                flex
                items-center
                w-full
                py-2
                px-5
                text-black text-left
                bg-white
                border-0
                rounded-none
                transition
                focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour"
                    aria-expanded="false" aria-controls="flush-collapseFour">
                    Level Course
                </button>
                </h2>
                <div id="flush-collapseFour" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body py-2 px-5">
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='design_grafis' name="design_grafis" className='bg-pink border-primary text-green focus:ring-orange' value="design_grafis"></input>
                            <label for="design_grafis" className='font-Inter text-sm font-medium'>Level Dasar</label><br></br>
                        </div>

                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='design_grafis' name="design_grafis" className='bg-pink border-primary text-green focus:ring-orange' value="design_grafis"></input>
                            <label for="design_grafis" className='font-Inter text-sm font-medium'>Level Medium</label><br></br>
                        </div>

                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='design_grafis' name="design_grafis" className='bg-pink border-primary text-green focus:ring-orange' value="design_grafis"></input>
                            <label for="design_grafis" className='font-Inter text-sm font-medium'>Level High</label><br></br>
                        </div>

                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='design_grafis' name="design_grafis" className='bg-pink border-primary text-green focus:ring-orange' value="design_grafis"></input>
                            <label for="design_grafis" className='font-Inter text-sm font-medium'>Level Proffesional</label><br></br>
                        </div>
                    </div>
                </div>
            </div>

            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white">
                <h2 class="accordion-header mb-0 font-Inter font-semibold text-sm" id="flush-headingFive">
                <button class="accordion-button
                collapsed
                relative
                flex
                items-center
                w-full
                py-2
                px-5
                text-black text-left
                bg-white
                border-0
                rounded-none
                transition
                focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive"
                    aria-expanded="false" aria-controls="flush-collapseFive">
                    Harga
                </button>
                </h2>
                <div id="flush-collapseFive" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingFive"
                data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body py-2 px-5">
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='design_grafis' name="design_grafis" className='bg-pink border-primary text-green focus:ring-orange' value="design_grafis"></input>
                            <label for="design_grafis" className='font-Inter text-sm font-medium'>&lt; Rp. 10.000</label><br></br>
                        </div>

                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='design_grafis' name="design_grafis" className='bg-pink border-primary text-green focus:ring-orange' value="design_grafis"></input>
                            <label for="design_grafis" className='font-Inter text-sm font-medium'>Rp. 10.000 - Rp. 50.000</label><br></br>
                        </div>

                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='design_grafis' name="design_grafis" className='bg-pink border-primary text-green focus:ring-orange' value="design_grafis"></input>
                            <label for="design_grafis" className='font-Inter text-sm font-medium'>Rp. 50.000 - Rp. 100.000</label><br></br>
                        </div>

                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='design_grafis' name="design_grafis" className='bg-pink border-primary text-green focus:ring-orange' value="design_grafis"></input>
                            <label for="design_grafis" className='font-Inter text-sm font-medium'>Rp. 100.000 - Rp. 250.000</label><br></br>
                        </div>

                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='design_grafis' name="design_grafis" className='bg-pink border-primary text-green focus:ring-orange' value="design_grafis"></input>
                            <label for="design_grafis" className='font-Inter text-sm font-medium'>Rp. 250.000 - Rp. 500.000</label><br></br>
                        </div>

                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='design_grafis' name="design_grafis" className='bg-pink border-primary text-green focus:ring-orange' value="design_grafis"></input>
                            <label for="design_grafis" className='font-Inter text-sm font-medium'>Rp. 500.000 - Rp. 1.000.000</label><br></br>
                        </div>

                        <div className='flex items-center gap-2'>
                            <input type="checkbox" id='design_grafis' name="design_grafis" className='bg-pink border-primary text-green focus:ring-orange' value="design_grafis"></input>
                            <label for="design_grafis" className='font-Inter text-sm font-medium'>&gt; Rp. 1.000.000</label><br></br>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TesAccord