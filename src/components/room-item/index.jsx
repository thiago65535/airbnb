import PropTypes from "prop-types";
import React, { memo } from "react";
import { RoomItemWrapper } from "./style";
import { Rating } from "@mui/material";

const RoomItem = memo((props) => {
  const { itemData, itemWidth = "25%"} = props;

  return (
    <RoomItemWrapper
      verifyColor={itemData?.verify_info?.text_color || "#39576a"}
      itemWidth={itemWidth} >
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div>
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
  itemWidth:PropTypes.string
};

export default RoomItem;
