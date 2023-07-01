import React, { memo, useEffect } from "react";
import { Button } from "antd";

import { HomeWrapper } from "./style";
import HomeBanner from "./c-cpns/home-banner";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchGoodPriceInfoAction } from "@/store/modules/home";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
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
          <SectionHeader title={goodPriceInfo.title}></SectionHeader>
          <SectionRooms roomList={goodPriceInfo.list} />
        </div>
      </div>

      <Button type="primary">Button</Button>
    </HomeWrapper>
  );
});

export default Home;
