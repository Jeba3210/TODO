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
    <div>
        <div>
          <h1>Welcome to Today Ahed!</h1>
          <p>Let’s help to meet up your tasks.</p>
        </div>
        <div>
          <form action="#" onSubmit={handleSubmit}>
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

             <button>Register</button>
              <p>Already have an account? <Link to="/login">Sign in</Link></p>
          </form>
        </div>
    </div>
  )
}

export default SignUp