import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import ArmorBonus from "./armorBonus"

const Container = styled.div`
    width: 50%;
    position: relative;
    display: flex;
    justify-content: center;
`

const StaminaRings = styled.div`
    border: 4px solid #03ee54;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;

    &:after {
        content: '';
        position: absolute;
        top: 1px;
        left: 1px;
        border: 9px solid #03ee54;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        box-sizing: border-box;
    }
`

const ImgContainer = styled.div`
    width: 60%;
    max-width: 250px;
    height: 100%;
    max-height: 550px;
    margin: 0;
`

const StyledImg = styled(Img)`
    height: 100%;
    max-height: 550px;
`

const RightSide = ({ itemInFocus, prevItemInFocus, category }) => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: {eq: "bg.png"}) {
                childImageSharp {
                  fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <Container>
            {/* stat boost stuff */}
            <StaminaRings />
            <ArmorBonus bonus="swimming" count={2}/>

            {/* Link pic */}
            <ImgContainer>
                <StyledImg fluid={data.file.childImageSharp.fluid} alt="Link wearing beginning 'well-worn' outfit"/>
            </ImgContainer>

        </Container>
    )
}

export default RightSide;