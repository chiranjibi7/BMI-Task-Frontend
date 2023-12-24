import React from 'react';
import { SongList, SongLyrics, SongDetails } from '../components';

function ArtistDetailPage() {
  return (
      <div className='h-screen bg-neutral-200 w-full rounded-md flex flex-col p-2 gap-4'>
        <SongList/>
        <SongLyrics/>
        <SongDetails/>
    </div>
  )
}

export default ArtistDetailPage