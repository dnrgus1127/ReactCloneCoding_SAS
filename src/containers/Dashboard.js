import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import styled from 'styled-components'


const Container = styled.div`
    /* background-color: white; */
`

const Dashboard = () => {
    return (
    <Container>
        <NavBar />
    </Container>
    )
}

export default Dashboard