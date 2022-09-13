import React, { useState } from 'react'
import { useSession } from 'next-auth/react'

// icons
import { CalendarDaysIcon } from '@heroicons/react/24/outline'
import { FaceSmileIcon } from '@heroicons/react/24/outline'
import { ArchiveBoxArrowDownIcon } from '@heroicons/react/24/outline'
import { PhotoIcon } from '@heroicons/react/24/outline'
import { CircleStackIcon } from '@heroicons/react/24/outline'

function BuzzBox() {

  // Enforce a type (it will infer based on given value)
  const [input, setInput] = useState<string>('')

  
  const { data: session } = useSession()
  const [imageURLBoxIsOpen, setImageURLBoxIsOpen] = useState<boolean>(false)

  return (
    <div className='flex space-x-2 p-5'>
        <img 
          className='h-14 w-14 object-cover rounded-full mt-4'        
          src={session?.user?.image || "https://links.papareact.com/gll" }
          alt="" 
        />

        <div className='flex flex-1 items-center pl-2'>
          <form className='flex flex-1 flex-col'>
            <input 
              value={input}
              // Updates and rerenders what the user types
              onChange={(e) => setInput(e.target.value)}
              type="text" 
              placeholder="What's on your mind?" 
              className='h-24 w-full text-xl outline-none placeholder:text-xl' />
            <div className='flex items-center'>
              <div className='flex space-x-2 text-buzz flex-1'>
                <PhotoIcon 
                  onClick={() => setImageURLBoxIsOpen(!imageURLBoxIsOpen)}
                  className='h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150' />
                <CircleStackIcon className='h-5 w-5' />
                <FaceSmileIcon className='h-5 w-5' />
                <CalendarDaysIcon className='h-5 w-5' />
                <ArchiveBoxArrowDownIcon className='h-5 w-5' />
              </div>

              <button
                // IF input is blank, the button will be disabled OR if not logged in
                disabled={!input || !session} 
                className='bg-buzz px-5 py-2 font-bold text-white rounded-full disabled:opacity-40'>Buzz</button>
            </div>

            {imageURLBoxIsOpen && (
              <form className='mt-5 flex rounded-lg bg-buzz/80 py-2 px-4'>
                <input 
                className='flex-1 bg-transparent p-2 text-black outline-none placeholder:text-black'
                type="text"
                placeholder='Enter Image URL' />
                <button className='font-bold text-black'>Add Image</button>
              </form>
            )}
          </form>
        </div>
    </div>
  )
}

export default BuzzBox