import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  padding: 10px 20px;
  align-items: center;
  bottom: 0;  
  left: 0;
  position: fixed;
  width: 100%;
  border-radius: 5px;
  border-top: 1px solid #000000;
  color: ${props => props.theme.textColor};
`;

const Footer = () => {
  return <Wrapper>@Copyright Company Name</Wrapper>;
};
export default Footer;
