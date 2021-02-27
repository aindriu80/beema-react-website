import React from "react";
import styled from "styled-components";

import BackgroundImg from "../../assets/pictures/company_team.jpg";
import { Logo } from "../../components/logo";

const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  background-image: url(${BackgroundImg});
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(53, 53, 54, 0.88);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export function TopSection(props) {
  return (
    <TopContainer>
      <BackgroundFilter>
        <Logo />
      </BackgroundFilter>
    </TopContainer>
  );
}
