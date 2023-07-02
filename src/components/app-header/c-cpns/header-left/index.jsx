import React, { memo } from 'react'
import { HeaderLeftWrapper } from './style'
import IconLogo from '@/assets/svg/icon_logo'
import { useNavigate } from 'react-router-dom'

const HeaderLeft = memo(() => {
  const navigate = useNavigate()
  function logoClickHandle(){
    navigate("/home")
  }
  return (
    <HeaderLeftWrapper color="red">
        <div className='logo' onClick={logoClickHandle}>
            <IconLogo/>
        </div>
    </HeaderLeftWrapper>
  )
})

export default HeaderLeft