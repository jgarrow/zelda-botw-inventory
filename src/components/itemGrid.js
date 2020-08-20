import React, { useState, useEffect } from "react"
import styled from "styled-components"

import { fillGrid } from "../utils/fillGrid"

import CategoryIcon from "./categoryIcon"
import Item from "./item"

import swordIcon from "../assets/items/sword.svg"
import shieldIcon from "../assets/items/shield.svg"
import armorIcon from "../assets/items/armor.svg"

const GridContainer = styled.div`
    width: 60%;
`

const CategoryIconsWrapper = styled.div`
    width: 180px;
    margin: 0 auto 1rem;
    display: grid;
    grid-template-columns: repeat(3, minmax(2rem, 1fr));
    grid-gap: 1.5rem;
    border-bottom: 1px solid rgba(226, 232, 240, 0.5);
    padding: 0 0.5rem 0.5rem;
    position: relative;
`
const BottomBorder = styled.div`
    height: 1px;
    width: 60px;
    background-color: #e2e8f0;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: ${props => props.categoryPosition};
    transition: transform 0.25s ease-in-out;
`

const Carousel = styled.div`
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    max-width: 600px;
    overflow: hidden;
`

const Grid = styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 80px);
    grid-template-rows: repeat(auto-fit, 80px);
    grid-gap: 1.5rem;

    @media (max-width: 500px) {
        grid-template-columns: repeat(3, minmax(80px, 1fr));
    }
`

const ItemGrid = ({ weapons, shields, armor, handleItemClick }) => {
    const [selectedCategory, setSelectedCategory] = useState("weapon")
    const [categoryPosition, setCategoryPosition] = useState(`translateX(0)`);
    
    const changeCategory = (name) => {
        setSelectedCategory(name)
    }

    useEffect(() => {
        let newCategoryPos;

        if (selectedCategory === "weapon") {
            newCategoryPos = `translateX(0)`;
        } else if (selectedCategory === "shield") {
            newCategoryPos = `translateX(60px)`;
        } else if (selectedCategory === "armor") {
            newCategoryPos = `translateX(120px)`;
        }

        setCategoryPosition(newCategoryPos)
    }, [selectedCategory])

    return (
        <GridContainer>
            {/* inventory category icons here */}
            <CategoryIconsWrapper>
                <CategoryIcon 
                    iconSrc={swordIcon}  
                    categoryName="weapon"
                    selectedCategory={selectedCategory}
                    changeCategory={changeCategory}
                />
                <CategoryIcon 
                    iconSrc={shieldIcon}  
                    categoryName="shield"
                    selectedCategory={selectedCategory}
                    changeCategory={changeCategory}
                />
                <CategoryIcon 
                    iconSrc={armorIcon}  
                    categoryName="armor"
                    selectedCategory={selectedCategory}
                    changeCategory={changeCategory}
                />
                <BottomBorder categoryPosition={categoryPosition}/>
            </CategoryIconsWrapper>

            {/* will add framer motion slide functionality */}
            <Carousel>
                <Grid>
                    {fillGrid(weapons, "weapon").map((item, index) => (
                        <Item key={`${item.name}-${index}`} item={item} handleItemClick={handleItemClick}/>
                    ))}
                </Grid>
                <Grid>
                    {fillGrid(shields, "shield").map((item, index) => (
                        <Item key={`${item.name}-${index}`} item={item} handleItemClick={handleItemClick}/>
                    ))}
                </Grid>
                <Grid>
                    {fillGrid(armor, "armor").map((item, index) => (
                        <Item key={`${item.name}-${index}`} item={item} handleItemClick={handleItemClick}/>
                    ))}
                </Grid>
            </Carousel>
        </GridContainer>
    )
}

export default ItemGrid;