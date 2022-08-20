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

`

const SubContainer = styled.div`
    width: 100%;
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
const TextAtag = styled.a`
    color: black;
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
const PNoe = styled.p`
    font-family: 'Noe Display-medium';
    font-size: 2.5rem;
`



const PText = styled.p`
    font-family: 'OpenSans_VariableFont';
    line-height: 1.7em;
    font-size: ${({fontSize})=> {return fontSize;}};
    font-weight: 300;
    text-align: ${({float}) =>{

        if(float === "right")
        {
            return float;
        }
        else if(float ==='center')
        {
            return float;
        }
    }
    };
`

const PTextW = styled(PText)`
    width: 80%;

`
const SizedBox = styled.div`
    width: 1500px;
    /* background-color: red; */
    height: 10rem;
    /* height: 10px; */
    display: block;
`

const Img = styled.img`
    width: 100%;

`

const CenterContainer = styled.div`
    width: 100%;
    text-align: center;
`
const PaddingContainer = styled.div`
    padding: ${({padding})=>{
        return padding;
    }} ;
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
                <SubContainer>
                    <LeftContainer>
                        <P>ABOUT THE CLIENT</P>
                        <PNoe>eNourish, Health & Wellness Brand</PNoe>
                        <PTextW>Isa Griffin is a personal and professional coach based in California and the founder of eNourish, a health and wellness brand that offers habit-based coaching, shop recommendations, and a soon-coming resource platform. Being a model, dancer, and beauty professional, health and wellness have always been a big passion for Isa. Now she gets to use that passion to help others develop and enjoy a strong connection with themselves.

                        </PTextW>
                    </LeftContainer>
                    <RightContainer>
                        <Img src={Image}></Img>
                    </RightContainer>
                </SubContainer>
                <SubContainer>
                    <SizedBox></SizedBox>
                </SubContainer>
                <SubContainer>
                    <CenterContainer>
                        <P>ABOUT THE DESIGN</P>
                        <PText>For this project, our team worked on a <TextAtag href='/'>Restyle</TextAtag> of our <TextAtag href='/'>Nite Template for Squarespace</TextAtag>. One of the main goals was to showcase the clean, natural and down-to-earth feel of the brand. We accomplished that through the color palette and photography. We also added small graphic touches, such as the waterbird icon, and arches to add to the overall vibe of the brand. Another fun aspect of this project, was transforming our Nite template from its original dark and moody vibe to the exact opposite. We also made the site more dynamic and added movement with parallax.</PText>
                    </CenterContainer>
                </SubContainer>
                <SubContainer>
                    <PaddingContainer padding={"1rem"}>
                        <PText fontSize="1.5rem">“I really enjoyed the overall strategy that GoLive has developed to really understand your individual brand. They were able to meet me where I was. They took everything that I had, and turned it into everything that I wanted.”</PText>
                        <PText float="right">— Isa Griffin</PText>
                    </PaddingContainer>
                </SubContainer>

            </MainContents>

        </Container>
    )
}

export default Main