import {Link, Route, Routes } from 'react-router-dom'
import Indexpage from './Pages/Indexpage'
import Loginpage from './Pages/Loginpage'
import Signup from './Pages/Signup'
import { Toaster } from 'react-hot-toast'
import Profilepage from './Pages/Profilepage'
import { Usercontext } from './Components/Context'
import Createposts from './Pages/Createposts'
import { useContext, useEffect } from 'react'
import Explore from './Pages/Explore'
import { CiLogout } from 'react-icons/ci'
import { CgProfile } from "react-icons/cg";


function App() {
  const {userdata,logout}=useContext(Usercontext)
  const token = sessionStorage.getItem('token')
  const id = userdata?.id || userdata?._id

    

  return <>
   
    <div>
      <Toaster />
    
      {
      token &&   <div className="fixed h-16 bottom-0 z-10 bg-white text-black  shadow-sm w-full hidden px-5 justify-between items-center max-3sm:flex">
      <Link to={'/index'} className=''>
                              <svg aria-label="Home" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="22" role="img" viewBox="0 0 24 24" width="30">
                                  <title>Home</title><path d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 
                                  .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z">
          </path></svg>
        </Link>
      
      <Link to={'/explore'} className=''>
                  <svg aria-label="Explore" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="30"><title>Explore</title><polygon fill="none" points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon><polygon fill-rule="evenodd" points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"></polygon><circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle></svg>
                  </Link>

      <Link to={'/create'} className=''>
                  <svg aria-label="New post" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="30"><title>New post</title><path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line></svg>
              </Link>

              <span>
      <Link to={`/profile/${token}/${id}`} className=''><CgProfile className='h-10 w-6 text-black font-bold'/></Link>
      </span>


      <span onClick={logout}>
        <CiLogout className='h-10 w-6 text-black font-bold'/>
      </span>

      
     
    </div>
    }
    <Routes>
      <Route path='/' element={<Loginpage />} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/index' element={<Indexpage/>} />
        <Route path='/profile/:token/:id' element={<Profilepage />} />
        <Route path='/create' element={<Createposts />} />
        <Route path='/explore' element={<Explore/>} />
      </Routes>

    </div>
    

  </>
}

export default App
