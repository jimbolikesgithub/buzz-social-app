import React, { SVGProps } from 'react'

// interface is a way of defining a type
interface Props {
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
    title: string
    onClick?: () => {}
}

function SidebarRow({Icon, title, onClick}:Props) {
  return (
    // () => onClick?.() <--- optional chaining
    // ONLY execute if there
    <div onClick={() => onClick?.()} className='group flex max-w-fit items-center space-x-2 px-4 py-3 rounded-full hover:bg-gray-100 transition-all duration-200'>
        <Icon className='h-6 w-6'/>
        <p className='hidden group-hover:text-buzz md:inline-flex text-base font-light lg:text-xl'>{title}</p>
    </div>
  )
}

export default SidebarRow