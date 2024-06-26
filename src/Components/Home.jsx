import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='body'>
         <div className=' flex flex-col items-center  gap-8'>
      <div><img className='w-96 h-80 mt-10' src="https://cdni.iconscout.com/illustration/premium/thumb/real-time-schedule-3914921-3243774.png" alt="logo" /></div>
      <div className='h-1/2 w-1/2 flex flex-col items-center gap-6'>
      <h1 className=' text-4xl'>Organize your life, one task at a time.</h1>
       <p>Welcome to our <b>Today Ahead!</b> Designed with simplicity and efficiency in mind, our platform offers you a streamlined way to organize your tasks and boost productivity. Whether you're managing personal errands, work projects, or collaborative team efforts, our intuitive interface makes it effortless to create, prioritize, and track your to-dos. Say goodbye to scattered notes and hello to seamless task management. Start accomplishing more today with <b>Today Ahead!</b></p>
      </div>
      <div>
        <Link to="/register"><button className='btn-primary mt-10'>Get Started</button></Link>
      </div>
       
       
    </div>
    </div>
   
  )
}

export default Home