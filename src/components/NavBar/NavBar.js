import React from 'react'
import styled from 'styled-components'
import NavContents from './NavContents'
import NavIcon from './NavIcon'
import NavLogo from './NavLogo'
import SearchIcon from '../../assets/icons/iconmonstr-search-thin.svg'
import BuyIcon from '../../assets/icons/iconmonstr-checkout-8.svg'

const Container = styled.div`
  width: 100%;
  padding: 2.5rem 4.5rem 2.5rem 4.5rem;
  margin: 0 auto;
`

const RightContainer = styled.div`
    width: 33%;

`

const LeftContainer = styled.div`
    float: right;
    
`


const NavBar = () => {
    return (
        <Container>
            <RightContainer>
                <NavContents title="Templates" />
                <NavContents title="Hire Us" />
                <NavContents title="Freebies" />
            </RightContainer>
            <NavLogo />
            <LeftContainer>
                <NavContents title="Support" />
                <NavContents title="Blog" />
                <NavIcon iconUrl={SearchIcon} size="8"/>
                <NavIcon iconUrl={BuyIcon} size="1"/>
            </LeftContainer>
        </Container>
    )
}

export default NavBar