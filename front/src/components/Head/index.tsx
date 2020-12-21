import React from 'react';
import { HeadSection, Container, Content, SubHeadSection, SubHeadContainer, SubHeadContent } from './styles';
import home_background from '../../assets/home_background.svg';
import calls from '../../assets/calls.svg';


const Head: React.FC = () => {
    return (
        <>
        <HeadSection>
            <Container>
                <Content>
                    <h1>Ofertas</h1>
                    <p>
                        Confira todas as nossas ofertas e conheça todos os benefícios de ser nosso cliente. 
                    </p>
                </Content>
                <img src={calls} alt="Calls"/>
            </Container>
        </HeadSection>
        <SubHeadSection>
            <SubHeadContainer>
                <SubHeadContent>
                <h1>Nossos Planos</h1>
                    <p>
                    Nos planos Fale Mais você recebe uma quantidade grátis de minutos. Ou seja, se você contratou o plano Fale mais 120, poderá falar até 120 minutos grátis. Pesquise pelo plano que mais combina com você.
                    </p>
                </SubHeadContent>
                <img src={home_background} alt="Background"/>
            </SubHeadContainer>
        </SubHeadSection>
        </>            
    )
}

export default Head;
