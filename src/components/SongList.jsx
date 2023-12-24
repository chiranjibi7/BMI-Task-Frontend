import React,{useState} from "react";
import { RiShareBoxLine } from "react-icons/ri";
import { CiMenuBurger } from "react-icons/ci";
import { Dropdown } from "antd";
import { useDispatch,useSelector } from 'react-redux';
import { setSongFilterParam } from "../slices/songSlice";
import { useNavigate } from "react-router";

function SongList() {

  const dispatch=useDispatch();
  const {isLoading, songs}=useSelector(state=>state.song);

  const navigate=useNavigate();

  const [songTitle, setSongTitle]=useState(null);

  const handleSongItemClick=(val)=>{
    setSongTitle(val.key);
    dispatch(setSongFilterParam(val.key));
  }

  return (
    <div className="bg-white rounded-lg w-full px-2 py-1 flex items-center">
      <div className="grow flex items-center gap-3">
        <Dropdown
          placement="bottomLeft"
          menu={{
            items:songs && songs.map(song=>{
                return {key:song.title,label:<p>{song.title}</p>}
            }),
            style: { marginTop: "5px" },
            onClick:(val)=>handleSongItemClick(val)
          }}
          trigger={["click"]}
        >
          <CiMenuBurger size={21} className="hover:cursor-pointer" />
        </Dropdown>
        <p>{songTitle ? songTitle : "No data"}</p>
      </div>

      <div className="self-end">
        <RiShareBoxLine size={23} className="hover:cursor-pointer" onClick={()=>navigate("/artistdetail")}/>
      </div>
    </div>
  );
}

export default SongList;
