import React, { useEffect, useState } from 'react'
import { Buzz, Comment } from '../../typings'

// Imports
import ReactTimeAgo from 'react-time-ago'
import { TwitterTweetEmbed } from 'react-twitter-embed'
import { fetchComments } from '../../utils/fetchComments'

// Icons
import {
    ChatBubbleLeftIcon,
    HeartIcon,
    ArrowsRightLeftIcon,
    BoltIcon,
} from '@heroicons/react/24/outline'

interface Props {
    buzz: Buzz
}

function BuzzComponent({ buzz }: Props) {

  const [comments, setComments] = useState<Comment[]>([])
  
  const refreshComments = async () => {
    const comments: Comment[] = await fetchComments(buzz._id)
    setComments(comments);
  }

  useEffect(() => {
    refreshComments();
  }, [])

  // console.log(comments)

  return (
    <div className='flex flex-col space-x-3 border-y p-5 border-gray-100'>
        <div className='flex space-x-3'>
            <img 
                src={buzz.profileImg} 
                className="h-10 w-10 rounded-full object-cover" alt=""></img>

            <div>
                <div className='flex items-center space-x-1'>
                    <p className='mr-1 font-bold'>{buzz.username}</p>
                    <p className='hidden text-sm text-gray-500 sm:inline'>@{buzz.username.replace(/\s+/g, '').toLocaleLowerCase() } ∙ </p>

                    <ReactTimeAgo 
                        className='text-sm text-gray-500'
                        date={buzz._createdAt}
                    />
                </div>

                <p className='pt-1'>{buzz.text }</p>

                {buzz.image && (
                    <img src={buzz.image} alt="" className='m-5 ml-0 mb-1 max-h-60 rounded-lg object-cover shadow-sm'></img>
                )}
            </div>
        </div>

        <div className='mt-5 flex justify-between'>
            <div className='flex cursor-pointer items-center space-x-3 text-gray-400'>
                <ChatBubbleLeftIcon className='h-5 w-5' />
                <p>5</p>
            </div>

            <div className='flex cursor-pointer items-center space-x-3 text-gray-400'>
                <ArrowsRightLeftIcon className='h-5 w-5' />
            </div>

            <div className='flex cursor-pointer items-center space-x-3 text-gray-400'>
                <HeartIcon className='h-5 w-5' />
            </div>

            <div className='flex cursor-pointer items-center space-x-3 text-gray-400'>
                <BoltIcon className='h-5 w-5' />
            </div>
        </div>

        {/* Comment Box logic */}

        {comments?.length > 0 && (
            <div>
                {comments.map((comment) => (
                    <div key={comment._id}>
                        <img src={comment.profileImg} className="h-7 w-7 object-cover rounded-full" alt="" />
                        <div>
                            <p>{comment.username}</p>
                            <p>@{comment.username.replace(/\s+/g, '')}</p>
                        </div>
                    </div>
                ))}
            </div>
        )}
    </div>
  )
}

export default BuzzComponent