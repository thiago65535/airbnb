import styled from "styled-components";

export const PictureBrowerWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: #555;
  display: flex;
  flex-direction: column;
  > .top {
    position: relative;
    height: 86px;
    border: 1px solid red;
    .close-btn {
      position: absolute;
      top: 15px;
      right: 25px;
      cursor: pointer;
    }
  }

  .slider {
    flex: 1;
    display: flex;
    justify-content: center;
    //position: relative;
    .container {
      position: relative;
      height: 100%;
      overflow: hidden;
      width: 100% ;
      max-height: 105vh ;
      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        height: 100%;
        user-select: none;
      }

      .pic-enter{
        transform: translateX(${props=>props.isNext ?"100%":"-100%"});
        opacity: 0;
      }
      .pic-enter-active{
        transform: translate(0);
        opacity: 1;
        transition: all 200ms ease;
      }

      .pic-exit{
        opacity: 1;
      }
      .pic-exit-active{
        opacity: 0;
      }

    }

    .control {
      position: absolute;
      z-index: 1;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: flex;
      justify-content: space-between;
      color: #fff;
      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        cursor: pointer;
      }
    }
  }
  .preview {
    height: 100px;
    display: flex;
    margin-top: 10px;
    justify-content: center;
  }
`;
