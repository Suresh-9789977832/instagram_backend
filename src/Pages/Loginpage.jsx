import React, { useContext, useEffect, useState } from 'react'
import env from '../env'
import toast from 'react-hot-toast'
import Loader from '../Loader'

import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Usercontext } from '../Components/Context'


function Loginpage() {

    const { userdata, setuserdata,logout} = useContext(Usercontext)


    const [state, setstate] = useState({
        email: "",
        password:""
    })
    const [loader, setloader] = useState(false)
    const [field,setfield]=useState(false)
    const navigate=useNavigate()

    const handlechange = (e) => {
        const { name, value } = e.target
        setstate({ ...state, [name]: value })
        
    }

    useEffect(() => {
        let fieldstate = (state.email.length > 0 && state.password.length > 0)
        setfield(fieldstate)
      },[state])

    const handlelogin = async() => {
        try {
            setloader(true)
            const res = await axios.post(`${env.BASE_URL}/user/login`, state)
            if (res.status == 200) {
              setloader(false)
                toast.success(res.data.message)
                setuserdata(res.data.finaldata)
            }
            setstate(state.email = "")     
            setstate(state.password="")      
            navigate('/index')
            sessionStorage.setItem("token",res.data.token)
          } catch (error) {
            if (error?.response?.status === 400) {
              setloader(false)
                console.log(toast.error(error?.response?.data?.message))
                console.log(error)
            }
            if (error?.response?.status === 401) {
                logout
            }
          }
    }
    return <>
        <div className="flex justify-center h-screen w-full  items-center flex-col">
        <div className="flex flex-col border border-gray-300 h-4/4 max-sm:border-none">
            <div className="flex items-center justify-center py-10">
                <img src="./images/insta1.png" className="w-36" alt='instagram_name'/>
            </div>
            <div className="flex flex-col items-center">
                <input placeholder='Phone number,username or email address' type="email"  onChange={handlechange} name='email' value={state.email}/>
                <input placeholder='Password' type='password' onChange={handlechange} name='password' value={state.password}/>
                    <button 
                        className={field ? 'mx-8 my-1 p-2 outline-none text-sm bg-darkblue font-semibold text-white mt-4 rounded-lg w-80 max-sm:w-60' :
                        "mx-8 my-1 p-2 outline-none text-sm bg-lightblue font-semibold text-white mt-4 rounded-lg w-80 max-sm:w-60"} onClick={handlelogin}>{loader?<Loader/>:"Log in"}</button>
                </div>

                <div className="flex justify-center mt-6">
                    <div className='h-px w-32 bg-line max-sm:w-20'></div>
                    <p className="relative bottom-3 px-4  text-gray-500 text-sm font-semibold">OR</p>
                    <div className='h-px w-32 bg-line max-sm:w-20'></div>
                </div>
                <a href='https://www.facebook.com/' target='_blank' className="flex justify-center items-center mt-4">
                <span>
                    <img src="./images/fb.png" className="w-4 mr-2"/>
                    </span>
                    <span className="text-blue-900  font-semibold">
                        Log in with Facebook
                    </span>
                    
                </a>
                <p className="text-blue-950 flex justify-center items-center my-6">
                   <small>Forgotten your password?</small> 
                </p>
            </div>
            <div className="flex justify-center   items-center border mt-3 px-20 py-6 border-gray-300 max-sm:border-none max-sm:px-0 max-sm:py-3 max-sm:text-sm">
                <Link to={'/signup'}>Don't have an account? <span className=" text-darkblue font-semibold">Sign up</span></Link>
            
        </div>
        </div>
       
       
    </>
}

export default Loginpage
