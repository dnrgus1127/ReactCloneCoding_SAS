import React from 'react'
import styled from 'styled-components'


const NavTitle = styled.h4`
    margin: 0;
    margin-bottom: 2rem;

`

const NavItem = styled.p`
    margin: 1rem 0 1.5rem ;


`

const Container = styled.div`
    width: 33%;
    display:block;
    margin: 0 3rem 0 3rem;
    
`


const NavTree = () => {
  return (
    <Container>
        <NavTitle>NAVIGATE</NavTitle>
        <NavItem>About</NavItem>
        <NavItem>Freebies</NavItem>
        <NavItem>For Designers</NavItem>
        <NavItem>Careers</NavItem>
        <NavItem>Contact</NavItem>
    </Container>


  )
}

export default NavTree