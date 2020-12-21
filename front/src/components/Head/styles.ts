import styled from 'styled-components';


export const HeadSection = styled.section`
    width: 100%;
    padding: 0 40px;
    height: 400px;
    background-color: #312E38;
    color: #fff;
    max-width: 110rem;
    margin: 0 auto;
`;


export const Container = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 4fr 3fr;
    gap: 30px;
    justify-content: center;
    align-items: center;
    
    img { 
        width: 350px;
        justify-self: flex-end;
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        gap: 10px;
        img {
            width: 250px;
            justify-self: center;
        }
    }
`;

export const Content = styled.div`
    h1 {
        font-size: 6rem;
        font-weight: 400;
    }

    p {
        font-size: 2rem;
        margin: 20px 0;
    }

    @media (max-width: 890px) {
        text-align: center;
        margin-top: 40px;
        h1 {
            font-size: 4rem;
        }
        p {
            font-size: 1.5rem;
        }
    }
    @media (max-width: 890px) {
        text-align: center;
        margin-top: 10px;
    }
`;

export const SubHeadContainer = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 4fr 3fr;
    gap: 30px;
    justify-content: center;
    align-items: center;
    
    img {
        width: 400px;
        justify-self: flex-end;
    }

    @media (max-width: 750px) {
        grid-template-columns: 1fr;
        img {
            width: 300px;
            justify-self: center;
        }
    }
    @media (max-width: 495px) {
        img {
            display: none;
        }
    }
`;

export const SubHeadSection = styled.div`
    width: 100%;
    padding: 0 40px;
    height: 600px;
    background-color: #F8F8F8;
    color: #fff;
    max-width: 110rem;
    margin: 0 auto;
`;

export const SubHeadContent = styled.div`
    h1 {
        font-size: 6rem;
        color: #333;
        font-weight: 400;
    }

    p {
        font-size: 2rem;
        color: #333;
        margin: 20px 0;
    }

    @media (max-width: 890px) {
        text-align: center;
        margin-top: 40px;
    }
`;  