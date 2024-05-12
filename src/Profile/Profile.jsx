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
    <div>
      {userDetails &&
        <div>
          <img src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="" />
          <p>Welcome {userDetails.name}</p>
        </div>
      }
      <div>
        <form action="#" onSubmit={implementTaskSubmit}>
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

          {!toggleSubmit ?
            <button type='submit'><MdOutlineAdd /></button> :
            <button type='submit'><MdEdit /></button>
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

