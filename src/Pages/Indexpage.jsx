import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar';
import Posts_statuspage from './Posts_statuspage'



function Indexpage() {






  

  return <>
    <div className=" grid  grid-cols-[1fr_7fr] max-3xl:grid-cols-[1.5fr_7fr]  max-3lg:grid-cols-[0.5fr_7fr] max-3md:grid-cols-[0.7fr_7fr] overflow-hidden">  
      <div className=' border-r-2  border-gray-300 max-3sm:border-none max-3sm:hidden'>
        <Navbar />
      </div>
      <Posts_statuspage />
    </div>
  </>
}

export default Indexpage
