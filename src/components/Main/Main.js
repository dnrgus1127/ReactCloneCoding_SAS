import React from 'react'
import styled from 'styled-components'
import Image from '../../assets/images/image-asset.jpeg'
import Image2 from '../../assets/images/image-asset2.jpeg'
import Image3 from '../../assets/images/image-asset3.png'
import Image4 from '../../assets/images/image-asset3.jpeg'


const Container = styled.article`
    width: 100%;
    height: 100vh;
    padding: 3vw;
    margin: 0 auto;
    
`

const Container75 = styled.div`
    width: 80%;
    margin: 0 auto;
    /* max-width: 800px; */
    /* background-color: /white; */
`

const HeaderContainer = styled.div`
    width: 65%;
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

const SubContainer = styled.div`
    width: 100%;
    display: flex;
    
`

const LeftContainer = styled.div`
    width: ${({ width }) => { return width; }};
    max-width: 1300px;
`

const RightContainer = styled.div`
    width: ${({ width }) => { return width; }};
    max-width: 1300px;
`

const A = styled.a`
    text-decoration-line: none;
    /* text-decoration: none; */
    color: black;
    font-family: 'OpenSans_VariableFont';
    font-size: 1rem;

`

const ANoe = styled.a`
    text-decoration-line: none;
    /* text-decoration: none; */
    color: black;
    font-family: 'Noe Display-medium';
    font-size: 1.5rem;

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
    /* width: 80%; */
    font-family: 'Noe Display-medium';
    font-size: 2rem;
`



const PText = styled.p`
    font-family: 'OpenSans_VariableFont';
    line-height: 1.7em;
    font-size: ${({ fontSize }) => { return fontSize; }};
    font-weight: 300;
    text-align: ${({ float }) => {

        if (float === "right") {
            return float;
        }
        else if (float === 'center') {
            return float;
        }
    }
    };
`

const PTextW = styled(PText)`
    width: 100%;
    line-height: 2.3em;
    font-size: 1rem;
    

`
const SizedBox = styled.div`
    width: 100%;
    /* background-color: red; */
    height: ${({ height }) => {
        return height;
    }};
    /* height: 10px; */
    display: block;
`

const Img = styled.img`
    width: ${({ width }) => {
        return width
    }};
    padding: 1rem;

`



const CenterContainer = styled.div`
    width: 100%;
    text-align: center;
`
const PaddingContainer = styled.div`
    padding: ${({ padding }) => {
        return padding;
    }} ;
    width: 100%;
`

const CropImgContainer = styled.div`
    width: 100%;
    /* height: 20rem; */
    overflow: hidden;
    padding: 1rem;
`
const Img2 = styled(Img)`  
    width: 100%;
    padding: 0;
`

const Padding = styled.div`
    padding: ${({padding}) => {return padding}};
`

const Center = styled.div`
    width: 100%;
    align-items: center;
    text-align: center;
`

const BlackButton = styled.a`
    background-color: #1F1F1F;
    padding: 1rem 2.4rem 1rem 2.4rem;
    color: white;
    font-weight: 500;
    font-family: 'OpenSans_VariableFont';
    text-decoration: none;
    font-size: 0.9rem;
    line-height: 1.7;
    font-style: normal;

    &:hover {
        background-color: #3d3c3c;
        transition: 0.25s ease-in-out;
    }
