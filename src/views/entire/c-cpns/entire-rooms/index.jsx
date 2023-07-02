import PropTypes from "prop-types";
import React, { memo } from "react";
import { EntireRoomsWrapper } from "./style";
import RoomItem from "@/components/room-item";
import { shallowEqual, useSelector } from "react-redux";

const EntireRooms = memo((props) => {
  const { roomList ,totalCount,isLoading} = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount:state.entire.totalCount,
    isLoading:state.entire.isLoading
  }),shallowEqual);

  return (
    <EntireRoomsWrapper>
      <h2 className="title">{totalCount} 多处住所</h2>
      <div className="list">
        {roomList.map((item) => {
          return <RoomItem itemData={item} itemWidth="20%" key={item._id} />;
        })}
      </div>
      {isLoading && <div className="cover" ></div> }
    </EntireRoomsWrapper>
  );
});

EntireRooms.propTypes = {
};

export default EntireRooms;
