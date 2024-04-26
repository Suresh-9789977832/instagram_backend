import React from 'react'

function Skeleton() {
    return <>
        <div className='flex flex-col justify-center items-center mr-80 mt-10 max-3md:mr-60 max-3sm:mt-5 ml-16 w-60'>
        <div className="flex flex-col gap-4 w-52">
  <div className="flex gap-4 items-center">
    <div className="skeleton w-20 h-20 rounded-full shrink-0"></div>
    <div className="flex flex-col gap-4">
      <div className="skeleton h-4 w-40"></div>
      <div className="skeleton h-4 w-60"></div>
    </div>
  </div>
  <div className="skeleton h-96 w-96"></div>
</div>
        </div>

    </>
}

export default Skeleton
