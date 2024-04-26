import React, { useContext } from 'react'
import { Usercontext } from '../Components/Context'

function Loading() {
    let {userdata}=useContext(Usercontext)
    return <>
        <div className='mr-28 border p-6 rounded-lg shadow-2xl bg--400'>
            <div  className='flex justify-center'>
            <span className='font-bold text-3xl text-black'>Welcome</span>
            <span className='font-bold text-3xl text-blue-600 pl-2'>{userdata.username}</span>
            </div>
            <h2 className='mt-3 font-semibold'>Click Explore and follow Someone and Make Fun</h2>
            </div>
    </>
}

export default Loading
