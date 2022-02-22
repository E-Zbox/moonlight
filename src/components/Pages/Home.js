import React from "react";
import { useTheme } from "styled-components";
import {
    Div,
    HomeButtonDiv,
    HomeMain,
    Section,
    SectionContainer,
} from "../Styles/Other/Container";
import { H1, H3, HL } from "../Styles/Other/Heading";
import { HomeImage as Image } from "../Styles/Other/Image";
import Button from "../Styles/Other/Button";

const Home = ({ href }) => {
    const theme = useTheme();
    const {
        colors: { dark02, white01 },
    } = theme;
    return (
        <SectionContainer bgImage="./assets/first_bg.jpg" id={href}>
            <Section>
                <HomeMain>
                    <Image src="./assets/author_image.png" />
                    <Div>
                        <H1
                            textDecoration="underline"
                            textTransform="uppercase"
                        >
                            MINGALAR PAR
                        </H1>
                        <H3 letterSpacing="0.2rem">
                            PLEASE TAKE A LOOK AT{" "}
                            <HL>
                                <a
                                    href="https://templatemo.com/"
                                    target="_blank"
                                >
                                    TOO CSS
                                </a>
                            </HL>{" "}
                            TO SEE FREE TEMPLATE COLLECTIONS FOR YOU.{" "}
                            <HL>LOREM IPSUM DOLOR SIT AMET</HL>, CONSECTETUR
                            ADIPISCING ELIT.{" "}
                            <HL>SED VEHICULA BLANDIT AUGUE,</HL> EU MAXIMUS ODIO
                            TEMPUS VITAE
                        </H3>
                        <HomeButtonDiv>
                            <Button>Read More</Button>
                            <Button
                                color={dark02}
                                bgColor={white01}
                                hoverBgColor={dark02}
                                hoverColor={white01}
                                transparentBorder={true}
                                hoverBorderColor={white01}
                            >
                                Our FB Page
                            </Button>
                        </HomeButtonDiv>
                    </Div>
                </HomeMain>
            </Section>
        </SectionContainer>
    );
};

export default Home;
