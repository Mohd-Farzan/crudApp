import React, { useRef, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom' 
function SignupUser() {
    const [value , setValue] = useState({
        email:"",
        name:"",
        mbl:"",
        Age:"",
        gender:"",
        password:"",

    })
    const handleOnchange = (e) => {
        setValue({
          ...value,
          [e.target.name]: e.target.value
        });
      };
      

      const CloseRef = useRef();

      const handleSubmit = async (e) => {
          e.preventDefault();
  
          try {
              const adduser = await axios.post('http://localhost:4000/api/register', value);
              const response = adduser.data;
  
              if (response.success) {
                  toast.success(response.message || 'successfully register'); // Ensure correct casing
                  if (CloseRef.current) {
                      CloseRef.current.click();
                  }
              } else {
                  toast.error(response.message || 'Registration failed.'); // Handle unsuccessful responses
              }
  
              console.log(response);
          } catch (error) {
              console.error(error.response.data);
              toast.error('An error occurred during registration.'); // Provide a user-friendly error message
          }


    };
  return (
    <section>
        <main>
            <div className="registration-section">
                <div className="container grid grid-cols-2">
                    <div className="registration-img">
                        <img  className="h-full w-full object-cover"src={"images/logo.png"} alt="" />
                    </div>
                    <div className="registration-form">
                       <h1 className=' text-5xl relative text-center top-36'>registration form</h1>
                        <form   onSubmit= {handleSubmit}className="grid grid-cols-2 mt-52"action="" method="post">
                        <div className="my-3">
                        <label htmlFor="email" className='block text-base mb-2'>email</label>
                        <input type="text"  value={value.email} name='email' onChange={handleOnchange} className="border w-4/5 text-base px-5 text-center focus:outline-none focus:border-blue-500"placeholder='enter your email' required />
                        </div>

                        <div className="my-3">
                        <label htmlFor="name"  className='block text-base mb-2'>Name</label>
                        <input type="text"  value={value.name} name='name' onChange={handleOnchange}  className="border w-4/5 text-base px-5 text-center focus:outline-none focus:border-blue-500"placeholder='enter your name' required />
                        </div>

                        <div className="my-3">
                        <label htmlFor="mobile" className='block text-base mb-2'>mobile</label>
                        <input type="number" value={value.mbl} name='mbl'onChange={handleOnchange}  className="border w-4/5 text-base px-5 text-center focus:outline-none focus:border-blue-500" placeholder='enter your mobile' required />
                        </div>

                        <div className="my-3">
                        <label htmlFor="age" className='block text-base mb-2'>Age</label>
                        <input type="number"  value={value.Age} name='Age' onChange={handleOnchange} className="border w-4/5 text-base px-5 text-center focus:outline-none focus:border-blue-500" placeholder='enter your age' required />
                        </div>

                        <div className="my-3">
                        <label htmlFor="gander" className='block text-base mb-2'>Gander</label>
                        <input type="text"  value= {value.gender} name='gender' onChange={handleOnchange} className="border w-4/5 text-base px-5 text-center focus:outline-none focus:border-blue-500" placeholder='enter your Gander' required />
                        </div>

                        <div className="my-3">
                        <label htmlFor="password" className='block text-base mb-2'>Password</label>
                        <input type="password" value= {value.password} name='password' onChange={handleOnchange} className="border w-4/5 text-base px-5 text-center focus:outline-none focus:border-blue-500" placeholder='enter your password' required />
                        </div>
                        <div className="my-5">
                        <button type="submit"className=" relative left-28 border w-full text-base py-1 bg-green-500 hover:bg-transparent px-25 text-center focus:outline-none focus:border-blue-500">Submit</button>
                        </div>
                        </form> 
                        <Link to="/login" className='my-14 relative'>already have an acount <span  className='text-green-400 hover:text-green-200'>Login</span></Link>
                       
                    </div>
                </div>
            </div>
        </main>
    </section>
  )
}

export default SignupUser