import PropTypes from "prop-types";
import React, { memo, useEffect, useRef, useState } from "react";
import { ScrollViewWrapper } from "./style";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";

const ScrollView = memo((props) => {
  const [showRight, setShowRight] = useState(false);
  const [showLeft, setShowLeft] = useState(false);
  const [posIndex, setPosIndex] = useState(0);
  const totalDistanceRef = useRef();
  const scrollContentRef = useRef();

  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth;
    const clientWidth = scrollContentRef.current.clientWidth;
    const totalDistance = scrollWidth - clientWidth;
    totalDistanceRef.current = totalDistance;
    setShowRight(totalDistance > 0);
  }, [props.children]);

  function controlClickHandle(isRight) {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1;
    const newEL = scrollContentRef.current.children[newIndex];
    const newOffsetLeft = newEL.offsetLeft;
    console.log(newIndex, newEL.offsetLeft);
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`;
    setPosIndex(newIndex);
    //是否继续显示右边的按钮
    setShowRight(totalDistanceRef.current > newOffsetLeft);
    // 滚动数值大于0 说明超出左边 显示左边按钮
    setShowLeft(newOffsetLeft > 0);
  }
  return (
    <ScrollViewWrapper>
      {showLeft && (
        <div className="control left" onClick={(e) => controlClickHandle(false)}>
            <IconArrowLeft/>
        </div>
      )}
      {showRight && (
        <div className="control right" onClick={(e) => controlClickHandle(true)}>
          <IconArrowRight/>
        </div>
      )}
      <div className="scroll">
        <div className="scrollview-slot" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
     
    </ScrollViewWrapper>
  );
});

ScrollView.propTypes = {};

export default ScrollView;
