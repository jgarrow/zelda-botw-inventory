import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const StyledHeader = styled.header`
  width: 100%;
  border-bottom: 1px solid #2f3124;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  color: white;
  background-color: rgba(0,0,0,0.5);
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    {/* hearts */}
    <div>hearts</div>

    <div>
      {/* L for adventure log */}
  
      <h1>Inventory</h1>
  
      {/* R for System */}
    </div>

    {/* Rupees */}
    <div>rupees</div>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
