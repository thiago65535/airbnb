import styled from "styled-components";

export const EntireRoomsWrapper = styled.div`
position: relative;
padding: 40px 20px;
.title{
    font-size: 22px;
    color: #222;
    font-weight: 700;
    margin:0 0 10px 10px;
}
  .list {
    display: flex;
    flex-wrap: wrap;
    cursor: pointer;
  }
  > .cover{
    position: absolute;
    top:0;
    left:0;
    right: 0;
    bottom: 0;
    background-color: rgba(255,255,255,.8);
    z-index: 99;
  }
`;
