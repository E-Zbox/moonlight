import React, { useState } from "react";
// styles
import {
    Section,
    SectionContainer,
    WorkMain,
    WorkContainer,
    WorkContents,
    WorkContent,
    WorkDiv,
} from "../Styles/Other/Container";
import { H2, H3 } from "../Styles/Other/Heading";

const Work = ({ data, href }) => {
    const [workItems, setWorkItems] = useState(
        data.map((item) => ({ ...item, selected: false }))
    );

    return (
        <SectionContainer bgImage="./assets/fourth_bg.jpg" id={href}>
            <Section>
                <WorkMain>
                    <WorkContainer>
                        <WorkContents>
                            {workItems.map(
                                (
                                    { title, body, default_img, large_img },
                                    index
                                ) => (
                                    <WorkContent
                                        key={index}
                                        defaultImg={default_img}
                                        largeImg={large_img}
                                    >
                                        <WorkDiv>
                                            <H2 textTransform="uppercase">
                                                {title}
                                            </H2>

                                            <H3 lineHeight="1.4rem">{body}</H3>
                                        </WorkDiv>
                                    </WorkContent>
                                )
                            )}
                        </WorkContents>
                    </WorkContainer>
                </WorkMain>
            </Section>
        </SectionContainer>
    );
};

export default Work;
