import React from 'react'
import AppSection from './AppSection/AppSection'
import Clock from './clock/Clock'
import NotificationBar from './notificationBar/NotificationBar'

function TabLayout() {
  return (
    <div className="border-black text-white bg-no-repeat bg-cover xs:bg-center brightness-[0.85] drop-shadow-xl shadow-2xl md:bg-[url('/src/assets/tabWallpapper.jpg')] xs:bg-[url('/src/assets/tabWallpapper.jpg')] flex-1 flex flex-col gap-2 rounded-2xl">
      <NotificationBar/>
      <Clock/>
      <AppSection/>
    </div>
  )
}

export default TabLayout