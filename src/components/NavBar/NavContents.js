import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
  float: left;
  margin-right : 1.5rem;
  /* font-weight: 400; */
  width: 0 auto;
  

  &:after {
    margin-top: 7px;
    display:block;
    content: '';
    border-bottom: solid 1px black;  
    transform: scaleX(0);  
    transition: transform 250ms ease-in-out;
  }

  &:hover:after{  
    transform: scaleX(1);
  }

`
const A = styled.a`
    text-decoration-line: none;
    text-decoration: none;
    color: black;

    
`

const NavContents = ({ title }) => {
  return (
    <Container>
      <A href='/' onClick={(event) => {
        event.preventDefault();
      }}>
        {title}</A>
    </Container>
  )
}

export default NavContents