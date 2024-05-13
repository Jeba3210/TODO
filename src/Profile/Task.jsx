import React, { useEffect, useState } from 'react'
import { MdDelete , MdEdit } from "react-icons/md";

function Task({task , description , id , deleteTask, editTask}) { 

  

  return (
    <div className='shadow-[0_3px_10px_rgba(8,_112,_184,_0.7)] rounded-md  gap-3 w-full flex justify-between  p-10 mb-8'>
      <div className='mr-10 text-lg'>
      <input type="checkbox"/>
      </div>
        <div className='mr-10 text-lg'>
          Task : {task}
        </div>
        <div className='mr-10 text-lg'>
          Description : {description}
        </div >
        <div className='ml-20 flex '>
            <div className='mr-10'><button className='bg-Amber-500' onClick={() => editTask(id)}><MdEdit /></button></div>
            <div className='mr-10'><button className='bg-Amber-500' onClick={() => deleteTask(id)}><MdDelete /></button></div>
        </div>
        
      
    </div>
  )
}

export default Task