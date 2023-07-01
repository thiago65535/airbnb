import PropTypes from "prop-types";
import React, { memo } from "react";
import RoomItem from "../room-item";
import { SectionRoomWrapper } from "./style";

const SectionRooms = memo((props) => {
  const { roomList = [] } = props;
  return (
    <SectionRoomWrapper>
    <ul className="room-list">
      {roomList?.slice(0, 8).map((item) => {
        return <RoomItem itemData={item} key={item.id}></RoomItem>;
      })}
    </ul>
    </SectionRoomWrapper>
  );
});

SectionRooms.propTypes = {
  roomList: PropTypes.array,
};

export default SectionRooms;
