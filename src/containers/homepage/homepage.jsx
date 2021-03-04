import styled from "styled-components";
import React from "react";
import { ServicesSection } from "./servicesSection";
import { TopSection } from "./topSection";
import { ReviewsSection } from "./reviewsSection";
import { Marginer } from "components/marginer/marginer";

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
      <Marginer direction="vertical" margin="2rem" />
      <ReviewsSection />
    </PageContainer>
  );
}
