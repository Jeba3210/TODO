import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import "../style/style.css"

function LogIn() {

  const loginEmail = useRef();
  const loginPassword = useRef();

  const navigate = useNavigate();

  const [userDetails , setUserDetails] = useState();

  useEffect(() => {
    if(!localStorage.getItem('details')){
      navigate('User is not registered yet!');
      navigate('/signup');
    }

    setUserDetails(JSON.parse(localStorage.getItem('details')));

  },[])


  function handleLogIn(e){
    e.preventDefault();

    const emailInput = loginEmail.current.value;
    const passwordInput = loginPassword.current.value;

    if(!emailInput || !passwordInput){
      toast.error('Fill all the fields');
      return;
    }
  
    if(emailInput !== userDetails.email) {
      toast.error('Email id does not match');
      return;
    }

    if(passwordInput !== userDetails.password){
      toast.error('Wrong Password');
      return;
    }

    toast.success('Succesfully logged in!');
    navigate('/profile');
  }

  return (
    <div className='body flex flex-col items-center '>
        <div className=' flex flex-col items-center mt-12'>
            <h1 className='text-4xl font-bold'>Welcome Back!</h1>
            <img className='w-80 h-76'  src="https://cdni.iconscout.com/illustration/premium/thumb/todo-list-2839461-2371075.png" alt="" />
        </div>
        <div>
            <form action="#"  className='flex flex-col items-center gap-5 mt-6' onSubmit={handleLogIn}>
                 <label htmlFor="email"></label>
                 <input type="text" 
                        id='email' 
                        placeholder='Enter your Email'
                        ref={loginEmail}
                        />
                 <label htmlFor="Password"></label>
                 <input type="text" 
                        id='Password' 
                        placeholder='Enter Password'
                        ref={loginPassword}
                        />
              <button className='btn-primary mt-8' type='submit'>Log In</button>
            <p className='text-lg'>Don’t have an account ? <Link to='/register' className='text-cyan-400 font-semibold'>Sign Up</Link></p>
            </form>
        </div>
    </div>
  )
}

export default LogIn