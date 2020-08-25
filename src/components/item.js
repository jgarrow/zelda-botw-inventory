import React from "react"
import styled from "styled-components"
import Image from "./image"

const GridItem = styled.li`
    list-style: none;
    margin-bottom: 0;
    background-color: ${({ isEmpty }) => isEmpty ? `rgb(36 35 35 / 0.75)` : `black`};
    padding: 2.5px;
    position: relative;
    height: 80px;
    cursor: pointer;
    border: ${({ inFocus }) => inFocus ? `2px solid rgb(248,247,217)` : `none`};
    box-shadow: ${({ inFocus }) => inFocus ? `rgba(255, 255, 190, 0.4) 0px 0px 6px 2px` : `none`};
    
`

const BorderSquare = styled.div`
    background-color: ${({ isEmpty }) => isEmpty ? `rgb(36 35 35 / 0.75)` : `black`};
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

const Item = ({ item, itemIndex, category, itemInFocusIndex, handleItemClick, handleArmorEquip, isEmpty }) => {
    console.log('isEmpty: ', isEmpty)

    const handleClick = () => {
        if (category === "armor" || category === "helm" || category === "greaves") {
            handleArmorEquip(item)
        } else {
            handleItemClick(itemIndex)
        }
    }

    return (
        <GridItem onClick={() => handleClick()} inFocus={itemInFocusIndex === itemIndex} isEmpty={isEmpty}>
            <BorderSquare isEmpty={isEmpty}>
                {item.icon && <ImgContainer>
                    <StyledImg filename={item.icon} altTag={item.name}/>
                </ImgContainer>}
                {item.value && (
                    <ValueBg>
                        <ItemValue>{item.value}</ItemValue>
                    </ValueBg>
                )}
            </BorderSquare>
        </GridItem>
    )
}

export default Item;