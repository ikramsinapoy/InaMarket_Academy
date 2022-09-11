import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function ProgresBar() {
    const percentage = 86;
    return (
        <div className='mb-8'>
            <div className='px-5 py-4 bg-white border border-[#e9ecef] rounded-lg drop-shadow-lg w-60'>
                <h2 class="font-Inter font-semibold text-base pb-3 border-b border-primary">
                    Progress
                </h2>

                <div className='mt-3 flex items-center gap-3'>
                    <div className='w-1/4'>
                        <CircularProgressbar value={percentage} className='stroke-primary' styles={buildStyles({ pathColor: '#C30010' })}/>
                    </div>
                    <div>
                        {percentage}% Materi Selesai
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgresBar