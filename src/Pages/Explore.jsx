import React, { useState } from 'react';
import Profile_suggestpage from './Profile_suggestpage';

function Explore() {


    return <>
        <div className='flex justify-center items-center h-full flex-col max-3ssm:mr-4 pr-10 overflow-y-scroll'>
            <Profile_suggestpage show={true} />
        </div>
    </>
}

export default Explore
