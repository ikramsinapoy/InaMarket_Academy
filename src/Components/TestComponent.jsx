import React from 'react'

function TestComponent() {
  return (
    <div>
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <div className='w-28'>
                    <h2 class="accordion-header mb-0" id="headingOne">
                    <button class="
                        accordion-button
                        collapsed
                        relative
                        flex
                        items-center
                        w-full
                        py-4
                        px-5
                        text-base text-gray-800 text-left
                        bg-white
                        border-0
                        rounded-none
                        transition
                        focus:outline-none
                    " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false"
                        aria-controls="collapseOne">
                        <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" class="rounded-full" style={{height: "36px", width: "36px"}} alt="" loading="lazy" />
                    </button>
                    </h2>
                </div>
                
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                    <div class="accordion-body py-4 px-5">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default,
                        until the collapse plugin adds the appropriate classes that we use to style each
                        element. These classes control the overall appearance, as well as the showing and
                        hiding via CSS transitions. You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just about any HTML can go within
                        the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TestComponent