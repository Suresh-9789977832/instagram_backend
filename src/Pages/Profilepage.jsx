import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Usercontext } from '../Components/Context'
import axios from 'axios';
import env from '../env'
import { Form, useParams } from 'react-router-dom'

function Profilepage() {

    const { userdata, logout,user } = useContext(Usercontext)
    const [userpost, setuserpost] = useState([])
    const params = useParams()
    const [accountuser,setaccountuser]=useState({})
    const token = sessionStorage.getItem("token")
    const [check,setcheck]=useState({})

    useEffect(() => {
      
        const getuser = async () => {
            try {
                let res = await axios.get(`${env.BASE_URL}/user/refreshuser/${token}`)
                setaccountuser(res.data)
            } catch (error) {
                if (error?.response?.status == 401) {
                  logout()
                }
                if (error?.response?.status === 500) {
                    logout()
                }if (error?.response?.status == 498) {
                    logout()
                  }
            }
        } 
        getuser()
}, [check])


    useEffect(() => {
        const { id,token } = params
        const getdata = async() => {
            try {
                const res = await axios.get(`${env.BASE_URL}/post/getalluserposts/${token}/${id}`)
               setuserpost(res.data)
               
            } catch (error) {
                if (error?.response?.status === 401) {
                    logout
                }
            } 
        }
        getdata()
      
    }, [])


   
    
console.log()

    const imageupload = async(e) => {
       try {
           const file = e.target.files[0]
           const data = new FormData()
           data.append("file", file)
           let res = await axios.post(`${env.BASE_URL}/user/singleupload/${token}`, data, { headers: { "Content-Type": "multipart/form-data" } })
           setcheck(res.data.newuser)
       } catch (error) {
        if (error?.response?.status == 500) {
            console.log(error)
        }
       }
    }

    return (
        
        
      <div className="grid grid-cols-[1fr_7fr] max-3lg:grid-cols-[1fr_10fr] max-3xl:grid-cols-[1fr_5fr] max-3sm:grid-cols-[7fr]">
          <div className='border max-3sm:hidden'>
          <Navbar />
          </div>
          <div className='flex  flex-col items-center h-full w-full mt-5'>
          <div className='flex justify-center gap-10'>
                    <div>

                        

                        {
                            userpost._id ==accountuser.id ?
                                
                                <label>
                                    <input type='file' className='hidden' multiple onChange={imageupload} />

                                    {Object.keys(check).length === 0 && check.constructor === Object ? <img src={'https://instagram-g348.onrender.com/' + userpost?.profilepicurl} className=' rounded-full  w-48 h-48 max-3sm:w-28 max-3sm:h-28 object-cover' />:
                                <img src= { 'https://instagram-g348.onrender.com/'+ check?.profilepicurl} className=' rounded-full  w-48 h-48 max-3sm:w-28 max-3sm:h-28 object-cover'/>}
                                </label>
                                :
                                <lable>
                              <img src={'https://instagram-g348.onrender.com/'+userpost?.profilepicurl } className=' rounded-full  w-48 h-48 max-3sm:w-28 max-3sm:h-28 object-cover'/>
                                </lable>
                        }
              </div>
              <div className='flex flex-col mx-10 gap-4 max-3sm:gap-0 max-sm:mx-0'>
              <div className='flex gap-4 items-center'>
                            <span className='max-3sm:text-sm'>{userpost.username}</span>
                  <span><button className="bg-gray-300 p-2 rounded-xl max-3sm:text-sm">Edit profile</button></span>
                  </div>
                  
                    
                  <div className='flex gap-8 max-3sm:hidden'>
                            <span><span className="font-bold">{userpost?.posts?.length}</span> Posts</span>
                      <span><span className="font-bold">{userpost?.followers?.length}</span> Followers</span>
                      <span><span className="font-bold">{userpost?.following?.length}</span> Following</span>
                  </div>

                  <div>
                      <div className=" font-bold mb-3 max-3sm:text-sm">{userpost.fullname}</div>
                      <div className='bg-gray-300 rounded-xl py-2 px-1 inline max-3sm:text-sm'>@{userdata.username}</div>
                  </div>

              </div>

              </div>
              <div className='mx-80  max-3xl:mx-32 max-3lg:mx-2  max-3sm:mt-5'>
                  <div className=' border-t hidden max-3sm:flex'></div>
              <div className='hidden gap-8 max-3sm:flex max-3sm:justify-center max-3sm:items-center mt-2 max-3sm:gap-20'>
                      <span><span className="font-bold flex justify-center">{userpost?.posts?.length}</span> Posts</span>
                        <span><span className="font-bold flex justify-center">{userpost?.following?.length}</span>Following</span>
                      <span><span className="font-bold flex justify-center">{userpost?.followers?.length}</span> Followers</span>
                  </div>
              <div className='flex mt-16  h-auto  justify-center  border-t max-3sm:mt-3'>
                  <div className='flex gap-10 max-3sm:gap-20'>
                      <div className='flex items-center py-4 border-t-2 border-black'>
                              <span>
                              <svg aria-label="" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="15" role="img" viewBox="0 0 24 24" width="20"><title></title><rect fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="18" x="3" y="3"></rect><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="9.015" x2="9.015" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="14.985" x2="14.985" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="9.015" y2="9.015"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="14.985" y2="14.985"></line></svg>
                          </span>
                          <span>POSTS</span>
                      </div>
                      <div className='flex items-center text-gray-500'>
                              <span>
                              <svg aria-label="" class="x1lliihq x1n2onr6 x1roi4f4" fill="currentColor" height="15" role="img" viewBox="0 0 24 24" width="20"><title></title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                          </span>
                          <span>SAVED</span>
                      </div>
                      <div className='flex items-center text-gray-500'>
                              <span>
                              <svg aria-label="" class="x1lliihq x1n2onr6 x1roi4f4" fill="currentColor" height="15" role="img" viewBox="0 0 24 24" width="20"><title></title><path d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><circle cx="12.072" cy="11.075" fill="none" r="3.556" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle></svg>
                          </span>
                          <span>TAGGED</span>
                      </div>
                  </div>
              </div>
                  <div className='grid grid-cols-3 gap-4'>
                        {userpost?.posts?.map((e, i) => (
                            <img key={i} src={'https://instagram-g348.onrender.com/' + e.posts} className='w-96 h-80 object-cover max-3sm:w-60  max-3sm:h-48' />
                      ))}
              </div>
              </div>
          </div>
         
         
          
      </div>
      
  )
}

export default Profilepage
