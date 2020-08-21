import React from "react"
import styled from "styled-components"

import Swimming from "../assets/items/water.svg"
import Climbing from "../assets/items/mountain.svg"
import Fire from "../assets/items/fire.svg"

// same width as StaminaRings
const ArmorBonusContainer = styled.div`
    width: 40px;
    height: 35px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

const BonusImgContainer = styled.div`
    width: 30px;
    height: 30px;
    margin-bottom: 5px;
`

const Img = styled.img`
    width: 100%;
    height: 100%;
`

const BonusCountContainer = styled.div`
    width: 80%;
    height: 3px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const BonusCountOne = styled.div`
    width: 30%;
    height: 100%;
    background-color: ${props => props.count >= 1 ? "#0290fe" : '#303124'};
`

const BonusCountTwo = styled.div`
    width: 30%;
    height: 100%;
    background-color: ${props => props.count >= 2 ? "#0290fe" : '#303124'};
`

const BonusCountThree = styled.div`
    width: 30%;
    height: 100%;
    background-color: ${props => props.count >= 3 ? "#0290fe" : '#303124'};
`

const ArmorBonus = ({ bonus, count }) => {
    return (
        <ArmorBonusContainer>
            <BonusImgContainer>
                {bonus === "swimming" && <Img src={Swimming} alt={`Swimming bonus x${count}`}/>}
    
                {bonus === "climbing" && <Img src={Climbing} alt={`Climbing bonus x${count}`}/>}
    
                {bonus === "fire" && <Img src={Fire} alt={`Fire bonus x${count}`}/>}
            </BonusImgContainer>

            <BonusCountContainer>
                <BonusCountOne count={count}/>
                <BonusCountTwo count={count}/>
                <BonusCountThree count={count}/>
            </BonusCountContainer>
        </ArmorBonusContainer>
    )
}

export default ArmorBonus;