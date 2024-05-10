import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify';
import { v4 as uuid } from 'uuid';
import Task from './Task';

function Profile() {

    const task = useRef();
    const description = useRef();

  const [userDetails , setUserDetails] = useState();
 
  

  useEffect(() => {
  
    setUserDetails(JSON.parse(localStorage.getItem('details')));

  },[])


  function handleTaskSubmit(e){
    e.preventDefault();

    const taskInput = task.current.value;
    const descriptionInput = description.current.value;

    console.log(taskInput);
    console.log(descriptionInput)

    if(!taskInput || !descriptionInput){
      toast.error('All fields are mandatory!');
      return
    }

    const taskDetails = {
      task : taskInput,
      description : descriptionInput,
      key : uuid()
    }

    localStorage.setItem('taskDetails' , JSON.stringify(taskDetails));

    

  }
  

  return (
    <div>
     {userDetails && 
     <div>
     <img src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="" />
     <p>Welcome {userDetails.name}</p>
   </div>
     }
     <div>
      <form action="#" onSubmit={handleTaskSubmit}>
        <label htmlFor="task">Your task</label>
              <input type="text"
                     id='task'
                     placeholder='Enter your task'
                     ref={task}
              />
        <label htmlFor="desc">Description</label>
              <input type="text"
                     id='desc'
                     placeholder='Describe your task'
                     ref={description}
              />
        <button type='submit'>Submit</button>
      </form>
     </div>
     {localStorage.getItem('taskDetails') &&  
     <div>
      <Task />
     </div>
     
     }
        
    
      
    </div>
  )
}

export default Profile

