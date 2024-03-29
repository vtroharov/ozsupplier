import styled from 'styled-components';

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.3rem;
    background: transparent;
    border: 0.05rem solid var(--lightGrey);
    border-color: ${props => (props.cart ? "var(--lightBlue)" : "var(--lightGrey)")};
    color: ${props => (props.cart ? "var(--lightBlue)" : "var(--lightGrey)")};
    border-radius: 0.5rem;
    cursor: pointer;
    margin:0.2rem 0.5rem 0.2rem 0;
    transition:all 0.5s ease-in-out;
    white-space: nowrap;
    overflow: hidden;
    &:hover{
        background: ${props => (props.cart ? "var(--lightBlue)" : "var(--lightGrey)")};
        color: var(--darkGrey);
    }
    &:focus{
        outline: none;
    }
`;