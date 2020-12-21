import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    max-width: 110rem;
    background: #312E38;
    color: #fff;
    height: 7rem;
    margin: 0 auto;
    overflow: auto;
    padding: 0 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 500px) {
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

`;

export const Logo = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    img {
        fill: #2FB86E;
    }
    h1 {
        margin-left: 5px;
        color: #2FB86E;
    }

    @media (max-width: 500px) {
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

`;

export const Nav = styled.nav`
    ul {
        list-style-type: none;
        display: flex;
    }

    @media (max-width: 500px) {
        padding: 20px;
        background: #2FB86E;
        border-radius: 5px;
    }  
`;