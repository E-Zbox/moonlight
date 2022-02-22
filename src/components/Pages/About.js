import React from "react";
// styles
import { H1, H3 } from "../Styles/Other/Heading";
import Button from "../Styles/Other/Button";
import { AboutImage as Image } from "../Styles/Other/Image";
import {
    AboutMain,
    AboutDiv,
    Div,
    Section,
    SectionContainer,
} from "../Styles/Other/Container";

const About = ({ href }) => {
    return (
        <SectionContainer
            bgImage="./assets/second_bg.jpg"
            bgPosition="center 50%"
            id={href}
        >
            <Section>
                <AboutMain>
                    <AboutDiv>
                        <Div>
                            <H1 textTransform="uppercase">About Us</H1>
                            <H3>
                                Please tell your friends about templatemo
                                website. A variety of free CSS templates are
                                available for immediate downloads.
                            </H3>
                            <H3>
                                Phasellus vitae faucibus orci. Etiam eleifend
                                orci sed faucibus semper. Cras varius dolor et
                                augue fringilla, eu commodo sapien iaculis.
                                Donec eget dictum tellus. <a>Curabitur</a> a
                                interdum diam. Nulla vestibulum porttitor porta.
                            </H3>
                            <H3>
                                Nulla vitae interdum libero, vel posuere ipsum.
                                Phasellus interdum est et dapibus tempus.
                                Vestibulum malesuada lorem condimentum mauris
                                ornare dapibus. Curabitur tempor ligula et{" "}
                                <a>placerat</a> molestie.
                            </H3>
                            <H3>
                                Aliquam efficitur eu purus in interdum.{" "}
                                <a>Etiam tincidunt</a> magna ex, sit amet
                                lobortis felis bibendum id. Lorem ipsum dolor
                                sit amet, consectetur adipiscing elit.
                            </H3>
                            <Button>Read More</Button>
                        </Div>
                    </AboutDiv>
                    <Image src="./assets/about_image.jpg" />
                </AboutMain>
            </Section>
        </SectionContainer>
    );
};

export default About;
