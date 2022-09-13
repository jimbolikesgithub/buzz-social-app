import React from 'react'
import { Buzz } from '../../typings'

// Imports


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
                </div>
            </div>
        </div>
    </div>
  )
}

export default BuzzComponent