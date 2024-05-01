import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import env from '../env'
import toast from 'react-hot-toast';
import Loader from '../Loader'

function Signup() {

  const [state, setstate] = useState({
    email: "",
    username: "",
    fullname: "",
    password: ""
    
  })

  
  const [field, setfield] = useState(false)
  const [loader,setloader]=useState(false)
  const navigate=useNavigate()

  const handlechange = (e) => {
    const { name,value } = e.target
    setstate ({...state,[name]:value})
  }


  useEffect(() => {
    let fieldstate = (state.email.length > 0 &&
      state.username.length > 0 &&
    state.fullname.length > 0 &&
    state.password.length > 0)
    setfield(fieldstate)
  },[state])

  const handlesignup = async() => {
    try {
      setloader(true)
      const res = await axios.post(`${env.BASE_URL}/user/signup`, state)
      if (res.status == 201) {
        setloader(false)
        toast.success(res.data.message)
      }
      setstate(state.email = "") 
      setstate(state.username="")      
      setstate(state.fullname="")      
      setstate(state.password="")      
      navigate('/')
    } catch (error) {
      if (error?.response?.status === 400) {
        setloader(false)
        toast.error(error?.response?.data?.message)
      }
    }
  }


  return <>    
    <div className="flex h-screen w-full  items-center flex-col my-10">
        <div className="flex flex-col border border-gray-300 h-4/4 max-sm:border-none">
            <div className="flex items-center justify-center pt-10 flex-col">
          <img src="./images/insta1.png" className="w-36" alt='instagram_name'/>
          <h3 className='mt-4 font-semibold text-gray-500  max-sm:text-sm'>Sign up to see photos and videos</h3> <h3 className='max-sm:text-sm text-gray-500 font-semibold'>from your friends.</h3>
        </div>
        <div>
          <button className='mx-8 p-2 outline-none text-sm bg-darkblue font-semibold text-white my-4 rounded-lg w-80 max-sm:w-60'>
          <a href='https://www.facebook.com/' target='_blank' className="flex justify-center items-center ">
                <span>
                    <img src="./images/fb.png" className="w-4 mr-2 bg-white"/>
                    </span>
                    <span className="text-white  font-semibold">
                        Log in with Facebook
                    </span>
                    
                </a>
          </button>
          <div className="flex justify-center mt-2">
                    <div className='h-px w-32 bg-line max-sm:w-24'></div>
                    <p className="relative bottom-3 px-4  text-gray-500 text-sm font-semibold">OR</p>
                    <div className='h-px w-32 bg-line max-sm:w-24'></div>
                </div>

        </div>
        
            <div className="flex flex-col items-center">
          <input placeholder='Mobile number or email address' type="email" onChange={handlechange} name='email' value={state.email} checked/>
          <input placeholder='Full Name' type='text' onChange={handlechange} name='fullname' value={state.fullname}/>
          <input placeholder='User Name' type='text' onChange={handlechange} name='username' value={state.username}/>
          <input placeholder='Password' type='text'  onChange={handlechange} name='password' value={state.password}/>

          {field?    <button className={field ? 'mx-8 my-1 p-2 outline-none text-sm bg-darkblue font-semibold mb-10 text-white mt-4 rounded-lg w-80 max-sm:w-60' :
            'mx-8 my-1 p-2 outline-none text-sm bg-lightblue font-semibold mb-10 text-white mt-4 rounded-lg w-80 max-sm:w-60'}
            onClick={handlesignup} >{loader ? <Loader /> : "Sign up"}</button>
            :
            <button className={field ? 'mx-8 my-1 p-2 outline-none text-sm bg-darkblue font-semibold mb-10 text-white mt-4 rounded-lg w-80 max-sm:w-60' :
            'mx-8 my-1 p-2 outline-none text-sm bg-lightblue font-semibold mb-10 text-white mt-4 rounded-lg w-80 max-sm:w-60'}
            onClick={handlesignup} disabled>{loader ? <Loader /> : "Sign up"}</button>
          }
      
                </div>
      </div>
      <div className="flex justify-center   items-center border mt-3  pr-28 pl-24  py-6 border-gray-300 max-sm:border-none max-sm:px-0 max-sm:py-3 max-sm:text-sm">
            <Link to={'/'}>Have an account ?  <span className=" text-darkblue font-semibold">Log in</span></Link>
      </div>
           
        </div>
  </>
}

export default Signup
