import PropTypes from "prop-types";
import React, { memo } from "react";
import { PaginationWrapper } from "./style";
import { Pagination } from "@mui/material";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { changeCurrentPageAction, fetchRoomListAction } from "@/store/modules/entire/createActions";

const EntirePagination = memo((props) => {
  const { totalCount, currentPage, roomList } = useSelector((state) => ({
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
    roomList: state.entire.roomList,
  }),shallowEqual);
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20
  const totalPage = Math.ceil(totalCount / 20)

  const dispatch = useDispatch()
  function handleChange(event,pageNumber){
    window.scrollTo(0,0)
    //更新页码
    dispatch(changeCurrentPageAction(pageNumber-1))
    dispatch(fetchRoomListAction())
  }


  return (
    <PaginationWrapper>
      {!!roomList.length && (
        <div className="info">
          <Pagination count={totalPage}  onChange={handleChange}/>
          <div className="desc">
            第{startCount}-{endCount}个房源，共超过 {totalCount} 房源
          </div>
        </div>
      )}
    </PaginationWrapper>
  );
});

EntirePagination.propTypes = {};

export default EntirePagination;
