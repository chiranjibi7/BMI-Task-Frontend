import React,{useEffect,useState} from 'react';
import Artist from './Artist';
import {Button,Spin} from "antd";
import {useDispatch,useSelector} from "react-redux";
import { fetchArtists } from '../slices/artistSlice';

function ArtistLists() {
  const dispatch=useDispatch();
  const {isLoading, artists}=useSelector(state=>state.artist);

  const [selectedCard, setSelectedCard]=useState(null);

  useEffect(()=>{
    dispatch(fetchArtists());
  },[]);

  const handleCardSelection=(_id)=>{
    if(selectedCard===_id){
     setSelectedCard(null);
    } else{
     setSelectedCard(_id);
    }
   };

  return (
    <div className='h-95vh bg-neutral-200 w-1/3 rounded-md flex flex-col flex-nowrap relative py-4'>
       <div className='w-full grow overflow-y-auto mb-14 flex flex-col items-center gap-4 scroll-smooth scrollbar'>
        {isLoading && <Spin size="large" className="mt-15"/>}
        {artists && artists.map(artist=>{
          return <Artist {...artist} key={artist._id} onClick={()=>handleCardSelection(artist._id)} selectedCard={selectedCard}/>
        })}
       </div>
       <div className=" w-full flex shrink-0 absolute bottom-3 left-0 justify-around items-center z-10">
        <Button type="primary" className='bg-blue-600'>Add Artist</Button>
        <Button type="primary" danger>Remove Artist</Button>
      </div>
    </div>
  )
}

export default ArtistLists