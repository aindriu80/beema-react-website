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
  position: relative;
`;

const MotivationalText = styled.h1`
  font-size: 25px;
  font-weight: 500;
  line-height: 1.4;
  color: #fff;
  margin: 0;
`;

const Acessibilitycontainer = styled.div`
  width: 80%;
  padding-top: 12px;
  padding-left: 8px;
  padding-right: 5px;
  display: flex;
  border-top: 1px solid #cdcdcd;
  color: #fff;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    width: 90%;
    padding-left: 5px;
    padding-right: 5px;
  }
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
  cursor: pointer;

  &:not(:last-of-type) {
    margin-right: 12px;

    @media screen and (max-width: 480px) {
      margin-right: 9px;
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }

  &:hover {
    color: #adadad;
  }
`;

const Link = styled.a`
  color: #fff;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  font-size: 14px;
  &:not(:last-of-type) {
    margin-right: 12px;

    @media screen and (max-width: 480px) {
      margin-right: 8px;
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }

  &:hover {
    color: #adadad;
  }
`;

const RightsReserved = styled.div`
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-size: 12px;
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
        <PrivacyContainer>
          <Link>Privacy Policy</Link>
          <Link>Terms of Service</Link>
          <Link>Contact</Link>
        </PrivacyContainer>
        <SocialContainer>
          <SocialIcon>
            <FontAwesomeIcon icon={faTwitter} />
          </SocialIcon>
          <SocialIcon>
            <FontAwesomeIcon icon={faLinkedin} />
          </SocialIcon>
        </SocialContainer>
      </Acessibilitycontainer>
      <RightsReserved>&#169; 2020 Beema. All rights reserved</RightsReserved>
    </FooterContainer>
  );
}
