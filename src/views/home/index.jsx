import React, { memo, useEffect } from "react";

import { HomeWrapper } from "./style";
import HomeBanner from "./c-cpns/home-banner";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchGoodPriceInfoAction } from "@/store/modules/home";
import SectionHeader from "@/components/section-header";
import RoomItem from "@/components/room-item";
const Home = memo(() => {
  const { goodPriceInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGoodPriceInfoAction());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
       <div className="good-price">
          <SectionHeader title={goodPriceInfo.title} ></SectionHeader>
       </div>
       <ul className="room-list">
        {
          goodPriceInfo.list?.slice(0,8).map(item=>{
            return <RoomItem itemData={item} key={item.id}></RoomItem>
          })
        }
       </ul>
        <div className="section">
          <div className="title"></div>
          <div className="content"></div>
        </div>
      </div>
    </HomeWrapper>
  );
});

export default Home;
