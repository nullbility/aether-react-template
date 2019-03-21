import React from 'react';
import Nav from './Nav';

import styled from 'styled-components';

const BaseHeader = styled.header`
  background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0.09)
    ),
    url(https://images.unsplash.com/photo-1552979488-f034d7c4d753?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80);
  height: 100vh;
  @media (max-width: 1000px) {
    height: 90vh;
  }
`;

export const Header = () => {
  return (
    <BaseHeader>
      <Nav />
    </BaseHeader>
  )
}