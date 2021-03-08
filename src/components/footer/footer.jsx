import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "components/button/button";
import { Logo } from "components/logo/logo";
import { Marginer } from "components/marginer/marginer";
import React from "react";
import styled from "styled-components";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const FooterContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1f1f1f;
`;

const MotivationalText = styled.h1`
  font-size: 25px;
  font-weight: 500;
  line-height: 1.4;
  color: #fff;
  margin: 0;
`;

const Line = styled.span`
  min-width: 100%;
  min-height: 1px;
  margin-bottom: 1em;
  background-color: #cdcdcd;
  display: flex;
`;
const Acessibilitycontainer = styled.div`
  width: 80%;
  padding-top: 6px;
  padding-left: 5px;
  padding-right: 5px;
  display: flex;
  border-top: 1px solid #cdcdcd;
  color: #fff;
  justify-content: space-between;
`;

const PrivacyContainer = styled.div`
  display: flex;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  color: #fff;
  font-size: 20px;
  transition: all 200ms ease-in-out;
  &:hover {
    color: #adadad;
  }
`;
export function Footer(props) {
  return (
    <FooterContainer>
      <Marginer direction="vertical" margin="5em" />
      <Logo small />

      <Marginer direction="vertical" margin="1em" />
      <MotivationalText>Just say the magical word</MotivationalText>
      <MotivationalText>and we will do the rest</MotivationalText>
      <Marginer direction="vertical" margin="1em" />
      <Button>Start your Projects</Button>
      <Marginer direction="vertical" margin="5em" />
      <Acessibilitycontainer>
        <PrivacyContainer>privacy</PrivacyContainer>
        <SocialContainer>
          <SocialIcon>
            <FontAwesomeIcon icon={faTwitter} />
          </SocialIcon>
          <SocialIcon>
            <FontAwesomeIcon icon={faLinkedin} />
          </SocialIcon>
        </SocialContainer>
      </Acessibilitycontainer>
    </FooterContainer>
  );
}
