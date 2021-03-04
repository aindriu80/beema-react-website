import { Marginer } from "components/marginer/marginer";
import { ReviewCard } from "components/reviewCard/reviewCard";
import { CarouselProvider, Slide, Slider } from "pure-react-carousel";
import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { SectionTitle } from "../../components/sectionTitle/sectionTitle";

import "pure-react-carousel/dist/react-carousel.es.css";

const ReviewsContainer = styled(Element)`
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export function ReviewsSection(props) {
  return (
    <ReviewsContainer>
      <SectionTitle>What others are saying about us</SectionTitle>
      <Marginer direction="vertical" margin="3em" />
      <CarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={300}
        totalSlides={2}
        visibleSlides={1}
      >
        <Slider>
          <Slide index={0}>
            <ReviewCard />
          </Slide>
          <Slide index={1}>
            <ReviewCard />
          </Slide>
        </Slider>
      </CarouselProvider>
    </ReviewsContainer>
  );
}
