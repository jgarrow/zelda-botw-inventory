import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ItemGrid from "../components/itemGrid"
import RightSide from "../components/rightSide"
import TextInfo from "../components/textInfo"

const Container = styled.div`
  padding: 2.5px 0;
  height: 80vh;
`

const BorderContainer = styled.div`
  position: relative;
  width: 80%;
  min-width: 1235px;
  height: auto;
  margin: 2rem auto 0;
  display: flex;
  flex-direction: row;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`

const IndexPage = ({ data }) => {
  // thoughts
  // just have 1 category of stuff render in itemGrid
  // which array populates itemGrid determined by selectedCategory
  // itemGrid -- wrap in a motion.div


  //  create an object that has each equipment array
  // pos = position used for the category selection icons above the itemGrid
  const inventory = {
    weapons: { pos: 0, items: data.allWeaponsJson.edges.map(n => n.node)},
    shields: {pos: 1, items: data.allShieldsJson.edges.map(n => n.node)},
    armor: {pos: 2, items: data.allArmorJson.edges.map(n => n.node)},
  }
  // const weapons = data.allWeaponsJson.edges.map(n => n.node);
  // const shields = data.allShieldsJson.edges.map(n => n.node);
  // const armor = data.allArmorJson.edges.map(n => n.node);

  // get rid of this, instead look at equipped state before updating to equip new item
  // const [prevItemInFocus, setPrevItemInFocus] = useState(null);

  // Bring in selectedCategory (move from itemGrid) to change between "weapons", "shields", and "armor"
  const [selectedCategory, setSelectedCategory] = useState("weapons")

  // change to just be index of the item instead of whole object
  const [itemInFocusIndex, setItemInFocusIndex] = useState(0);

  const [equippedWeapon, setEquippedWeapon] = useState(null);
  const [equippedShield, setEquippedShield] = useState(null);

  const [equippedArmor, setEquippedArmor] = useState({
    helm: null,
    armor: null,
    greave: null
  });

  const [armorBonus, setArmorBonus] = useState({
    climbing: 0,
    swimming: 0,
    fire: 0,
    normal: 0
  })

  

  const handleItemClick = (itemIndex) => {
    // trigger modal popup for equip/unequip, drop (if weapon or shield), and cancel options

    // setPrevItemInFocus(itemInFocus);
    setItemInFocusIndex(itemIndex);
  }

  // TODO: handle value in TextInfo for armor differently than weapons and shields
  const handleArmorEquip = (clothing) => {
    const equipCopy = {...equippedArmor};

    equipCopy[clothing.category] = clothing;

    console.log('equipped armor: ', equipCopy)

    const armorBuffs = {
      climbing: 0,
      swimming: 0,
      fire: 0
    };

    const equipKeys = Object.keys(equipCopy);
    
    // for each armor bonus type (i.e. swimming, climbing, fire)
    equipKeys.forEach(armorKey => {
      // if there is something equipped for that piece of clothing
      if (equipCopy[armorKey]) {
        // get bonus from each clothing in equipCopy and increment it
        const armorCategory = equipCopy[armorKey].bonus;
        ++armorBuffs[armorCategory];
      };
    })

    console.log('armorBuffs: ', armorBuffs)
    setArmorBonus(armorBuffs);
    setEquippedArmor(equipCopy);
  }

  const handleArmorRemove = (clothing) => {
    const equipCopy = {...equippedArmor};

    equipCopy[clothing.category] = null;

    setEquippedArmor(equipCopy)
  }

  return (
  <Layout>
    <SEO title="Home" />
    <Container>
      <BorderContainer>
        <ItemGrid 
          // weapons={inventory.weapons} 
          // shields={inventory.shields} 
          // armor={inventory.armor} 
          data={inventory[selectedCategory]}
          selectedCategory={selectedCategory}
          itemInFocusIndex={itemInFocusIndex}
          setItemInFocusIndex={setItemInFocusIndex}
          handleItemClick={handleItemClick}
          handleArmorEquip={handleArmorEquip}
          handleArmorRemove={handleArmorRemove}
        />

        <RightSide 
          // Example of grabbing the object based on selectedCategory and itemInFocus
          // itemInFocus={inventory[selectedCategory][itemInFocus]}
          // itemInFocus={itemInFocus} 
          // prevItemInFocu={prevItemInFocus} 
          // category={itemInFocus.category} 
          armorBonus={armorBonus}
        />

        {/* {itemInFocus && 
          <TextInfo 
            itemInFocus={itemInFocus} 
            prevItemInFocus={prevItemInFocus} 
            category={itemInFocus.category}
          />
        } */}
      </BorderContainer>
    </Container>

    
  </Layout>
)}

export const query = graphql`
  query {
    allWeaponsJson {
        edges {
            node {
              name
              category
              value
              icon
              isNew
              description
            }
        }
    }

    allShieldsJson {
        edges {
            node {
              name
              category
              value
              icon
              isNew
              description
            }
        }
    }

    allArmorJson {
        edges {
            node {
              name
              category
              value
              bonus
              icon
              isNew
              description
            }
        }
    }
  }
`

export default IndexPage
