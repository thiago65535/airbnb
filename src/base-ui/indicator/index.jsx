import PropTypes from "prop-types";
import React, { memo, useEffect, useRef, useState } from "react";
import { IndicatorWrapper } from "./style";

const Indicator = memo((props) => {
  const { selectIndex } = props;
  const containerRef = useRef();

  useEffect(() => {
    const selectItemEl = containerRef.current.children[selectIndex];
    const selectItemELOffsetLeft = selectItemEl.offsetLeft;
    const selectItemWidth = selectItemEl.clientWidth;
    const contentWidth = containerRef.current.clientWidth;
    const contentScroll = containerRef.current.scrollWidth;
    let distance =
      selectItemELOffsetLeft + selectItemWidth * 0.5 - contentWidth * 0.5;
    let maxScorllWidth = contentScroll - contentWidth;
    console.log(selectItemELOffsetLeft, selectItemWidth, contentWidth);
    if (distance < 0) distance = 0;
    if (distance > maxScorllWidth) distance = maxScorllWidth;

    containerRef.current.style.transform = `translate(${-distance}px)`;
  }, [selectIndex]);

  return (
    <IndicatorWrapper>
      <div className="i-content" ref={containerRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  );
});

Indicator.propTypes = {
  selectIndex: PropTypes.number,
};

export default Indicator;
