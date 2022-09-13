import React, { useState } from 'react'

// icons
import { ArrowPathRoundedSquareIcon } from '@heroicons/react/24/outline'

// components
import BuzzBox from '../BuzzBox/BuzzBox'
import { Buzz } from '../../typings'
import BuzzComponent from '../../components/Buzz/Buzz'
import { fetchBuzz } from '../../utils/fetchBuzz'

interface Props {
  buzz: Buzz[]
}

function Feed({ buzz: buzzProp }: Props) {

  // State initialized with buzz's
  const [buzz, setBuzz] = useState<Buzz[]>(buzzProp)
  console.log(buzz)

  const handleRefresh = async () => {
    const refreshToast = toast

    const buzz = await fetchBuzz();
    setBuzz(buzz)
  }

  return (
    <div className='col-span-7 lg:col-span-5 border-x'>
        <div className='flex items-center justify-between'>
            <h1 className='p-5 pb-0 text-xl font-bold'>Home</h1>

            {/* Refresh Icon */}
            <ArrowPathRoundedSquareIcon 
              onClick={handleRefresh}
              className='mr-5 mt-5 h-8 w-8 cursor-pointer text-buzz transition-all duration-500 ease-out hover:rotate-180 active:scale-125' 
            />
        </div>

        {/* Tweetbox */}
        <div>
            <BuzzBox />
        </div>

        {/* Feed */}
        <div>
            {buzz.map(buzz => (
              <BuzzComponent key={buzz._id} buzz={buzz} />
            ))}
        </div>

    </div>
  )
}

export default Feed