import React from 'react'
import { Buzz } from '../../typings'

// Imports
import ReactTimeAgo from 'react-time-ago'

interface Props {
    buzz: Buzz
}

function BuzzComponent({ buzz }: Props) {
  return (
    <div>
        <div>
            <img 
                src={buzz.profileImg} 
                className="h-10" alt=""></img>

            <div>
                <div className='flex items-center space-x-1'>
                    <p>{buzz.username}</p>
                    <p>@{buzz.username.replace(/\s+/g, '').toLocaleLowerCase()}</p>

                    <ReactTimeAgo 
                        className='text-sm text-gray-500'
                        date={buzz._createdAt}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default BuzzComponent