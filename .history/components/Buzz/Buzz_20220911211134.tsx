import React from 'react'
import { Buzz } from '../../typings'

// Imports
import ReactTimeAgo from 'react-time-ago'
import { TwitterTweetEmbed } from 'react-twitter-embed'

interface Props {
    buzz: Buzz
}

function BuzzComponent({ buzz }: Props) {
  return (
    <div>
        <div className='flex space-x-3'>
            <img 
                src={buzz.profileImg} 
                className="h-10 w-10 rounded-full object-cover" alt=""></img>

            <div>
                <div className='flex items-center space-x-1'>
                    <p className='mr-1 font-bold'>{buzz.username}</p>
                    <p className='hidden text-sm text-gray-500 sm:inline'>@{buzz.username.replace(/\s+/g, '').toLocaleLowerCase()}</p>

                    <ReactTimeAgo 
                        className='text-sm text-gray-500'
                        date={buzz._createdAt}
                    />
                </div>

                <p className='pt-1'>{buzz.text }</p>

                {buzz.image && (
                    <img src={buzz.image} alt="" className='m-5' ml-0></img>
                )}
            </div>
        </div>
    </div>
  )
}

export default BuzzComponent