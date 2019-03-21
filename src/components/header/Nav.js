
import React from 'react';
import styled, { css } from 'styled-components';
import { Button } from '../../components';
import boxLogo from './img/box.svg';

const Nav = styled.nav`
    height: 90px;
    /* logo */
    img {
        width: 167px;
        height : 45px;
        vertical-align: middle;
    }
    .logo {
        display: inline-block;
        line-height: 90px;
        margin: 0 0 0 3%;
    }
`;

const nav = () => {
    return (
      <Nav>
        <a href={"/"} className="logo">
            <img src={boxLogo} alt="Logo" />
        </a>
        <Button right>register</Button>
      </Nav>
    )
}

export default nav;