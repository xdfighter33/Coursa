import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/signup.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

function Signup1() {


    return (
      <div className='myComponent'>
        <p>This is my styled component.</p>
      </div>
    );
  }

function Signup() {


  const [name, SetName] = useState();
  const [email, SetEmail] = useState();
  const [Password, SetPassword] = useState();

  const handlesubmit = (e) => {


    e.preventDefault();
    axios.post('/register',{name,email,Password})
      .then(result => console.log(result))
      .catch(err => console.log(err))
      
      
      
  }

  return (
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Register</h2>
        <form onSubmit={handlesubmit}>
          <div className='mb-3'>
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete='off'
              name="Name"
              className='form-control rounded-0'
              onChange={(e) => SetName(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              autoComplete='off'
              name="Email"
              className='form-control rounded-0' 
              onChange={(e) => SetEmail(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete='off'
              name="Password"
              className='form-control rounded-0'
            />
          </div>
          <button type="submit" className='btn btn-success w-100 rounded-0'>
            Register
          </button>
          </form>
          <p>Already have an account?</p>
          <Link to='/login' className='btn btn-default boreder w-100 bg-light rounded-0 text-decoration-none'>
            Login </Link>
     
      </div>
    </div>
  );
}

export default Signup;
