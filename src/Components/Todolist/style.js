import styled from 'styled-components';


export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

`;


export const Header = styled.div`

    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 15px;
    height: 60px;

    h1{
        color: #FFF;
    }

    svg{
        justify-content: center;
        align-items: center;
        font-size: 16px;
        background: transparent;
        color: #34d2eb;
    }
`;

export const CorpoTodolist = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 720px;
    justify-content: center;
    text-align: center;

`;

export const Lista = styled.div`

    width: 650px;

    ul{
        padding: 15px;
        margin-bottom: 10px;
        color: #FFF;
        font-size: 30px;
    }

    li{
        list-style: none;
        color: #DDD;
        display: flex;
        justify-content: space-between;
        font-size: 26px;
        padding: 12px 20px;
        box-shadow: rgba(20,20,20,0.2) 0px 5px 10px;
        margin-bottom: 10px;
        background-color: rgba(150,150,150,0.1);
        border-radius: 5px;

    }

    button{
        background: transparent;
        border: none;
        margin-left: 50px;
    }

    svg{
        background-color: transparent;
        color: #AAA;
        font-size: 20px;

    }
    svg:hover{
        opacity: 0.7;
        color: #ff0000;
        animation: color 1s ease-in-out;
        -webkit-animation: spin 200ms ease-in-out;
        -moz-animation: spin 200ms ease-in-out;
        animation: spin 200ms ease-in-out;

    
        @-moz-keyframes spin { 
            100% { 
                -moz-transform: rotate(90deg); 
                } 
            }

        @-webkit-keyframes spin { 
            100% { 
                -webkit-transform: rotate(90deg); 
            } 
        }

        @keyframes spin { 
            100% { 
                transform: rotate(90deg); 
            } 
        }
    }

`;

export const Input = styled.div`

    display: flex;
    flex-direction: row;
    margin-bottom: 10px;

    input{
        width: 500px;
        height: 60px;
        padding: 10px 20px;
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
        border: none;
        font-weight: bold;
        font-size: 22px;
    }

    button{
        width: 150px;
        height: 60px;
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
        border: none;
        background: orangered;
        color: #FFF;
        font-size: 16px;
        transition: all .5s;
        overflow: hidden;
        position: relative;
    }

    button:hover{
        opacity: 0.8;
        background-color: #34eb3a;
    }

    button::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100%;
    background: linear-gradient(to left,rgba(174,174,174,0) 0%,rgba(255,255,255,0.4) 50%,transparent);
    transform: skew(-45deg) translateX(-100px);
    transition: all .5s;
    }

    button:hover::before{
    transform: skew(-45deg) translateX(80px);
}

    svg{
        font-size: 12px;
    }

`;

export const Msg = styled.div`
    margin-bottom: 60px;
    color: #FFF;
    padding: 15px;
    text-align: center;
    font-size: 18px;
    
`;