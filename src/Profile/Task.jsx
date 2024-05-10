import React, { useEffect, useState } from 'react'

function Task() {

    const [taskDescription , setTaskDescription] = useState();

    useEffect(() => {
        setTaskDescription(JSON.parse(localStorage.getItem('taskDetails')));
    },[])

    console.log(taskDescription);

  return (
    <div>
        <p>task</p>
    </div>
  )
}

export default Task