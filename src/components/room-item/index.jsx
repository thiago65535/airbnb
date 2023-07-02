import PropTypes from "prop-types";
import React, { memo, useRef, useState } from "react";
import { RoomItemWrapper } from "./style";
import { Rating } from "@mui/material";
import { Carousel } from "antd";
import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import Indicator from "@/base-ui/scroll-view/indicator";
import classNames from "classnames";
const RoomItem = memo((props) => {
  const sliderRef = useRef();
  const { itemData, itemWidth = "25%" ,itemClick} = props;
  const [selectIndex, setSelectIndex] = useState(0);
  function itemClickHandle(item){
    
      if(itemClick){
        itemClick(item)
      }
  }
  function btnClickHandle(isRight = true) {
    isRight ? sliderRef.current.next() : sliderRef.current.prev();

    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1;

    if (newIndex < 0) newIndex = itemData.picture_urls.length - 1;
    if (newIndex > itemData.picture_urls.length - 1) newIndex = 0;

    setSelectIndex(newIndex);
  }
  const pictureElement = (
    <div className="cover">
      <img src={itemData.picture_url} alt="" />
    </div>
  );
  const sliderElement = (
    <div className="slider">
      <div className="control">
        <div className="left btn" onClick={(e) => btnClickHandle(false)}>
          <IconArrowLeft width="30" height="30" />
        </div>
        <div className="right btn" onClick={(e) => btnClickHandle(true)}>
          <IconArrowRight width="30" height="30" />
        </div>
      </div>
      <div className="indicator">
        <Indicator selectIndex={selectIndex}>
          {itemData?.picture_urls?.map((item, index) => {
            return (
              <div className="dot-item"  key={index}>
                <span
                  className={classNames("dot", {
                    active: index === selectIndex,
                  })}
                 
                ></span>
              </div>
            );
          })}
        </Indicator>
      </div>
      <Carousel dots={false} ref={sliderRef}>
        {itemData?.picture_urls?.map((item) => {
          return (
            <div className="cover" key={item}>
              <img src={item} alt="" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
  return (
    <RoomItemWrapper
      verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      itemWidth={itemWidth}
      onClick={e => itemClickHandle(itemData)}
    >
      <div className="inner">
        {!itemData.picture_urls? pictureElement:sliderElement}
        <div className="desc">{itemData.verify_info.messages.join(".")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">¥ {itemData.price}</div>
        <div className="bottom">
          <Rating
            readOnly
            value={itemData?.star_rating ?? 2}
            precision={0.1}
            size="small"
            sx={{ fontSize: "12px", color: "#00848A" }}
          />
          <span className="count">{itemData?.reviews_count}</span>
          {itemData.bottom_info && (
            <span className="extra">{itemData.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </RoomItemWrapper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.object,
  itemWidth: PropTypes.string,
  itemClick:PropTypes.func
};

export default RoomItem;
