import React,{useEffect,useState, useMemo} from 'react';
import Artist from './Artist';
import {Button,Spin,message} from "antd";
import {useDispatch,useSelector} from "react-redux";
import { fetchArtists, removeArtist, clearArtistRemoveResponse } from '../slices/artistSlice';
import { fetchSongsByArtist, clearSongs} from '../slices/songSlice';
import CreateArtistModal from './CreateArtistModal';

function ArtistLists() {
  const dispatch=useDispatch();
  const {isLoading, artists, artistCreateResponse, artistRemoveResponse}=useSelector(state=>state.artist);

  const [selectedCard, setSelectedCard]=useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [artistId, setArtistId]= useState(null);

  const [messageApi, contextHolder] = message.useMessage();

  console.log(artistRemoveResponse)

  useEffect(()=>{
    dispatch(fetchArtists());
    dispatch(clearArtistRemoveResponse());
  },[artistCreateResponse,artistRemoveResponse]);

  useEffect(()=>{
    if(!artistRemoveResponse) return;
    else if(artistRemoveResponse?.status==404 || artistRemoveResponse?.status==500){
      messageApi.open({
        type: 'error',
        content: `${artistRemoveResponse?.data?.message}`,
      });
    } else{
      messageApi.open({
        type: 'success',
        content: `${artistRemoveResponse?.data?.message}`,
      })
    }
},[artistRemoveResponse]);

  const handleCardSelection=(_id)=>{
    dispatch(clearSongs());
    if(selectedCard===_id){
     setSelectedCard(null);
    } else{
     setSelectedCard(_id);
    }
    dispatch(fetchSongsByArtist(_id));
    setArtistId(_id);
   };

   const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='h-95vh bg-neutral-200 w-1/3 rounded-md flex flex-col flex-nowrap relative py-4'>
        <p className='text-center font-bold py-1'>Artists List</p>
       <div className='w-full grow overflow-y-auto mb-14 flex flex-col items-center gap-4 scroll-smooth scrollbar'>
        {isLoading && <Spin size="large" className="mt-15"/>}
        {artists && artists.map(artist=>{
          return <Artist {...artist} key={artist._id} onClick={()=>handleCardSelection(artist._id)} selectedCard={selectedCard}/>
        })}
       </div>
       <div className=" w-full flex shrink-0 absolute bottom-3 left-0 justify-around items-center z-10">
        <Button type="primary" className='bg-blue-600' onClick={showModal}>Add Artist</Button>
        <Button type="primary" danger disabled={!selectedCard} onClick={()=>dispatch(removeArtist(artistId))}>Remove Artist</Button>
      </div>
      <CreateArtistModal isModalOpen={isModalOpen} handleCancel={handleCancel}/>
      {contextHolder}
    </div>
  )
}

export default ArtistLists