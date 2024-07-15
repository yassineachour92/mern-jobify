import React, { useContext } from 'react'
import '../pages/style/smallSiderBar.css'
import { useDashBoardContext } from '../pages/DashBoard'


const SmallSidebar = () => {
  const data=useDashBoardContext()
  return (
    <div className='main'>
      smallSiderbar
    </div>
  )
}


export default SmallSidebar
