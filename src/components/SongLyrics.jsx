import React from "react";
import { useSelector } from "react-redux";

function SongLyrics() {
  const {songs, songFilterParam}=useSelector(state=>state.song);

  const foundSong=songs.find(song=>song.title==songFilterParam);
  return (
    <div className="w-full bg-white rounded-md grow overflow-y-auto scroll-smooth scrollbar">
      <div className="m-1 bg-neutral-200 text-black rounded-lg w-2/5 px-2 font-bold text-sm">
        <p>{`${songFilterParam} Lyrics`}</p>
      </div>
      <p className="px-2">
        {foundSong && foundSong?.lyrics}
      </p>
    </div>
  );
}

export default SongLyrics;
