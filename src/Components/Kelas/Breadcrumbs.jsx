import React from 'react'

function Breadcrumbs() {
  return (
    <div>
        <nav class="rounded-md w-full mb-5">
            <ol class="list-reset flex">
                <li><a href="/kelas" class="text-gray">Kelas</a></li>
                <li><span class="text-gray mx-2">/</span></li>
                <li class=" font-semibold">Marketing Guide 101</li>
            </ol>
        </nav>
    </div>
  )
}

export default Breadcrumbs