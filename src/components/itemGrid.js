import React, { useState, useEffect } from "react"
import styled from "styled-components"

import { fillGrid } from "../utils/fillGrid"

import CategoryIcon from "./categoryIcon"
import Item from "./item"

import swordIcon from "../assets/items/sword.svg"
import shieldIcon from "../assets/items/shield.svg"
import armorIcon from "../assets/items/armor.svg"
import arrow from "../assets/items/arrow.svg"

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

// look into it again
// transform: ${({ pos }) => `translateX(${pos}px)`}
const BottomBorder = styled.div`
    height: 1px;
    width: 60px;
    background-color: #e2e8f0;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: ${({ pos }) => `translateX(${pos}px)`};
    transition: transform 0.25s ease-in-out;
`

const Carousel = styled.div`
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    max-width: 600px;
    overflow: hidden;
`

const Arrow = styled.div`
    transform: ${props => props.isLeftArrow ? 'rotate(180deg)' : 'none'};
    display: flex;
    align-items: center;
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

const ItemGrid = ({ 
    // weapons, 
    // shields, 
    // armor,
    data: {
        pos, // used for calculating categoryPosition for BottomBorder
        items, // will be weapons OR shields OR armor, depending on what selectedCategory is
    },
    selectedCategory,
    itemInFocusIndex,
    setItemInFocusIndex,
    handleItemClick, 
    handleArmorEquip, 
    handleArmorRemove 
}) => {
    const numOfColumns = 5; // num of columns in itemGrid
    const numOfItems = 20; // total num of items per itemGrid
    // const [selectedCategory, setSelectedCategory] = useState("weapon")
    // const [categoryPosition, setCategoryPosition] = useState(`translateX(0)`);
    
    const changeCategory = (name) => {
        // setSelectedCategory(name)
    }

    // for arrow navigation in itemGrid, need to use setItemInFocus to update the index of the item currently in focus
  const handleArrowNavigation = (e) => {
    let newIndex = itemInFocusIndex;
    console.log('newIndex before update: ', newIndex);

    if (e.key === "ArrowRight") {
      // Right arrow ==> +1 to index
      //   condition -- if at right edge, go to next grid (trigger "click" on right arrow icon) unless in last grid

      console.log('right arrow clicked');
      
      // check if we're on the last column on the right
      if ((itemInFocusIndex + 1) % numOfColumns === 0) {
        // if so, go to the next itemGrid to the right
        // add handling to see if we're on the last grid
        
        // update the index so it's on the same row, but the first column
        newIndex = itemInFocusIndex - (numOfColumns - 1)
      } else {
        // otherwise increment the current index by 1
        ++newIndex;
      }

      // setItemInFocusIndex(newIndex)
    } else if (e.key === "ArrowLeft") {
      //   Left arrow ==> -1 to index
      //   condition -- if at left edge, go to next grid (trigger "click" on left arrow icon) unless in first grid

      console.log('left arrow clicked');

      // check if we're on the first column on the left
      if (itemInFocusIndex % numOfColumns === 0) {
        // if so, go to the previous itemGrid to the left
        // add handling to see if we're on the first grid
        
        // update the index so it's on the same row, but the last column
        newIndex = itemInFocusIndex + (numOfColumns - 1)
      } else {
        // otherwise decrement the current index by 1
        --newIndex;
      }
    } else if (e.key === "ArrowDown") {
        //   Down arrow ==> +5 to index (num is dependant on num of columns)
        //   condition -- if index + 5 > 20, do nothing (20 is dependent on num rowx x num of columns)

        if ((itemInFocusIndex + numOfColumns) < numOfItems) {
            newIndex = itemInFocusIndex + numOfColumns;
        }
    } else if (e.key === "ArrowUp") {
        //   Up arrow ==> -5 to index (num is dependant on num of columns)
        //   condition -- if index - 5 < 0, do nothing

        if ((itemInFocusIndex - numOfColumns) >= 0) {
            newIndex = itemInFocusIndex - numOfColumns;
        }
    }
    
    console.log('newIndex after update: ', newIndex);
    setItemInFocusIndex(newIndex)
  }

    // for motion.div for Grid
    // const variants = {
    // where x is -100 or 100 for the direction the Grid should move
    //     start: (x) => ({
    //         x,
    //         opacity: 0
    //     }),
    //     end: {
    //         x: 0,
    //         opacity: 1
    //     }
    // }

    useEffect(() => {
        console.log('i got here')
        document.addEventListener('keydown', handleArrowNavigation);

        return () => document.removeEventListener('keydown', handleArrowNavigation)
      }, [handleArrowNavigation])

    return (
        <GridContainer>
            {/* inventory category icons here */}
            <CategoryIconsWrapper>
                <CategoryIcon 
                    iconSrc={swordIcon}  
                    categoryName="weapons"
                    selectedCategory={selectedCategory}
                    changeCategory={changeCategory}
                />
                <CategoryIcon 
                    iconSrc={shieldIcon}  
                    categoryName="shields"
                    selectedCategory={selectedCategory}
                    changeCategory={changeCategory}
                />
                <CategoryIcon 
                    iconSrc={armorIcon}  
                    categoryName="armor"
                    selectedCategory={selectedCategory}
                    changeCategory={changeCategory}
                />
                <BottomBorder 
                    // categoryPosition={categoryPosition}
                    pos={pos*60}
                />
            </CategoryIconsWrapper>

            {/* will add framer motion slide functionality */}
            <Carousel>
            <Arrow isLeftArrow={true}>
                <img src={arrow} alt="Left arrow to navigate to previous inventory page"/>
            </Arrow>
            
            {/* wrap in a motion.div */}
            {/* <motion.div
                custom={100 going to the right, -100 going to the left}
                variants={variants}
                initial="start"
                animate="end"
                transition={{
                    x: { type: "tween" },
                    opacity: { duration: 0.2 },
                }}
            > */}
            <Grid>
                {/* fillGrid(items, selectedCategory) */}
                {fillGrid(items).map((item, index) => (
                    <Item 
                        key={`${item.name}-${index}`} 
                        item={item} 
                        itemIndex={index} 
                        itemInFocusIndex={itemInFocusIndex} handleItemClick={handleItemClick}
                    />
                ))}
            </Grid>
            {/* </motion.div> */}

            {/* <Grid>
                {fillGrid(shields, "shield").map((item, index) => (
                    <Item key={`${item.name}-${index}`} item={item} handleItemClick={handleItemClick}/>
                ))}
            </Grid>
            <Grid>
                {fillGrid(armor, "armor").map((item, index) => (
                    <Item key={`${item.name}-${index}`} item={item} category="armor" handleItemClick={handleItemClick} handleArmorEquip={handleArmorEquip} tabIndex={`${index}`}/>
                ))}
            </Grid> */}
            
            <Arrow>
            <img src={arrow} alt="Right arrow to navigate to next inventory page"/>
            </Arrow>
            </Carousel>
            
        </GridContainer>
    )
}

export default ItemGrid;