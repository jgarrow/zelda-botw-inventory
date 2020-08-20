import React from "react"
import styled from "styled-components"

import swordIcon from "../assets/items/sword.svg"
import shieldIcon from "../assets/items/shield.svg"
import armorIcon from "../assets/items/armor.svg"
import arrowIcon from "../assets/items/arrow.svg"

// 2rem width compensates for padding on right of one of parent divs so this box goes all the way to the right edge of the screen
const TextInfoContainer = styled.div`
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    width: 50%;
    padding: 2.5px;
    position: absolute;
    bottom: 15%;
    right: 0;
    z-index: 2;
`

const BorderSquare = styled.div`
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid #2f3124;
    border-right: none;
    width: 100%;
    padding: 0.5rem 2rem;
`

const TextWrapper = styled.div`
    width: 50%;
`

const Name = styled.h2`
    margin: 0;
    border-bottom: 1px solid #2f3124;
    padding-bottom: 0.25rem;
    font-size: 1.5rem;
`

const ValueChange = styled.div`
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
`

const IconContainer = styled.div`
    width: 1rem;
    height: 1rem;
`

const StyledImg = styled.img`
    width: 100%;
    height: 100%;
`

const ValueContainer = styled.div`
    background-color: black;
    padding: 2.5px;
    display: inline-block;
`

const ValueP = styled.p`
    color: white;
    background-color: black;
    border: 1px solid #2f3124;
    padding: 0.1rem 0.5rem;
    line-height: 1;
`

const Arrow = styled.div`
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0.3rem 0 0.3rem 0.3rem;
    border-color: transparent transparent transparent white;
`

const TextInfo = ({ itemInFocus, prevItemInFocus, category }) => {
    return (
        <TextInfoContainer>
            <BorderSquare>
                <TextWrapper>
                    <Name>{itemInFocus.name}</Name>
    
                    {/* prev value to curr value */}
                    <ValueChange>
                        {/* icon here */}
    
                        <IconContainer>
                            {category === "weapon" && <StyledImg src={swordIcon} alt="Weapon icon"/>}
    
                            {category === "shield" && <StyledImg src={shieldIcon} alt="Shield icon"/>}
    
                            {category === "armor" && <StyledImg src={armorIcon} alt="Armor icon"/>}
    
                        </IconContainer>
    
                        <ValueContainer>
                            <ValueP>
                                {prevItemInFocus ? prevItemInFocus.value : 0}
                            </ValueP>
                        </ValueContainer>
    
                        <Arrow />
    
                        <ValueContainer>
                            <ValueP>
                                {itemInFocus.value}
                            </ValueP>
                        </ValueContainer>
                    </ValueChange>
    
                    {/* description */}
                    <p>
                        {itemInFocus.description}
                    </p>
                </TextWrapper>
            </BorderSquare>
        </TextInfoContainer>
    )
}

export default TextInfo;