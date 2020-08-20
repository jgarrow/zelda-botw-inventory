import React from "react"
import styled from "styled-components"
import Image from "./image"

const GridItem = styled.li`
    list-style: none;
    margin-bottom: 0;
    background-color: black;
    padding: 2.5px;
    position: relative;
    height: 80px;
`

const BorderSquare = styled.div`
    background-color: black;
    border: 1px solid #2f3124;
    height: 100%;
`

const ImgContainer = styled.div`
    width: 100%;
`

const StyledImg = styled(Image)`
    width: 100%;
`

const ValueBg = styled.div`
    background-color: black;
    padding: 2.5px;
    display: inline-block;
    position: absolute;
    right: -0.25rem;
    bottom: -0.25rem;
`

const ItemValue = styled.p`
    margin: 0;
    color: white;
    text-align: end;
    background-color: black;
    border: 1px solid #2f3124;
    padding: 0 0.5rem;
    line-height: 1;
`

const Item = ({ item, handleItemClick }) => {
    return (
        <GridItem onClick={() => handleItemClick(item)}>
            <BorderSquare>
                <ImgContainer>
                    <StyledImg filename={item.icon} altTag={item.name}/>
                </ImgContainer>
                {item.value.length && (
                    <ValueBg>
                        <ItemValue>{item.value}</ItemValue>
                    </ValueBg>
                )}
            </BorderSquare>
        </GridItem>
    )
}

export default Item;