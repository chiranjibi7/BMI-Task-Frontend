import React from 'react';
import Artist from './Artist';
import {Button} from "antd";

function ArtistLists() {
  return (
    <div className='h-95vh bg-neutral-200 w-1/3 rounded-md flex flex-col flex-nowrap relative py-4'>
       <div className='w-full grow overflow-y-auto mb-14 flex flex-col items-center gap-4 scroll-smooth scrollbar'>
          <Artist/>
          <Artist/>
          <Artist/>  
          <Artist/>
          <Artist/>
          <Artist/> 
       </div>
       <div className=" w-full flex shrink-0 absolute bottom-3 left-0 justify-around items-center z-10">
        <Button type="primary" className='bg-blue-600'>Add Artist</Button>
        <Button type="primary" danger>Remove Artist</Button>
      </div>
    </div>
  )
}

export default ArtistLists