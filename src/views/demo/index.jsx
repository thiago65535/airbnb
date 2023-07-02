import Indicator from "@/base-ui/scroll-view/indicator";
import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { DemoWrapper } from "./style";

const Demo = memo((props) => {
  const [selectIndex, setSelectIndex] = useState(0);
  function toggleClickHandle(isNext = true) {
    
    let newIndex = isNext? selectIndex+1 :selectIndex-1
  
    if(newIndex < 0) newIndex = names.length-1
    if(newIndex > names.length -1) newIndex = 0

    console.log(newIndex)
    setSelectIndex(newIndex)
  }

  const names = ["abc", "cba", "aaa", "bbb", "ccc", "ddd", "eee", "fff"];
  return (
    <DemoWrapper>
      <div className="control">
        <button onClick={(e) => toggleClickHandle(false)}>prev</button>
        <button onClick={(e) => toggleClickHandle(true)}>next</button>
      </div>
      <div className="indicator-wrapper">
        <Indicator selectIndex={selectIndex}>
          {names.map((item) => {
            return <button key={item}>{item}</button>;
          })}
        </Indicator>
      </div>
    </DemoWrapper>
  );
});

Demo.propTypes = {};

export default Demo;
