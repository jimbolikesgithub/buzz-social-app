import React from 'react'
import Image from 'next/image'
import { signIn, useSession } from 'next-auth/react'

// icons
import { BellIcon } from '@heroicons/react/24/outline'
import { HashtagIcon } from '@heroicons/react/24/outline'
import { BookmarkIcon } from '@heroicons/react/24/outline'
import { ChartBarIcon } from '@heroicons/react/24/outline'
import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline'
import { InboxIcon } from '@heroicons/react/24/outline'
import { UserIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/24/outline'

import logo from '../../public/assets/logo/logo.png'

// components
import SidebarRow from './SidebarRow'

function Sidebar() {

  const {data: session} = useSession()
    
  return (
    <div className='col-span-2 flex flex-col items-center px-4 md:items-start'>
        <Image 
          src={logo} 
          alt='/' 
          height={50}
        />
        {/* <img className='m-3 h-10 w-10' src="https://links.papareact.com/drq"></img> */}
        <SidebarRow Icon={HomeIcon} title="Home"/>
        <SidebarRow Icon={HashtagIcon} title="Explore"/>
        <SidebarRow Icon={BellIcon} title="Notifications"/>
        <SidebarRow Icon={InboxIcon} title="Messages"/>
        <SidebarRow Icon={BookmarkIcon} title="Bookmarks"/>
        <SidebarRow Icon={ChartBarIcon} title="Lists"/>
        <SidebarRow onClick={session? signIn} Icon={UserIcon} title={session ? 'Sign out': 'Sign In'} />

        <SidebarRow Icon={ChevronDoubleDownIcon} title="More"/>
    </div>
  )
}

export default Sidebar