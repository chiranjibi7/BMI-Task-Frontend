import React, { useEffect} from "react";
import { Modal, Button, InputNumber, Input, Spin,message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setArtistRequestObj, postArtist, clearArtistRequestObj} from "../slices/artistSlice";

function CreateArtistModal({ isModalOpen, handleCancel }) {
    const [messageApi, contextHolder] = message.useMessage();

    const dispatch=useDispatch();
    const {isLoading, artistRequestObj, artistCreateResponse}=useSelector(state=>state.artist);

    useEffect(()=>{
        if(artistCreateResponse){
          messageApi.open({
            type: 'success',
            content: 'Artist created',
          })
        } else{
          messageApi.open({
            type: 'error',
            content: 'Error occoured',
          });
        }
    },[artistCreateResponse]);

  return (
    <Modal
      title="Create an Artist"
      open={isModalOpen}
      onCancel={handleCancel}
      footer={[
        <Button type="primary" danger key="1" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button type="primary" className="bg-blue-500" key="2" onClick={()=>{
            dispatch(postArtist(artistRequestObj));
            dispatch(clearArtistRequestObj());
        }}>
          {isLoading ? <Spin/> : "Create"}
        </Button>,
      ]}
    >
      <div className="flex flex-col p-2 gap-3">
            <div className="flex flex-col justify-start">
                <p className="font-bold">Name:</p>
                <Input name="name" value={artistRequestObj.name} onChange={(e)=>dispatch(setArtistRequestObj(e.target))}/>
            </div>

            <div className="flex flex-col justify-start">
                <p className="font-bold">Nationality:</p>
                <Input name="nationality" value={artistRequestObj.nationality} onChange={(e)=>dispatch(setArtistRequestObj(e.target))}/>
            </div>

            <div className="flex flex-col justify-start">
                <p className="font-bold">Age:</p>
                <InputNumber min={1} max={150} name="age" value={artistRequestObj.age} onChange={v=>dispatch(setArtistRequestObj({name:"age",value:v}))}/>
            </div>
      </div>
      {contextHolder}
    </Modal>
  );
}

export default CreateArtistModal;
