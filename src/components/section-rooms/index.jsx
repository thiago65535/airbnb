import PropTypes from "prop-types";
import React, { memo } from "react";
import RoomItem from "../room-item";
import { SectionRoomWrapper } from "./style";

const SectionRooms = memo((props) => {
  const { roomList = [] ,itemWidth } = props;
  return (
    <SectionRoomWrapper>
    <ul className="room-list">
      {roomList?.slice(0, 8).map((item) => {
        return <RoomItem itemData={item} key={item.id} itemWidth={itemWidth}></RoomItem>;
      })}
    </ul>
    </SectionRoomWrapper>
  );
});

SectionRooms.propTypes = {
  roomList: PropTypes.array,
  itemWidth:PropTypes.string
};

export default SectionRooms;
