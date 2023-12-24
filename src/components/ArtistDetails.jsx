import React from 'react';
import SongList from './SongList';

function ArtistDetails() {
  return (
    <div className='h-95vh bg-neutral-200 w-2/3 rounded-md flex flex-col relative p-4'>
        <SongList/>
    </div>
  )
}

export default ArtistDetails