import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    float: left;
    width: 0 auto;
    margin-top: 3px;
    margin-right: 1.5rem;
`

const Icon = styled.img`
    max-height: ${(props) => props.size};
    /* max-width: 30px; */
    /* font-size: 15px; */
`


const NavIcon = ({iconUrl,size}) => {
    return (
        <Container>
            <a href='/'><Icon src={iconUrl} size={size}></Icon></a>
        </Container>
    )
}

export default NavIcon


