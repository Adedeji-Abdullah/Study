import React from 'react'
import Leftcomponent from './Sub-component/Leftcomponent'
import Rightcomponent from './Sub-component/Rightcomponent'

const Firstpage = () => {
  return (
    <div className='home'>
      <Leftcomponent />
      <Rightcomponent />
    </div>
  )
}

export default Firstpage
