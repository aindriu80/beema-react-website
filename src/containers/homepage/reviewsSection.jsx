import { Marginer } from "components/marginer/marginer";
import { ReviewCard } from "components/reviewCard/reviewCard";
import { CarouselProvider, DotGroup, Slide, Slider } from "pure-react-carousel";
import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { SectionTitle } from "../../components/sectionTitle/sectionTitle";

import "pure-react-carousel/dist/react-carousel.es.css";

import UserImg1 from "../../assets/pictures/profile_picture_1.jpg";
import UserImg2 from "../../assets/pictures/profile_picture_2.jpg";
import UserImg3 from "../../assets/pictures/profile_picture_3.jpg";
import UserImg4 from "../../assets/pictures/profile_picture_4.jpeg";

const ReviewsContainer = styled(Element)`
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledCarouselProvider = styled(CarouselProvider)`
  width: 50%;
`;

const StyledSlide = styled(Slide)`
  .carousel__inner-slide {
    display: flex;
    justify-content: center;
  }
`;

const StyledDotGroup = styled(DotGroup)`
  margin: auto;
  display: flex;
  justify-content: center;
  button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #e4e4e4;
    border: none;
    outline: none;
    &:not(:last-of-type) {
      margin-right: 2px;
    }
  }

  .carousel__dot--selected {
    background-color: #c4c4c4;
  }
`;

export function ReviewsSection(props) {
  return (
    <ReviewsContainer>
      <SectionTitle>What others are saying about us</SectionTitle>
      <Marginer direction="vertical" margin="3em" />
      <StyledCarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={220}
        totalSlides={5}
        visibleSlides={2}
      >
        <Slider>
          <StyledSlide index={0}>
            <ReviewCard
              reviewText=" I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us."
              username="Sarah Smith"
              userImgUrl={UserImg1}
            />
          </StyledSlide>
          <StyledSlide index={1}>
            <ReviewCard
              reviewText=" I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us."
              username="John Coner"
              userImgUrl={UserImg2}
            />
          </StyledSlide>
          <StyledSlide index={2}>
            <ReviewCard
              reviewText=" I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us."
              username="Paul Wish"
              userImgUrl={UserImg3}
            />
          </StyledSlide>

          <StyledSlide index={3}>
            <ReviewCard
              reviewText=" I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us."
              username="Joe Soap"
              userImgUrl={UserImg4}
            />
          </StyledSlide>
        </Slider>
        <StyledDotGroup />
      </StyledCarouselProvider>
    </ReviewsContainer>
  );
}
