import React from 'react';
import SongList from './SongList';
import SongLyrics from './SongLyrics';
import SongDetails from './SongDetails';

function ArtistDetails() {
  return (
    <div className='h-95vh bg-neutral-200 w-2/3 rounded-md flex flex-col p-2 gap-4'>
        <SongList/>
        <SongLyrics/>
        <SongDetails/>
    </div>
  )
}

export default ArtistDetails