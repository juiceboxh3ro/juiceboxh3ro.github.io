import React from 'react'
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const mobile = "(max-width: 415px)";
const tablet = "(max-width: 768px)";

const Wrapper = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  
  @media ${mobile},
  @media ${tablet} {
    margin-left: 0;
    margin-bottom: 15px;
  }

  .language-button {
    font-size: 1.6rem;
    font-weight: 600;
    text-align: center;
    vertical-align: middle;
    width: 150px;
    height: 32px;
    border: 1px solid #626262;
    padding: 4px 0;
    text-decoration: none;
    color: #333;
    color: #626262;

    &:hover {
      cursor: pointer;
    }
  
    &:focus {
      outline: none;
    }
  
    &:first-child {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      border-right: none;
    }
    &:last-child {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  }
`;

// English CV https://drive.google.com/uc?export=download&id=17NVEbobCBBGAB6Sx0VZCcI3YSoNtm2Xw
// Japanese CV https://drive.google.com/uc?export=download&id=1Bw0xbcgtRYZ7RlGsNQdaXGB0JGf5hspC

const Language = () => {
  return (
    <Wrapper>
      <NavLink className="language-button" exact to="/">English</NavLink>
      <NavLink className="language-button" to="/jpn">日本語</NavLink>
    </Wrapper>
  )
}

export default Language;