import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeSectionWrapperV1 } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'

const HomeSectionV1 = memo((props) => {
    const { infoData } = props
   return (
    <HomeSectionWrapperV1>
          <SectionHeader title={infoData?.title} subtitle={infoData?.subtitle}></SectionHeader>
          <SectionRooms roomList={infoData?.list} itemWidth="25%"/>

          <SectionFooter/>
    </HomeSectionWrapperV1>
  )
})

HomeSectionV1.propTypes = {
    infoData:PropTypes.object
}

export default HomeSectionV1