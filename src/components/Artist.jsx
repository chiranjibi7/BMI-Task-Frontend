import React from 'react';
import { Card } from 'antd';

function Artist(props) {
  const {name,nationality,age,_id,onClick,selectedCard}=props;
  
  return (
    <Card className={`w-4/5 hover:cursor-pointer ${selectedCard===_id ? 'bg-green-100' : 'bg-white'}`} hoverable onClick={onClick}>
    <div className='flex flex-col items-start ml-5 gap-2'>
      <div>
        <span className='font-bold text-base'>Name: </span>
        <span>{name}</span>
      </div>
      <div>
        <span className='font-bold text-base'>Nationality: </span>
        <span>{nationality}</span>
      </div>
      <div>
        <span className='font-bold text-base'>Age: </span>
        <span>{age}</span>
      </div>
    </div>
  </Card>
  )
}

export default Artist