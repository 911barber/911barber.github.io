import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowPrev from "../../assets/images/svg/arrow-left.svg";
import ArrowNext from "../../assets/images/svg/arrow-right.svg";
import ReviewsSliderItem from "./ReviewsSliderItem";
import {
  SliderSection,
  ArrowContainerPrev,
  ArrowContainerNext
} from "../Typography";
import { isMobile } from "react-device-detect";

const Reviews: React.FC = () => {
  const {
    reviews: { edges },
    slideBg: {
      childImageSharp: { fluid: slideBg }
    }
  } = useStaticQuery(graphql`
    query {
      reviews: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "review" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              person
              desc
              review
            }
          }
        }
      }
      slideBg: file(relativePath: { eq: "reviewsBg.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: true,
    nextArrow: (
      <ArrowContainerNext>
        <ArrowNext />
      </ArrowContainerNext>
    ),
    prevArrow: (
      <ArrowContainerPrev>
        <ArrowPrev />
      </ArrowContainerPrev>
    )
  };

  return (
    <>
      {!isMobile && (
        <SliderSection>
          <Slider {...settings}>
            {edges.map((item: any) => {
              const {
                node: {
                  frontmatter: { person, review, desc },
                  id
                }
              } = item;
              return (
                <ReviewsSliderItem
                  key={id}
                  fluid={slideBg}
                  review={review}
                  person={person}
                  desc={desc}
                />
              );
            })}
          </Slider>
        </SliderSection>
      )}
    </>
  );
};

export default Reviews;
