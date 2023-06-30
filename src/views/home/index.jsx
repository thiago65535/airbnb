import React, { memo, useEffect } from 'react'
import hyRequest from '@/services'
import { useState } from 'react'
import {HomeWrapper} from './style'
import HomeBanner from './c-cpns/home-banner'
const Home = memo(() => {
  
  return (
    <HomeWrapper>
        <HomeBanner/>
    </HomeWrapper>
  )
})

export default Home
