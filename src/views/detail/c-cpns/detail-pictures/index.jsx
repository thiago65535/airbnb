import PropTypes from "prop-types";
import React, { memo } from "react";
import { DetailPictureWrapper } from "./style";
import { useSelector } from "react-redux";

const DetailPictures = memo((props) => {
  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo,
  }));

  return <DetailPictureWrapper>
    <div className="pictures">
      <div className="left">
        <div className="item">
          <img src={detailInfo?.picture_urls?.[0]} alt="" />
          <div className="cover"></div>
        </div>
      </div>
      <div className="right">
          {
            detailInfo?.picture_urls?.slice(1,5).map((item)=>{
              return (<div className="item" key={item}>
                 <img src={item} alt="" />
                 <div className="cover"></div>
              </div>)
            })
          }
      </div>
    </div>
  </DetailPictureWrapper>;
});

DetailPictures.propTypes = {};

export default DetailPictures;
