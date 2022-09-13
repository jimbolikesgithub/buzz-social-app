import React from 'react'

// icons
import { EyeIcon } from '@heroicons/react/24/outline'

// Third Party Libraries
import { TwitterTimelineEmbed } from 'react-twitter-embed';

function Widgets() {

  return (
    <div className='col-span-2 mt-2 px-2 hidden lg:inline'>
        {/* Search */}
        <div className='mt-2 flex items-center space-x-2 bg-gray-100 p-3 rounded-full'>
            <EyeIcon className='h-5 w-5 text-gray-400' />
            <input 
                type="text" 
                placeholder='Search Buzz' 
                className='flex-1 bg-transparent outline-none'
            />
        </div>

        <TwitterTimelineEmbed
            sourceType="profile"
            screenName="SonySantaMonica"
            options={{height: 1000}}
        />
         
    </div>
  )
}

export default Widgets