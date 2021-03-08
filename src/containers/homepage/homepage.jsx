import styled from "styled-components";
import React from "react";
import { ServicesSection } from "./servicesSection";
import { TopSection } from "./topSection";
import { ReviewsSection } from "./reviewsSection";
import { Marginer } from "components/marginer/marginer";
import { MoreAboutSection } from "./moreAboutSection";
import { Footer } from "components/footer/footer";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export function Homepage(props) {
  return (
    <PageContainer>
      <TopSection />
      <ServicesSection />
      <Marginer direction="vertical" margin="2rem" />
      <ReviewsSection />
      <MoreAboutSection />
      <Marginer direction="vertical" margin="9rem" />
      <Footer />
    </PageContainer>
  );
}
