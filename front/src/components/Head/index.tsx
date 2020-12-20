import React from 'react';
import { HeadSection, Container, Content, SubHeadSection, SubHeadContainer, SubHeadContent } from './styles';
import ServerImage from '../../assets/home_background.svg';
import Server2Image from '../../assets/calls.svg';


const Head: React.FC = () => {
    return (
        <>
        <HeadSection>
            <Container>
                <Content>
                    <h1>Features</h1>
                    <p>
                        Check out the features of Loruki that separate us from the competition
                    </p>
                </Content>
                <img src={ServerImage} alt="Server"/>
            </Container>
        </HeadSection>
        <SubHeadSection>
            <SubHeadContainer>
                <SubHeadContent>
                <h1>The Loruki Platform</h1>
                    <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor cupiditate dignissimos temporibus perspiciatis quae! Suscipit qui, consectetur ea consequatur, doloribus repellendus quasi, aut corporis nam alias culpa. Nostrum, inventore accusantium!
                    </p>
                </SubHeadContent>
                <img src={Server2Image} alt="Server"/>
            </SubHeadContainer>
        </SubHeadSection>
        </>            
    )
}

export default Head;
