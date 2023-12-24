import React from 'react'

function SongDetails() {
  return (
    <div className="w-full bg-white rounded-md bottom-3 left-0">
      <div className='m-1 bg-neutral-200 text-black rounded-lg w-2/5 px-2 font-bold text-sm'>
        <p>Song title 1 Details</p>
      </div>
      <div className='flex flex-col items-start py-2 px-4 gap-2'>
      <div>
        <span>Composer: </span>
        <span>Hi</span>
      </div>
      <div>
        <span>Producer: </span>
        <span>Hi</span>
      </div>
      <div>
        <span>Production Date: </span>
        <span>Hi</span>
      </div>
      <div>
        <span className='text-base'>Awards: </span>
        <span>Hi</span>
      </div>
    </div>
  </div>
  )
}

export default SongDetails