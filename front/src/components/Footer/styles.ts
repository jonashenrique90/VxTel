import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterSection = styled.footer`
    width: 100%;
    max-width: 110rem;
    /* padding: 0 40px; */
    height: 100%;
    margin-top: 40px;
    margin: 0 auto;
    background: #2FB86E; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #2FB86E, #93f9b9); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #2FB86E, #93f9b9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    padding: 5rem 4rem;
`;

export const Container = styled.div`

`;

export const FooterText = styled.div`
    color: #312E38;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
`;

export const Social = styled.div`
    display: flex;
    @media (max-width: 710px) {
        justify-content: center;
    }

`;

export const SocialLinks = styled(Link)`
    text-decoration: none;
    margin: 0 20px;
    svg { 
        color: #312E38;
    }
`;
export const Nav = styled.nav`
    ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media (max-width: 710px) {
            flex-direction: row;
        }
    }
`;


export const Grid = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    justify-content: center;
    align-items: center;
    margin: 3rem 0;

    @media (max-width: 710px) {
        grid-template-columns: 1fr;
    }
`;

export const Links = styled(Link)`
    text-decoration: none;
    color: #312E38;
    font-size: 2rem;
    @media (max-width: 710px) {
            margin-right: 20px;
        }
`;