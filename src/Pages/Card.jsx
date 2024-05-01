import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { Usercontext } from '../Components/Context'
import { Link } from 'react-router-dom'
import axios from 'axios'
import env from '../env'
import Button from './Button'


function Card({final}) {

    const [loader, setloader] = useState(false)
    const { logout, userdata } = useContext(Usercontext)

    const token= sessionStorage.getItem('token')


   
    

    return <>
      {
          final.map((e, i) => (
            <div  className='flex gap-3 flex-col cursor-pointer py-1'  key={i}>
            <div className='flex justify-between items-center'>
            <Link to={`/profile/${token}/${e._id}`} className='flex justify-between items-center'>
            <div className='flex flex-col items-center cursor-pointer pr-3'>
                  <img src={'https://instagram-g348.onrender.com/'+e.profilepicurl} className=' rounded-full  w-16 h-16 object-cover p-1 border' />
              </div>
              <div>
                  <p className=' font-semibold'>{e.username}</p>
                  <p className=' font-normal text-gray-500'>{e.fullname}</p>
              </div>
              </Link>
                      <div >
                          <Button id={e._id} final={e} />
                </div>
              </div>
              </div>
              ))
              
        } 
    </>
}

export default Card
