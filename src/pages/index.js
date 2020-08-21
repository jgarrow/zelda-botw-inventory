import React, { useState } from "react"
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
  const weapons = data.allWeaponsJson.edges.map(n => n.node);
  const shields = data.allShieldsJson.edges.map(n => n.node);
  const armor = data.allArmorJson.edges.map(n => n.node);

  const [prevItemInFocus, setPrevItemInFocus] = useState(null);
  const [itemInFocus, setItemInFocus] = useState(weapons[0]);
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

  const handleItemClick = (item) => {
    setPrevItemInFocus(itemInFocus);
    setItemInFocus(item);
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
          weapons={weapons} 
          shields={shields} 
          armor={armor} 
          handleItemClick={handleItemClick}
          handleArmorEquip={handleArmorEquip}
          handleArmorRemove={handleArmorRemove}
        />

        <RightSide 
          itemInFocus={itemInFocus} 
          prevItemInFocu={prevItemInFocus} 
          category={itemInFocus.category} 
        />

        {itemInFocus && 
          <TextInfo 
            itemInFocus={itemInFocus} 
            prevItemInFocus={prevItemInFocus} 
            category={itemInFocus.category}
          />
        }
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
