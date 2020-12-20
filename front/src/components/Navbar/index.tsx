import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Container, Logo } from './styles';
import logo from '../../assets/logo.svg';


const Navbar: React.FC = () => {
    return (
        <Container>
            <Logo>
                <img src={logo} alt="VxTel"/>
                <h1>VxTel</h1>
            </Logo>
            <a href="https://github.com/jonashenrique90/VxTel" target="blank">
                <FaGithub size={30} color="#fff"></FaGithub>
            </a>
        </Container>
    )
}

export default Navbar;
