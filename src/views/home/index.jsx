import React, { memo, useEffect } from 'react'
import hyRequest from '@/services'
import { useState } from 'react'
import {HomeWrapper} from './style'
import HomeBanner from './c-cpns/home-banner'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchGoodPriceInfoAction } from '@/store/modules/home'
const Home = memo(() => {
  const {goodPriceInfo} = useSelector((state) => ({
    goodPriceInfo:state.home.goodPriceInfo
  }),shallowEqual)


  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchGoodPriceInfoAction())
  },[dispatch])


  return (
    <HomeWrapper>
        <HomeBanner/>
        <div className="content">
            {goodPriceInfo.title}
            <div className="section">
              <div className="title"></div>
              <div className="content"></div>
            </div>
        </div>
    </HomeWrapper>
  )
})

export default Home
