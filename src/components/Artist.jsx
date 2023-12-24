import React from 'react';
import { Card } from 'antd';

function Artist() {
  return (
    <Card className='w-4/5 hover:cursor-pointer' hoverable>
    <div className='flex flex-col items-start ml-5 gap-2'>
      <div>
        <span className='font-bold text-base'>Name: </span>
        <span>Hi</span>
      </div>
      <div>
        <span className='font-bold text-base'>Nationality: </span>
        <span>Hi</span>
      </div>
      <div>
        <span className='font-bold text-base'>Age: </span>
        <span>Hi</span>
      </div>
    </div>
  </Card>
  )
}

export default Artist