import React, { useRef } from 'react';

const Register = () => {
  const registerNameRef = useRef();
  const registerPasswordRef = useRef();
  const registerEmailRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const name = registerNameRef.current.value;
    const email = registerEmailRef.current.value;
    const password = registerPasswordRef.current.value;

    if (name && email && password) {
      // Simulate a successful sign-up
      window.alert('Sign-up successful. Redirecting to login page.');
      // You can replace the window.alert and redirection with your actual logic
      // For React Router, you can use history.push('/login') instead of window.location.href
    } else {
      // Simulate a sign-up failure
      window.alert('Sign-up failed. Please fill in all fields.');
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form className='form' onSubmit={submitHandler}>
        <div className='form__group'>
          <input
            type='text'
            placeholder='Full Name'
            ref={registerNameRef}
          ></input>
        </div>
        <div className='form__group'>
          <input
            type='email'
            placeholder='Email'
            ref={registerEmailRef}
          ></input>
        </div>
        <div className='form__group'>
          <input
            type='password'
            placeholder='Password'
            ref={registerPasswordRef}
          ></input>
        </div>
        <button type='submit' className='addToCart__btn'>
          Sign up
        </button>
      </form>
      <p>
        <a href='/login'>Already have an account? Login</a>
      </p>
    </div>
  );
};

export default Register;
