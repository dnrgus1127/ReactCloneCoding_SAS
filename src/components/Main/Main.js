import React from 'react'
import styled from 'styled-components'

const Container = styled.article`
    width: 100%;
    height: 100vh;
    padding: 4vw;
`
const HeaderContainer = styled.div`
    width: 75%;
    text-align: center;
    max-width: 1500px;
    margin: 0 auto;
    /* margin-top: 1rem; */
`

const MainContents = styled.div`
    width: 75%;
    max-width: 1500px;
    margin: 0 auto;

`

const A = styled.a`
    text-decoration-line: none;
    /* text-decoration: none; */
    color: black;
    font-family: 'OpenSans_VariableFont';
    font-size: 1rem;

`

const H1 = styled.h1`
    font-family: 'Noe Display-medium';
    font-size: 3.4rem;
    font-weight: 400;
    margin-top: 10px !important;

`
const SizedBox = styled.div`
    width: 8.3333%;
    float: left;
    content: "12314";
    height: 10px;
`



const Main = () => {
    return (
        <Container>
            <HeaderContainer>
                <A href='/'>Client & Customer Websites</A>
            </HeaderContainer>
            <HeaderContainer>
                <H1>Simple And Serene Squarespace Website For Wellness Brand</H1>
            </HeaderContainer>
            <MainContents>
                <SizedBox />
                <p>ABOUT THE CLIENT</p>

            </MainContents>
        </Container>
    )
}

export default Main