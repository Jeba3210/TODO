import React , {useEffect, useRef} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function SignUp() {

  const navigate = useNavigate();

  useEffect(() =>{
      if(!localStorage.getItem('details')){
        navigate('/register');
      }
  },[])

  const name = useRef();
  const email = useRef();
  const password = useRef();
  const cPassword = useRef();

  function handleSubmit(e){
    e.preventDefault();
    
    const nameInput = name.current.value;
    const emailInput = email.current.value;
    const passwordInput = password.current.value;
    const cPasswordInput = cPassword.current.value;

    if(!nameInput || !emailInput || !passwordInput || !cPasswordInput){
      toast.error('All fields are madetory');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(emailInput)){
      toast.error('Invalid email id');
      return;
    }

    if(passwordInput.length < 8 || passwordInput.length > 15){
      toast.error('Password must be between 8 and 15 characters');
      return;
    }

    if(passwordInput !== cPasswordInput){
      toast.error('Password and Confirm password should be same');
      return;
    }


    const details = {
      name : nameInput,
      email : emailInput,
      password : passwordInput,
      cPassword : cPasswordInput
      }

    
      localStorage.setItem('details', JSON.stringify(details));

      toast.success('Registration completed');
      navigate('/login');
     
     
  }

  return (
    <div className='body flex flex-col items-center gap-6' >
        <div className=' flex flex-col items-center mt-20'>
          <h1 className='text-4xl font-bold'>Welcome to Today Ahead!</h1>
          <p className='text-2xl font-semibold'>Let’s help to meet up your tasks.</p>
          {/* <img src=" ./signup.png" alt="" /> */}
        </div>
        <div>
          <form action="#"  className='flex flex-col items-center gap-5 mt-6' onSubmit={handleSubmit}>
            <label htmlFor="name"></label>
              <input type="text" 
                     id='name' 
                     placeholder='Enter Your Name' 
                     ref={name}
                     />
            <label htmlFor="email"></label>
              <input type="text" 
                     id='email' 
                     placeholder='Enter Your Email id'
                     ref={email}
                     />
            <label htmlFor="password"></label>
              <input type="text" 
                     id='password' 
                     placeholder='Enter Password'
                     ref={password}
                     />
            <label htmlFor="C-Password"></label>
              <input type="text" 
                     id='C-Password'
                     placeholder='Confirm Password'
                     ref={cPassword}
                     />

             <button className='btn-primary mt-10'>Register</button>
              <p className='text-lg'>Already have an account? <Link to="/login" className='text-cyan-400 font-semibold'> Sign in</Link></p>
          </form>
        </div>
    </div>
  )
}

export default SignUp