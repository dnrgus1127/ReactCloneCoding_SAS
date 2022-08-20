import React from 'react'
import styled from 'styled-components'
import Image from '../../assets/images/image-asset.jpeg'

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
    width: 80%;
    max-width: 1000px;
    margin: 0 auto;
    display: flex;

`

const LeftContainer = styled.div`
    width: 50%;
    max-width: 1300px;
`

const RightContainer = styled.div`
    width: 80%;
    max-width: 1300px;
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

const P = styled.p`
    font-weight: 900;
    font-family: 'OpenSans_VariableFont';

`
const PNoe =styled.p`
    font-family: 'Noe Display-medium';
    font-size: 2.5rem;
`

const PText = styled.p`
    width: 80%;
    font-family: 'OpenSans_VariableFont';
    line-height: 1.7em;
    font-weight: 300;
`
// const SizedBox = styled.div`
//     width: 8.3333%;
//     float: left;
//     /* height: 10px; */
// `

const Img = styled.img`
    width: 100%;

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
                <LeftContainer>
                    <P>ABOUT THE CLIENT</P>
                    <PNoe>eNourish, Health & Wellness Brand</PNoe>
                    <PText>Isa Griffin is a personal and professional coach based in California and the founder of eNourish, a health and wellness brand that offers habit-based coaching, shop recommendations, and a soon-coming resource platform. Being a model, dancer, and beauty professional, health and wellness have always been a big passion for Isa. Now she gets to use that passion to help others develop and enjoy a strong connection with themselves. 

</PText>
                </LeftContainer>
                <RightContainer>
                    <Img src={Image}></Img>
                </RightContainer>

            </MainContents>
        </Container>
    )
}

export default Main