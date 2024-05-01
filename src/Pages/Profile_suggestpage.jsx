import React, { useContext, useEffect, useState } from 'react'
import { Usercontext } from '../Components/Context'
import { Link } from 'react-router-dom'
import axios from 'axios';
import env from '../env'
import Card from './Card'

function Profile_suggestpage({show}) {

  const { userdata,user } = useContext(Usercontext)
  const [users, setusers] = useState([])
  const [final, setfinal] = useState([])
  const [loader, setloader] = useState(false)
  const [profile,setprofile]=useState({})

  const userid = userdata.id || userdata._id
  



  const token= sessionStorage.getItem('token')
  
  useEffect(() => {
    const getallusers = async () => {
      let res = await axios.get(`${env.BASE_URL}/user/getallusers`)
      setusers(res.data)
    }
    getallusers()
  }, [])

  
  useEffect(() => {
    setfinal(users.filter((user) => user._id !== userid))
  }, [users])
  

  


  return (
    <div className="w-80 mt-8 ml-10">
      {
        !show?   <Link to={`/profile/${token}/${userid}`} className='flex justify-between items-center  cursor-pointer'>
        <div className='flex justify-between items-center'>
        <div className='flex flex-col items-center  pr-3'>
              <img src={'https://instagram-wkf6.onrender.com/' + user?.profilepicurl} className=' rounded-full  w-16 h-16 object-cover p-1 border-' />     
          </div>
          <div>
            <p className=' font-semibold'>{userdata?.username}</p>
              <p className=' font-normal text-gray-500'>{userdata?.fullname}</p>
          </div>
          </div>
          <div><button className=' text-darkblue font-semibold'>switch</button></div>
        </Link>
          :
          ""
      }
   
    
      <div className='mt-5'>
        <div className='flex justify-between mb-5'>
          <p className='font-semibold text-gray-500'>Suggested for you</p>
          <p>See All</p>
        </div>
        <Card final={final} />
      </div>
    </div>
  )
}

export default Profile_suggestpage
