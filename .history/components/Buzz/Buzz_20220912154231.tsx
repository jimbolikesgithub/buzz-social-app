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
import { useSession } from 'next-auth/react'

interface Props {
    buzz: Buzz
}

function BuzzComponent({ buzz }: Props) {
  const [comments, setComments] = useState<Comment[]>([])
  const [commentBoxVisible, setCommentBoxVisible] = useState<boolean>(false)
  const [input, setInput] = useState<string>('')
  const { data: session } = useSession()
  
  const refreshComments = async () => {
    const comments: Comment[] = await fetchComments(buzz._id)
    setComments(comments);
  }

  useEffect(() => {
    refreshComments();
  }, [])

  const handleSubmit = (e.Reac) => {

  }

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
            <div 
                 // Open / Close
                 onClick={() => session && setCommentBoxVisible(!commentBoxVisible)}
                className='flex cursor-pointer items-center space-x-3 text-gray-400'>
                <ChatBubbleLeftIcon 
                    className='h-5 w-5' 
                />
                <p>{comments.length}</p>
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
        {commentBoxVisible && (
            <form
                onSubmit={handleSubmit} 
                className='mt-3 flex space-x-3'>
                <input 
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className='flex-1 rounded-lg bg-gray-100 p-2 outline-none' type="text" placeholder="Write a comment"/>
                <button
                    // disable IF no input
                    disabled={!input}
                    type="submit"
                    onClick={handleSubmit}
                    className='text-buzz disabled:text-gray-200'>Post
                </button>
            </form>
        )}

        {comments?.length > 0 && (
            <div className='my-2 mt-5 max-h-44 space-y-5 overflow-y-scroll border-t border-gray-100 p-5'>
                {comments.map((comment) => (
                    <div key={comment._id} className="relative flex space-x-2">
                        <hr className='absolute left-5 top-10 h-8 border-x border-buzz/30' />
                        <img src={comment.profileImg} className="mt-2 h-7 w-7 object-cover rounded-full" alt="" />
                        <div>
                            <div className='flex items-center space-x-1'>
                                <p className='mr-1 font-bold'>{comment.username}</p>
                                <p className='hidden text-sm text-gray-500 lg:inline'>@{comment.username.replace(/\s+/g, '').toLowerCase()} ∙ </p>

                                <ReactTimeAgo 
                                    className='text-sm text-gray-500'
                                    date={comment._createdAt}
                                />
                            </div>
                            <p>{comment.comment}</p>
                        </div>
                    </div>
                ))}
            </div>
        )}
    </div>
  )
}

export default BuzzComponent