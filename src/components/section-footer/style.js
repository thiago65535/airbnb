import styled from "styled-components";

export const SectionFooterWrapper = styled.div`
    margin-top:10px;
    display: flex;
   .info{
        display: flex;
        align-items: center;
        cursor: pointer;
        font-size:17px;
        color: ${props => props.color};
        font-weight: 700;
        &:hover{
            text-decoration: underline;
        }
        .text{
            padding-right: 6px;
        }
   }
`