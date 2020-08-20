import React from "react"
import styled from "styled-components"

const IconContainer = styled.div`
    width: 2rem;
    height: 2rem;
    justify-self: center;
`

const Icon = styled.img`
    width: 100%;
    height: 100%;
    cursor: pointer;
`

const CategoryIcon = ({ iconSrc, categoryName, selectedCategory, changeCategory }) => {
    return (
        <IconContainer onClick={() => changeCategory(categoryName)} isSelected={selectedCategory === categoryName}>
            <Icon src={iconSrc} alt={`${categoryName} icon`}/>
        </IconContainer>
    )
}

export default CategoryIcon;