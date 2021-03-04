import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";

import { SectionTitle } from "../../components/sectionTitle/sectionTitle";
import { Marginer } from "components/marginer/marginer";
import { OurService } from "components/ourService/ourService";

import ServiceImg1 from "../../assets/illustrations/web_development_.png";
import ServiceImg2 from "../../assets/illustrations/mobile_phone.png";
import ServiceImg3 from "../../assets/illustrations/bug_fixed.png";

const ServicesContainer = styled(Element)`
  width: 100%;
  min-height: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;
export function ServicesSection(props) {
  return (
    <ServicesContainer name="servicesSection">
      <SectionTitle>Best Quality Software</SectionTitle>
      <Marginer direction="vertical" margin="3em" />
      <OurService
        title="Fully integrated services"
        description="We build and deliver fully integrated with customized control panels that fit your company needs"
        imgUrl={ServiceImg1}
      />
      <OurService
        title="Mobile optimized"
        description="We build and deliver fully integrated web apps with cus tomized control panels that fit your company needs"
        imgUrl={ServiceImg2}
        isReversed
      />
      <OurService
        title="Quality is our priority"
        description="We ahve teams of professional developers, designers and managers that ensures delivering the best software quality for your company"
        imgUrl={ServiceImg3}
      />
    </ServicesContainer>
  );
}
