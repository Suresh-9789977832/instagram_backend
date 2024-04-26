
// import React, { useContext, useEffect, useState } from 'react'
// import env from '../env'
// import axios from 'axios'
// import { Usercontext } from '../Components/Context'

// function Button({ id, final }) {

//   const { userdata } = useContext(Usercontext)
//   let token=sessionStorage.getItem('token')
//   const [user, setuser] = useState([])
//   const [item,setitem]=useState(false)
//   const [toogle, settoogle] = useState(()=>undefined?JSON.parse(sessionStorage?.getItem(('items')))?.following==user.following:""
// )
//     // console.log()
//     // console.log(user.following)
//     useEffect(() => {
//         const getdata =async () => {
//             try {
//                 let id = userdata.id
//               let res = await axios.get(`${env.BASE_URL}/user/${id}`)
//               setuser(res.data.data)
//             } catch (error) {
//                 console.log(error)
//             }
//         }
//         getdata()
//     }, [])
    
  
//   useEffect(() => {
//     ( sessionStorage?.setItem('items', JSON.stringify(user.data)))
// console.log(true)
//   }, [item])
  

  
    
//   const handlefollow = async (id) => {
//     try {
//       settoogle(!toogle)
//       setitem(true)
//      (await axios.patch(`${env.BASE_URL}/user/followinguser/${token}/${id}`))
          
//           } catch (error) {
//             if (error?.response?.status === 401) {
//               logout
//             }
//             if (error?.response?.status === 498) {
//               logout  
//             }
//           }
//     }

  

//     const handleunfollow = async (id)=> {
//         settoogle(!toogle)
//         try {
//             let user= (await axios.patch(`${env.BASE_URL}/user/unfollowuser/${token}/${id}`))
//             setfollowingids(user.data)
//           } catch (error) {
//             if (error?.response?.status === 401) {
//               logout
//             }
//             if (error?.response?.status === 498) {
//               logout  
//             }
//           }
//   }
 


//     return <>
//            {
//                               toogle ? <button className='  text-red-500 font-semibold' onClick={()=>handleunfollow(id) }>unfollow</button>

//                                   :
//                                   <button className=' text-darkblue font-semibold' onClick={() =>handlefollow(id)}>Follow</button>
//                           }
//     </>
// }

// export default Button
