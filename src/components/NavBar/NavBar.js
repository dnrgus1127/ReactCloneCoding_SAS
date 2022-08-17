import React from 'react'
import styled from 'styled-components'
import NavContents from './NavContents'
import NavLogo from './NavLogo'


const Container = styled.div`
  width: 100%;
  padding: 2.5rem 4.5rem 2.5rem 4.5rem;
  margin: 0 auto;
`


const NavBar = () => {
  return (
    <Container>
        <NavContents title="Templates"/>
        <NavContents title="Hire Us"/>
        <NavContents title="Freebies"/>
        <NavLogo/>
    </Container>
  )
}

export default NavBar