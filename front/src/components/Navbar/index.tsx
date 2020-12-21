import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Container, Logo } from './styles';
import { MdPhoneIphone } from 'react-icons/md';


const Navbar: React.FC = () => {
    return (
        <Container>
            <Logo>
                <MdPhoneIphone size={25} color="#2FB86E"></MdPhoneIphone>
                <h1>VxTel</h1>
            </Logo>
            <a href="https://github.com/jonashenrique90/VxTel" target="blank">
                <FaGithub size={30} color="#fff"></FaGithub>
            </a>
        </Container>
    )
}

export default Navbar;
