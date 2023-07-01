import styled from "styled-components";

export const HeaderLeftWrapper = styled.div`
    flex:1;
    color:${props => props.theme.color.primaryColor};
    .logo{
        cursor: pointer;
        margin-left: 24px;
    }
`