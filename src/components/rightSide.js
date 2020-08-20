import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import TextInfo from "./textInfo"

const Container = styled.div`
    width: 50%;
    position: relative;
`

const ImgContainer = styled.div`
    max-width: 60%;
    height: 100%;
    max-height: 550px;
    margin-right: 0;
    margin-left: auto;
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

            {/* Link pic */}
            <ImgContainer>
                <StyledImg fluid={data.file.childImageSharp.fluid} alt="Link wearing beginning 'well-worn' outfit"/>
            </ImgContainer>

            {/* text info box */}
            {/* {itemInFocus && <TextInfo itemInFocus={itemInFocus} prevItemInFocus={prevItemInFocus} category={category}/>} */}
        </Container>
    )
}

export default RightSide;