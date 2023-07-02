import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { PictureBrowerWrapper } from './style'
import IconClose from '@/assets/svg/icon-close';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import { CSSTransition ,SwitchTransition,TransitionGroup} from 'react-transition-group';

const PictureBrower = memo((props) => {
const {pictureUrls,closeClick} = props;
const [currentIndex,setCurrentIndex] = useState(0)
const [isNext, setIsNext] = useState(true)
//console.log(pictureUrls)
  useEffect(()=>{
    document.body.style.overflow = "hidden"
    return ()=>{
        document.body.style.overflow ="auto"
    }
  },[])
  function closeClickHandle(){
    if(closeClick) closeClick()
  }

  function controlClickHandle(isNext = true){
    let newIndex= isNext?currentIndex+1:currentIndex-1;
    if(newIndex<0) newIndex=pictureUrls.length-1
    if(newIndex>pictureUrls.length-1) newIndex = 0
    setCurrentIndex(newIndex)
    setIsNext(isNext)
  }
  return (
    <PictureBrowerWrapper isNext={isNext}>
        <div className="top">
            <div className="close-btn" onClick={closeClickHandle} >
               <IconClose/>
            </div>
        </div>
        <div className="slider">
            <div className="control">
                <div className="btn left" onClick={e=>controlClickHandle(false)}>
                    <IconArrowLeft width="77" height="77"/>
                </div>
                <div className="btn right" onClick={e=>controlClickHandle(true)}>
                    <IconArrowRight width="77" height="77"/>
                </div>
            </div>

            <div className="container">
                <SwitchTransition mode='in-out'>
                   <CSSTransition 
                    key={pictureUrls[currentIndex]}
                    classNames="pic"
                    timeout={200}
                   >
                        <img src={pictureUrls[currentIndex]} alt="" />
                   </CSSTransition>
                </SwitchTransition>
            </div>
        </div>
        <div className="preview"></div>
    </PictureBrowerWrapper>
  )
})

PictureBrower.propTypes = {
    pictureUrls:PropTypes.array,
    closeClick:PropTypes.func
}

export default PictureBrower