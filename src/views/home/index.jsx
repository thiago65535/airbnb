import React, { memo, useEffect } from "react";
import { Button } from "antd";

import { HomeWrapper } from "./style";
import HomeBanner from "./c-cpns/home-banner";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { fetchGoodPriceInfoAction } from "@/store/modules/home";
import HomeSectionV1 from "./c-cpns/home-section-v1";

import HomeSectionV2 from "./c-cpns/home-section-v2";
import { isEmptyO } from "@/utils";
const Home = memo(() => {
  const { goodPriceInfo, highScoreInfo, discountInfo,hotRecommendInfo } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      hotRecommendInfo:state.home.hotRecommendInfo
    }),
    shallowEqual
  );
  console.log(highScoreInfo)
  const dispatch = useDispatch(); 
  useEffect(() => {
    dispatch(fetchGoodPriceInfoAction());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {isEmptyO(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
        {isEmptyO(hotRecommendInfo) && <HomeSectionV2 infoData={hotRecommendInfo} />} 
        {isEmptyO(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />} 
        {isEmptyO(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
      </div>

      <Button type="primary">Button</Button>
    </HomeWrapper>
  );
});

export default Home;
