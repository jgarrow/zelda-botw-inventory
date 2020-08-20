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
  border-top: 1px solid #2f3124;
  border-bottom: 1px solid #2f3124;
  width: 100%;
  height: 100%;
  margin: 2rem auto 0;
  display: flex;
  flex-direction: row;
  padding: 1.5rem 2rem;

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

  const handleItemClick = (item) => {
    setPrevItemInFocus(itemInFocus);
    setItemInFocus(item);
  }

  return (
  <Layout>
    <SEO title="Home" />
    <Container>
      <BorderContainer>
        <ItemGrid weapons={weapons} shields={shields} armor={armor} handleItemClick={handleItemClick}/>
        <RightSide itemInFocus={itemInFocus} prevItemInFocu={prevItemInFocus} category={itemInFocus.category} />

        {itemInFocus && <TextInfo itemInFocus={itemInFocus} prevItemInFocus={prevItemInFocus} category={itemInFocus.category}/>}
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
