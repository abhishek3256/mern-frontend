


// import React from 'react'
// import './Register.css'
// import { useState } from 'react'
// // import { useRef } from 'react'

// const Register = () => {
//     const[user,setuser]=useState({})
//     const handleSubmit=()=>{
//         console.log(user)
//     }
//   return (
//     <div className='App-register-Row' >

//        <div >
//          <h2>Registration form</h2>
//         <p>
//             <input type="text" onChange={(e)=>setuser({...user,firstname:e.target.value})} placeholder='Enter first name' />
//         </p>
//         <p>
//             <input type="text" onChange={(e)=>setuser({...user,lastname:e.target.value})} placeholder='Enter last name' />
//         </p>
//         <p>
//             <input type="text" onChange={(e)=>setuser({...user,email:e.target.value})} placeholder='Enter email' />
//         </p>
//         <p>
//             <input type="text" onChange={(e)=>setuser({...user,password:e.target.value})} placeholder='Enter password' />
//         </p>
//         <button onClick={handleSubmit}>Submit</button>
//         </div>
      
//     </div>
//   )
// }

// export default Register
import React, { useRef } from 'react';
import './Register.css';

const Register = () => {
  const firstname = useRef();
  const lastname = useRef();
  const email = useRef();
  const password = useRef();

  const handleSubmit = () => {
    const user = {
      firstname: firstname.current.value,
      lastname: lastname.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    console.log("Registered User:", user);
  };

  return (
    <div className="App-Register-Row">
      <div className="App-Register-Row-input">
        <h2>Registration Form</h2>
        <p>
          <input type="text" ref={firstname} placeholder="Enter first name" />
        </p>
        <p>
          <input type="text" ref={lastname} placeholder="Enter last name" />
        </p>
        <p>
          <input type="text" ref={email} placeholder="Enter email" />
        </p>
        <p>
          <input type="text" ref={password} placeholder="Enter password" />
        </p>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Register;