import React from 'react'
import { Buzz } from '../../typings'

interface Props {
    buzz: Buzz
}

function BuzzC({ buzz }: Props) {
  return (
    <div>
        <div>
            <img src={buzz.profileImg} alt=""></img>
        </div>
    </div>
  )
}

export default Buzz