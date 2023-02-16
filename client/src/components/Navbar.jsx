import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Container } from '@chakra-ui/react';

const NavBar = () => {
    return (
        <NavContainer >
            <Container maxW={'container.xl'} display={'flex'} justifyContent={'center'}>
                <LogoContainer>
                    <Link to='/'>
                        <Name>CocoHealth 🌴🥥</Name>
                    </Link>
                </LogoContainer>
            </Container>
        </NavContainer>
    );
}


const NavContainer = styled.div`
    height: 4rem;
    width: 100%;
    background: #f8f8f8;
    display: flex;
    align-items: center;

    @media screen and (max-width: 780px) {
        height: fit-content;
        padding: 0.625rem
    }
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.9375rem;
`;

const Name = styled.p`
    background-color: #ededed;
    padding: 0.625rem;
    border-radius: 0.5rem;
    color: #000000;
    font-weight: 700;

    &:hover {
        cursor: pointer;
    }
`;

export default NavBar;