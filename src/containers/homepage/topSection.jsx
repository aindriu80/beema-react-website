import React from "react";
import styled from "styled-components";

import BackgroundImg from "../../assets/pictures/company_team.jpg";
import { Button } from "../../components/button/button";
import { Logo } from "../../components/logo/logo";
import { Marginer } from "../../components/marginer/marginer";
import { DownArrow } from "../../components/downArrow/downArrow";
import { Navbar } from "../../components/navbar/navbar";

const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0;
  background-image: url(${BackgroundImg});
  position: relative;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(53, 53, 54, 0.88);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MotivationalText = styled.h1`
  font-size: 33px;
  font-weight: 500;
  line-height: 1.4;
  color: #fff;
  margin: 0;
`;

const DownArrowContainer = styled.div`
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
`;

export function TopSection(props) {
  return (
    <TopContainer>
      <BackgroundFilter>
        <Navbar />
        <Marginer direction="vertical" margin="8rem" />
        <Logo />
        <Marginer direction="vertical" margin="3rem" />
        <MotivationalText>Software Development</MotivationalText>
        <MotivationalText>From the Best in the Industry</MotivationalText>
        <Marginer direction="vertical" margin="2rem" />
        <Button>Start Your Project</Button>
        <DownArrowContainer>
          <DownArrow />
        </DownArrowContainer>
      </BackgroundFilter>
    </TopContainer>
  );
}
