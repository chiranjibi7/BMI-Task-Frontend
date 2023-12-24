import React from 'react';
import { useSelector } from "react-redux";

function SongDetails() {
  const {songs, songFilterParam}=useSelector(state=>state.song);

  const foundSong=songs.find(song=>song.title==songFilterParam);
  return (
    <div className="w-full bg-white rounded-md bottom-3 left-0">
      <div className='m-1 bg-neutral-200 text-black rounded-lg w-2/5 px-2 font-bold text-sm'>
        <p>{`${songFilterParam} Details`}</p>
      </div>
      <div className='flex flex-col items-start py-2 px-4 gap-2'>
      <div>
        <span>Composer: </span>
        <span>{foundSong?.details?.composer}</span>
      </div>
      <div>
        <span>Producer: </span>
        <span>{foundSong?.details?.producer}</span>
      </div>
      <div>
        <span>Production Date: </span>
        <span>{foundSong?.details?.productionDate}</span>
      </div>
      <div>
        <span className='text-base'>Awards: </span>
        {foundSong?.details?.awards.map(award=>{
          return <span>{award + ","}</span>
        })}
      </div>
    </div>
  </div>
  )
}

export default SongDetails