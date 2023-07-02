import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { DetailWrapper } from './style'
import DetailPictures from './c-cpns/detail-pictures'

const Detail = memo(() => {

  return (
    <DetailWrapper>
      <DetailPictures/>
    </DetailWrapper>
  )
})
 
export default Detail