`

const Section = styled.section`
    display: flex;
    padding: 3vw 4vw 3vw;
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
                <Container75>
                    <SubContainer>
                        <LeftContainer width={"50%"}>
                            <P>ABOUT THE CLIENT</P>
                            <PNoe>eNourish, Health & Wellness Brand</PNoe>
                            <PTextW>Isa Griffin is a personal and professional coach based in California and the founder of eNourish, a health and wellness brand that offers habit-based coaching, shop recommendations, and a soon-coming resource platform. Being a model, dancer, and beauty professional, health and wellness have always been a big passion for Isa. Now she gets to use that passion to help others develop and enjoy a strong connection with themselves.

                            </PTextW>
                        </LeftContainer>
                        <RightContainer width={"90%"}>
                            <Img src={Image} width={"100%"}></Img>
                        </RightContainer>
                    </SubContainer>
                    <SubContainer>
                        <SizedBox height={"6rem"}></SizedBox>
                    </SubContainer>
                </Container75>
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
                <SubContainer>
                    <LeftContainer width={"50%"}>
                        <CropImgContainer>
                            <Img2 src={Image2} width={"300px"}></Img2>
                            <Img2 src={Image3} width={"300px"}></Img2>
                        </CropImgContainer>
                    </LeftContainer>
                    <RightContainer width={"50%"}>
                        <Padding padding={"1.5rem"}>
                            <SizedBox height={"1rem"}></SizedBox>
                            <PNoe>Q&A with Isa Griffin</PNoe>
                            <P>What is your expertise or claim to fame?</P>
                            <PTextW>I see myself as a really unique personal support system. I am facilitator through t transition and change. On paper, I'm a certified Precision Nutrition coach that holds a certification in small business management. I'm a licensed cosmetologist in California and a license beauty operator in Hawaii. I'm an internationally published mo del. I'm a landlord, gardener, and a hippie at heart. With all that said, I think my claim to fame is the way I make other people feel; My ability to bring stability, light, and optimism to any situation. </PTextW>
                            <P>What’s the hardest lesson you’ve learned in your business?</P>
                            <PTextW>I've learned that self doubt is a part of the process. Even though it may fell like your being reasonable and realistic . You're not. Trust yourself!</PTextW>
                            <P>What does it mean to you to redesign your website?</P>
                            <PTextW>For me, the launch and design of my website was very much a celebration of a new chapter. It meant embracing my career and letting the world know that personal and professional wellness coaching is what I'm doing full time now. It was a way for me to take everything I've learned, and everything I want to offer, and put it in one place. It gave me a chance to really connect to my brand and to succinctly and purposefully make choices that reflect what I wanted people to feel when they interacted with eNourish. </PTextW>
                            <P>Why did you ultimately decide to work with GoLive? </P>
                            <PTextW>I really liked the efficiency of the GoLive set up, and the fast paced, "get to launch" approach of going from inception to finished product in a short amount of time. I really enjoyed the brand assignment and the overall strategy that GoLive has developed to really understand your individual brand. They were able to meet me where I was. They took everything that I had, and turned it into everything that I wanted.</PTextW>
                            
                        </Padding>
                    </RightContainer>
                </SubContainer>
                <SizedBox height={"8rem"}></SizedBox>
                <SubContainer>
                    <Container75>
                        <Center>
                            <PNoe>See eNourish On Squarespace</PNoe>
                        </Center>
                    </Container75>
                </SubContainer>
                <SubContainer>
                    <Container75>
                        <Center>
                            <BlackButton href='https://www.naver.com'>WWW.NAVER.COM</BlackButton>
                        </Center>
                    </Container75>
                </SubContainer>
                <Padding padding={"2rem"}/>
                <SubContainer>
                    <Center>
                        <Img src={Image4} width={"50%"}></Img>
                        <SizedBox height={"5rem"}></SizedBox>
                        <PNoe>Get The Influence<br/>Template For Squarespace</PNoe>
                    </Center>
                </SubContainer>
                <Padding padding={"1rem"}></Padding>
                <SubContainer>
                    <Center><PNoe>Related Articles</PNoe></Center>
                    <Center><PNoe>Popular Posts</PNoe></Center>
                </SubContainer>
            </MainContents>
            {/* 페이지 이동 a */}
            <Section>
                <LeftContainer>
                    <PNoe><ANoe href='/'>High-End Custom Squearespace Design For Keynote Speaker Seth Mattision</ANoe></PNoe>
                    <A><PNoe>123</PNoe></A>
                </LeftContainer>
                <RightContainer></RightContainer>
            </Section>
        </Container>

    )
}

export default Main