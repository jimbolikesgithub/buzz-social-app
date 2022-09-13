import React from 'react'
import { Buzz } from '../../typings'

interface Props {
    buzz: Buzz
}

function Buzz({ buzz }: Prop) {
  return (
    <div>
        <div>
            <img src={buzz.profileImg}></img>
        </div>
    </div>
  )
}

export default Buzz