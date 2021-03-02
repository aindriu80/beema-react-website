import styled from "styled-components";
import React from "react";
import { ServicesSection } from "./servicesSection";
import { TopSection } from "./topSection";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export function Homepage(props) {
  return (
    <PageContainer>
      <TopSection />
      <ServicesSection />
    </PageContainer>
  );
}
