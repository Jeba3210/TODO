import React, { useEffect, useState } from 'react'
import { MdDelete , MdEdit } from "react-icons/md";

function Task({task , description , id , deleteTask, editTask}) { 

  

  return (
    <div>
        <div>
          Task : {task}
        </div>
        <div>
          Description : {description}
        </div>
        <div><button className='bg-Amber-500' onClick={() => editTask(id)}><MdEdit /></button></div>
        <div ><button className='bg-Amber-500' onClick={() => deleteTask(id)}><MdDelete /></button></div>
        <div></div>
    </div>
  )
}

export default Task