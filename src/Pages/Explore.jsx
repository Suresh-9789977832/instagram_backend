import React, { useState } from 'react';
import Profile_suggestpage from './Profile_suggestpage';

function Explore() {


    return <>
        <div className='flex justify-center items-center overflow-x-hidden overflow-x-auto h-full flex-col max-3sm:mr-10 max-3ssm:mr-4 max-3sssm:w-96 pr-10'>
            <Profile_suggestpage show={true} />
        </div>
    </>
}

export default Explore
