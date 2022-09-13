import React from 'react'
import { Buzz } from '../../typings'

interface Props {
    buzz: Buzz
}

function Buzz({ buzz }: Props) {
  return (
    <div>
        <div>
            <img src={buzz.profileImg} alt=""></img>
        </div>
    </div>
  )
}

export default Buzz