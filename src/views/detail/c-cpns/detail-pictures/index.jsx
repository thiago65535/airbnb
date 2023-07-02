import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { DetailPictureWrapper } from "./style";
import { useSelector } from "react-redux";
import PictureBrower from "@/base-ui/picture-brower";

const DetailPictures = memo((props) => {
  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo,
  }));

  const [showBrower, setShowBrower] = useState(false);
  function showPictureBtn() {
    setShowBrower(!showBrower);
  }

  return (
    <DetailPictureWrapper>
      <div className="pictures" onClick={(e) => setShowBrower(true)}>
        <div className="left">
          <div className="item">
            <img src={detailInfo?.picture_urls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {detailInfo?.picture_urls?.slice(1, 5).map((item) => {
            return (
              <div
                className="item"
                key={item}
                
              >
                <img src={item} alt="" />
                <div className="cover"></div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="show-btn" onClick={showPictureBtn}>
        显示照片
      </div>
      {showBrower && (
        <PictureBrower
          pictureUrls={detailInfo.picture_urls}
          closeClick={(e) => setShowBrower(false)}
        />
      )}
    </DetailPictureWrapper>
  );
});

DetailPictures.propTypes = {};

export default DetailPictures;
