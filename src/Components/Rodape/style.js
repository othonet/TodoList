import styled from 'styled-components';

export const Footer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -50%;
    height: 50px;
    width: 100%;
    position: fixed;
    bottom: 0;

    background: rgb(61,50,77);
    background: -moz-linear-gradient(90deg, rgba(61,50,77,1) 0%, rgba(129,60,60,1) 100%);
    background: -webkit-linear-gradient(90deg, rgba(61,50,77,1) 0%, rgba(129,60,60,1) 100%);
    background: linear-gradient(90deg, rgba(61,50,77,1) 0%, rgba(129,60,60,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3d324d",endColorstr="#813c3c",GradientType=1);

    small{
        color: #FFF;
        font-size: 16px;
    }

`;