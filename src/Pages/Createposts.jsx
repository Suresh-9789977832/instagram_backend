import React, { useContext, useState } from 'react'
import axios from 'axios'
import env from '../env'
import { Usercontext } from '../Components/Context'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import Loader from '../Loader'
import { useEffect } from 'react';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { imgDB } from '../Firebase/Firebase';
import { v4 } from 'uuid';


function Createposts() {

  
  const [desc, setdesc] = useState('')
  const [posts, setposts] = useState('')
  const [loader, setloader] = useState(false)
  const [field,setfield]=useState(false)

  
  
  const { logout } = useContext(Usercontext)
  const navigate=useNavigate()


  useEffect(() => {
    let truefield = desc.length > 0 && posts.length > 0
    setfield(truefield)
  },[desc,posts])


 



  const handlepost = async () => {
    const id = sessionStorage.getItem("token")
    try {
      setloader(true)
      const res = await axios.post(`${env.BASE_URL}/post/createpost/${id}`, { posts:posts, desc })
      if (res.status === 201) {
        setloader(false)
        toast.success(res.data.message)
        setdesc("")
        setposts("")
        navigate('/index')
      }
    } catch (error) {
      if (error.response.status === 401) {
        logout
      }
    }
  }


  
  const imageupload = async (e) => {
    try {
      const imgs = ref(imgDB, `Imgs/${v4()}`)
      uploadBytes(imgs, e.target.files[0]).then(data => {
        getDownloadURL(data.ref).then(val => {
         setposts(val)
        })
      })
    } catch (error) {
      console.log(error)
    }}
    


  

    
  return (
    <div>
       <div className="flex h-screen w-full  items-center flex-col my-10 max-3sm:p-2 ">
        <div className="flex flex-col border border-gray-300 h-4/4  bg-transparent">
            <div className="flex items-center pt-10 flex-col ">
                      <h1 className=' text-3xl'>Create post</h1><br/>

                      <textarea className='mx-2' onChange={(e)=>setdesc(e.target.value)}/><br/>

              
            <label className='flex justify-center gap-2 border p-8 rounded-2xl bg-transparent text-2xl text-gray-600 cursor-pointer'>
            <input type='file' multiple onChange={imageupload} className='hidden'/>
              upload
          </label>
            

                   
        </div>
    
          <div className='flex justify-center my-10 flex-col'>
            
            {
              posts.length === 0 ? <img />
                :
                <img  src={posts} className=' w-54  h-56 px-5 object-cover' />
            }
               
            {
              field ? <button className='mt-5 bg-gray-500 text-white mx-2 rounded-md cursor-pointer'
                onClick={handlepost}  >{loader ? <Loader /> : "Post"}</button>
                :
                <button className='mt-5 bg-gray-500 text-white mx-2 rounded-md cursor-pointer' disabled
                  onClick={handlepost}  >{loader ? <Loader /> : "Post"}</button>
            }

                  </div>
                  
                  <div>
                  </div>


      </div>

           
        </div>
    </div>
  )
}

export default Createposts
