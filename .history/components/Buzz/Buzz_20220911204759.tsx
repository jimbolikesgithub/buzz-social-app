import React from 'react'

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