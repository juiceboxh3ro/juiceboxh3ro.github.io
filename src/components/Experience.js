import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  min-width: 500px;
  width: 800px;
  padding: 24px 24px 25px;
  margin-right: auto;
  margin-left: 4px;
  margin-bottom: 50px;
  box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.2);
  background: #fff;
  
    h2 {
      font-size: 2rem;
      font-weight: 400;
      margin-bottom: 20px;
    }
    
    p {
      font-size: 1.4rem;
    }
`;

const Experience = () => {
  return (
    <Wrapper>
      <h2>Works:</h2>
    </Wrapper>
  )
}

export default Experience;