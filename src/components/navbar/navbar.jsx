import React from "react";
import styled from "styled-components";
import { Button } from "../button/button";
import { Logo } from "../../components/logo/logo";

const NavbarContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BrandContainer = styled.div``;

const AccessibilityContainer = styled.div``;

const LoginButton = styled(Button)`
  background-color: transparent;
  border: none;
  &:hover {
    background-color: transparent;
    color: rgb(200, 200, 200);
  }
`;

export function Navbar(props) {
  return (
    <NavbarContainer>
      <BrandContainer>
        <Logo inline />
      </BrandContainer>
      <AccessibilityContainer>
        <Button small>Get Started</Button>
      </AccessibilityContainer>
    </NavbarContainer>
  );
}
