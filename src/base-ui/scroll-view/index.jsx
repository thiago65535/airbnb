import PropTypes from "prop-types";
import React, { memo, useEffect, useRef, useState } from "react";
import { ScrollViewWrapper } from "./style";

const ScrollView = memo((props) => {
    const [showRight,setShowRight] = useState(false)
    const [posIndex,setPosIndex] = useState(0)
    const totalDistanceRef = useRef();
    const scrollContent = useRef();
    
    useEffect(()=>{
        const scrollWidth = scrollContent.current.scrollWidth
        const clientWidth = scrollContent.current.clientWidth
        const totalDistance = scrollWidth - clientWidth
        totalDistanceRef.current = totalDistance
        setShowRight(totalDistance>0 )
    },[props.children])

    function rightIndexClickHandle(){
      const newIndex = posIndex +1;
      const newEL = scrollContent.current.children[newIndex]
      const newOffsetLeft = newEL.offsetLeft;
      //console.log(newEL.offsetLeft)
      scrollContent.current.style.transform = `translate(-${newOffsetLeft}px)`
      setPosIndex(newIndex)
      //是否继续显示右边的按钮
      setShowRight(totalDistanceRef.current > newOffsetLeft)
    }
  return (
    <ScrollViewWrapper>
      <div>左边按钮</div>
      {showRight && <button onClick={rightIndexClickHandle}>右边按钮</button>}
      <div className="scrollview-slot" ref={scrollContent}>{props.children}</div>
    </ScrollViewWrapper>
  );
});

ScrollView.propTypes = {};

export default ScrollView;
