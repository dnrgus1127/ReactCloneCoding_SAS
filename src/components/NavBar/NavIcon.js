import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 0;
    margin-top: 3px;
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


