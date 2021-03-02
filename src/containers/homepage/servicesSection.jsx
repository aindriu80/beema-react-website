import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";

import { SectionTitle } from "../../components/sectionTitle/sectionTitle";

const ServicesContainer = styled(Element)`
  width: 100%;
  min-height: 500px;
  display: flex;
  flex-direction: column;
`;
export function ServicesSection(props) {
  return (
    <ServicesContainer name="servicesSection">
      <SectionTitle>Best Quality Software</SectionTitle>
    </ServicesContainer>
  );
}
