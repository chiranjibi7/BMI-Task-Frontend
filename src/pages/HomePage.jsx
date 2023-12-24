import React from 'react';
import { ArtistLists, ArtistDetails } from '../components';

function HomePage() {
  return (
    <div className='w-full flex px-4 mt-4 gap-4'>
        <ArtistLists/>
        <ArtistDetails/>
    </div>
  )
}

export default HomePage