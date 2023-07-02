import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    .desc {
      margin-top: 16px;
    }
    .MuiPaginationItem-page{
       
        &:hover{
            text-decoration: underline;
        }
       
    }
    .MuiPaginationItem-page.Mui-selected {
      background-color: #222;
      color: #ffffff;
    }
    
  }
`;
