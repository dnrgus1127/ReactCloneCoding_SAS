import React from 'react'
import styled from 'styled-components'
import Image from '../../assets/images/go+live+logo.png'


const Container = styled.div`
    width: 800px;
    margin: 0 auto;

`

const LogoImg = styled.img`
    width: auto;
    max-width: 100%;
    max-height: 34px;

`

const NavLogo = () => {
    return (
        <Container>
            <LogoImg src={Image}></LogoImg>
        </Container>
    )
}

export default NavLogo