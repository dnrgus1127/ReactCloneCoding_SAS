import React from 'react'
import styled from 'styled-components'
import Image from '../../assets/images/go+live+logo.png'


const Container = styled.div`
    width: 33%;
    margin: 0 auto;
    height: 0;
    text-align: center;
`

const LogoImg = styled.img`
    /* width: auto; */
    max-width: 100%;
    max-height: 32px;

`


const NavLogo = () => {
    return (
        <Container>
            <LogoImg src={Image}></LogoImg>
        </Container>
    )
}

export default NavLogo