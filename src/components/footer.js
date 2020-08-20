import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
    width: 100%;
    background-color: rgba(0,0,0,0.5);
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: white;
`

const Nav = styled.nav`
    width: 35%;
`

const Ul = styled.ul`
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-evenly;
    padding: 0;
`

const Li = styled.li`
    list-style: none;
    font-size: 1rem;
`

const Footer = () => {
    return (
        <StyledFooter>
            <Nav>
                <Ul>
                    <Li>Sort</Li>
                    <Li>Back</Li>
                    <Li>Select</Li>
                    <Li>Rotate</Li>
                </Ul>
            </Nav>
        </StyledFooter>
    )
}

export default Footer;