
import React, { useContext, useEffect, useState } from 'react'
import env from '../env';
import axios from 'axios'
import { Usercontext } from '../Components/Context'
import Loader from '../Loader';

function Button({ id, final }) {

  const { userdata, user,setuser} = useContext(Usercontext)
  let token = sessionStorage.getItem('token')
  const [lastvalue,setlastvalue]=useState('')
  const [followloader, setfollowloader] = useState(false)
  const [unloader, setunloader] = useState(false) 


  
    useEffect(() => {
      const getdata =async () => {
          try {
            let res = await axios.get(`${env.BASE_URL}/user/${userdata._id || userdata.id }`)
            setuser(res.data.data)
          } catch (error) {
              console.log(error)
          }
      }
      getdata()
    }, [])
  
  
  

  



  const handlefollow = async (id) => {
    try {   
      setfollowloader(true)
      let res = await axios.patch(`${env.BASE_URL}/user/followinguser/${token}/${id}`)
      if (res.status == 200) {
        setuser(res.data.final)
        setfollowloader(false)
      }
          } catch (error) {
            if (error?.response?.status === 401) {
              logout
            }
            if (error?.response?.status === 498) {
              logout  
            }
          }
  }



    const handleunfollow = async (id)=> {
      try {
        setunloader(true)
        let user = (await axios.patch(`${env.BASE_URL}/user/unfollowuser/${token}/${id}`))
        if (user.status == 200) {
          setuser(user.data.final)
          setunloader(false)
        }
          } catch (error) {
            if (error?.response?.status === 401) {
              logout
            }
            if (error?.response?.status === 498) {
              logout  
            }
          }
  }

    return <>
           {user?.following?.includes(id) ?
        <button className='  text-red-500 font-semibold' onClick={() => handleunfollow(id)}>{unloader?<Loader/>:"Following"}</button>
        :
        <button className=' text-darkblue font-semibold' onClick={() =>handlefollow(id)}>{followloader?<Loader/>:"Follow"}</button>
      }
    </>
}

export default Button
