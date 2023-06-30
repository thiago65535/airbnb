import React, { memo, useEffect, useState } from 'react'
import { HeaderRightWrapper } from './style'
import IconGlobal from '@/assets/svg/icon_global'
import IconAvatar from '@/assets/svg/icon_avatar'
import IconMenu from '@/assets/svg/icon_menu'


const HeaderRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false);

  function profileClickHandle() {
    setShowPanel(true)
  }

  useEffect(function () {
    function windowHandleClick() {
      setShowPanel(false)
    }
    window.addEventListener("click", windowHandleClick, true)

    return () => {
      window.removeEventListener("click", windowHandleClick)
    }
  }, [])
  return (
    <HeaderRightWrapper>
      <div className='common-buttons'>
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className='btn'><IconGlobal /></span>
      </div>
      <div className='profile' onClick={profileClickHandle}>
        <IconMenu />
        <IconAvatar />

        {
          showPanel && (
            <div className='panel'>
              <div className='top'>
                <div className="register item">注册</div>
                <div className="login item">登录</div>
              </div>
              <div className="bottom">
                <div className="register item">出租房源</div>
                <div className="login item">开展体验</div>
                <div className="login item">帮助</div>
              </div>
            </div>
          )
        }
      </div>
    </HeaderRightWrapper>
  )
})

export default HeaderRight