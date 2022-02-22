import React, { useEffect, useState } from "react";
import {
    Container,
    Drawer,
    Logo,
    MenuList,
    MenuUL,
    Nav,
} from "../Styles/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({ menuItems, handleClick, scrollLeftPos }) => {
    const [menuState, setMenuState] = useState(menuItems);
    const [logoImage, setLogoImage] = useState("");

    const handleMenuClick = (href, id) => {
        handleClick(href);
        let newMenuState = menuState.map((item, index) => {
            if (index === id) return { ...item, selected: true };
            return { ...item, selected: false };
        });
        setMenuState(newMenuState);
    };

    useEffect(() => {
        let windowWidth = window.innerWidth;
        const newMenuState = menuState.map((item, index) => {
            if (
                (scrollLeftPos >= index * windowWidth) &
                (scrollLeftPos < (index + 1) * windowWidth)
            ) {
                window.history.pushState(
                    "this is data gibberish lroem ipsum tenada",
                    "",
                    `#${item.href}`
                );
                return { ...item, selected: true };
            } else {
                return { ...item, selected: false };
            }
        });
        setMenuState(newMenuState);
    }, [scrollLeftPos]);

    useEffect(() => {
        window.addEventListener("load", (e) => {
            if (document.body.clientWidth < 500) {
                setLogoImage("./assets/mini_logo.png");
            } else {
                setLogoImage("./assets/logo.png");
            }
        });
    }, []);
    return (
        <Nav>
            <Drawer></Drawer>
            <Container>
                <Logo src={logoImage} />
                <MenuUL>
                    {menuState.map(({ title, href, icon, selected }, index) => (
                        <MenuList
                            href={`#${href}`}
                            key={index}
                            selected={selected}
                            onClick={() => handleMenuClick(href, index)}
                        >
                            <span>
                                <FontAwesomeIcon icon={icon} />
                            </span>
                            <a href={`#${href}`}>{title}</a>
                        </MenuList>
                    ))}
                </MenuUL>
            </Container>
        </Nav>
    );
};

export default Navbar;
