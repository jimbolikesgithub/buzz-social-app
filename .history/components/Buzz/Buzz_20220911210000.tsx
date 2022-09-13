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
                <div>
                    <p>{buzz.username}</p>
                    <p>@{buzz.username.replace(/\s+/g, '').toLocaleLowerCase()}</p>

                    <TimeAgo 
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