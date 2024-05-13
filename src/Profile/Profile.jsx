import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify';
import { v4 as uuid } from 'uuid';
import Task from './Task';
import { MdEdit, MdOutlineAdd } from 'react-icons/md';

function Profile() {

  const task = useRef();
  const description = useRef();

  const [userDetails, setUserDetails] = useState();

  const [taskDetails, setTaskDetails] = useState([]);

  const [toggleSubmit, setToggleSubmit] = useState(false);
  const [editedId, setEditedId] = useState();

  useEffect(() => {

    setUserDetails(JSON.parse(localStorage.getItem('details')));

  }, [])


  function implementTaskSubmit(e) {
    e.preventDefault();

    var taskInput = task.current.value;
    var descriptionInput = description.current.value;

    console.log(taskInput);
    console.log(descriptionInput);

    if (!taskInput || !descriptionInput) {
      toast.error('All fields are mandatory!');
      return
    } else if (taskInput && descriptionInput && toggleSubmit) {
      setTaskDetails(taskDetails.map(task => {
        if (task.key === editedId) {
          return { ...task, task: taskInput, description: descriptionInput }
        }
        return task;

      })
      )

      task.current.value = '';
      description.current.value = '';

      setToggleSubmit(false);
      setEditedId('');

    } else {
      const taskDetailsWithKey = {
        task: taskInput,
        description: descriptionInput,
        key: uuid()
      }

      // localStorage.setItem('taskDetails' , JSON.stringify(taskDetails));

      setTaskDetails([...taskDetails, taskDetailsWithKey]);

      task.current.value = '';
      description.current.value = '';

    }

  }

  // Delete Task
  function deleteTask(id) {
    setTaskDetails(taskDetails.filter(task => id !== task.key));

  }

  // Edit Task
  function editTask(id) {
    const editedTask = taskDetails.find(task => { return id === task.key });
    // console.log(editedTask)
    task.current.value = editedTask.task;
    description.current.value = editedTask.description;

    setToggleSubmit(true);
    setEditedId(id);
    console.log(editedId);


  }

  return (
    <div  className='profile flex flex-col items-center gap-6 mt-10'>
      {userDetails &&
        <div className=' flex flex-col items-center'>
          <img className='h-28' src="https://cdn-icons-png.freepik.com/256/10302/10302971.png?semt=ais_hybrid" alt="" />
          <p className='text-2xl font-semibold'>Welcome {userDetails.name}</p>
        </div>
      }
      <div>
        <form action="#" className=' shadow-[0_3px_10px_rgba(8,_112,_184,_0.7)] rounded-md h-76 gap-3 w-full flex  items-center p-10 mb-8' onSubmit={implementTaskSubmit}>
          <label htmlFor="task"></label>
          <input className='bg-cyan-200' type="text"
            id='task'
            placeholder='Enter your task'
            ref={task}
          />
          <label htmlFor="desc"></label>
          <input className='bg-cyan-200' type="text"
            id='desc'
            placeholder='Describe your task'
            ref={description}
          />

          {!toggleSubmit ?
            <button className='py-3 px-28 text-2xl bg-cyan-400 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-500 focus:outline-none focus:ring focus:ring-cyan-400 focus:ring-opacity-75; ' type='submit'><MdOutlineAdd /></button> :
            <button className='py-3 px-28 text-2xl bg-cyan-400 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-500 focus:outline-none focus:ring focus:ring-cyan-400 focus:ring-opacity-75; ' type='submit'><MdEdit /></button>
          }

        </form>
      </div>

      {
        taskDetails &&
        <div>
          <ul>
            {taskDetails.map((task,) => {
              return (
                <Task key={task.key}
                  id={task.key}
                  task={task.task}
                  description={task.description}
                  deleteTask={deleteTask}
                  editTask={editTask}
                />
              )
            }
            )}
          </ul>
        </div>
      }




    </div>
  )
}

export default Profile

