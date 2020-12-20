import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    max-width: 110rem;
    background: #312E38;
    color: #fff;
    margin: 0 auto;
    overflow: auto;
    padding: 0 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    form {
        flex: 1;
    /* margin-top: 380px auto; */
    /* margin-bottom: 80px; */
        padding: 64px;
    /* max-width: 730px; */
        /* background: #FFF; */
        border-radius: 8px;
        display: flex;
        flex-direction: column;
    }

    form h1 {
        font-size: 36px;
        color: #2FB86E;
    }

    form fieldset {
        margin-top: 64px;
        min-inline-size: auto;
        border: 0;
    }

    form legend {
        width: 100%;
        color: #2FB86E;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 40px;
    }

    form legend h2 {
        
        font-size: 24px;
    }

    form legend span {
        font-size: 14px;
        font-weight: normal;
        color: #2FB86E;
    }

    form .field-group {
        flex: 1;
        display: flex;
    }

    form .field {
        max-width: 300px;
        flex: 1;
        display: flex;
        flex-direction: column;
        margin-bottom: 24px;
    }

    form .field input[type=text],
    form .field input[type=email],
    form .field input[type=number] {
        flex: 1;
        background: #F0F0F5;
        border-radius: 8px;
        border: 0;
        padding: 16px 24px;
        font-size: 16px;
        color: #282838;
    }

    form .field select {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        flex: 1;
        background: #F0F0F5;
        border-radius: 8px;
        border: 0;
        padding: 16px 24px;
        font-size: 16px;
        color: #6C6C80;
    }

    form .field input::placeholder {
        color: #A0A0B2;
    }

    form .field label {
        font-size: 14px;
        color: #2FB86E;
        margin-bottom: 8px;
        margin-left: 5px;
        font-weight: bold;
    }

    form .field :disabled {
        cursor: not-allowed;
    }

    form .field-group .field + .field {
        margin-left: 24px;
    }

    form .field-group input + input {
        margin-left: 24px;
    }

    form button {
        width: 260px;
        height: 56px;
        background: #2FB86E;
        border-radius: 8px;
        color: #FFF;
        font-weight: bold;
        font-size: 16px;
        border: 0;
        align-self: flex-start;
        margin-top: 40px;
        transition: background-color 0.2s;
        cursor: pointer;
    }

    form button:hover {
        background: #2FB86E;
    }

    @media (max-width: 500px) {
        
    }

`;

export const DescountContainer = styled.div`
    width: 100%;
    height: 100%;
    max-width: 110rem;
    background: #312E38;
    /* color: #fff; */
    margin: 0 auto;
    overflow: auto;
    padding: 0 4rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export const Descount = styled.div`
    margin: 50px 10px 20px;
    max-width: 300px;
    height: 200px;
    background: #F0F0F5;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    strong {
		font-size: 20px;
		color: #3D3D4D;
	}
	p {
		font-size: 30px;
		color: #3D3D4D;
		margin-top: 4px;
    }
    button {
        width: 160px;
        height: 46px;
        background: #2FB86E;
        border-radius: 50px;
        color: #FFF;
        font-weight: bold;
        font-size: 16px;
        border: 0;
        align-self: center;
        margin-top: 30px;
        transition: background-color 0.2s;
        cursor: pointer;
    }

    button:hover {
        background: #2FB86E;
    }
    
`;