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

// top = height of StaminaRings + 15px for some spacing
// grid-gap = same as 15px spacing that separates this from StaminaRings
const ArmorBonusesContainer = styled.div`
    width: 40px;
    height: 150px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 35px);
    grid-gap: 15px;
    position: absolute;
    top: 65px;
    left: 0;
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

const RightSide = ({ itemInFocus, prevItemInFocus, category, armorBonus }) => {
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
            <ArmorBonusesContainer>
                {armorBonus.swimming > 0 && <ArmorBonus bonus="swimming" count={armorBonus.swimming}/>}
    
                {armorBonus.climbing > 0 && <ArmorBonus bonus="climbing" count={armorBonus.climbing}/>}
    
                {armorBonus.fire > 0 && <ArmorBonus bonus="fire" count={armorBonus.fire}/>}
            </ArmorBonusesContainer>

            {/* Link pic */}
            <ImgContainer>
                <StyledImg fluid={data.file.childImageSharp.fluid} alt="Link wearing beginning 'well-worn' outfit"/>
            </ImgContainer>

        </Container>
    )
}

export default RightSide;