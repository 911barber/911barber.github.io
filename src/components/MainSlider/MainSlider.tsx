import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowPrev from "../../assets/images/svg/arrow-left.svg";
import ArrowNext from "../../assets/images/svg/arrow-right.svg";
import Button from "../Button";
import { SliderSectionMobile, SlideImage, StyledAmpersand } from "./styled";
import {
  H1,
  H4,
  SliderSection,
  ArrowContainerPrev,
  ArrowContainerNext,
  InnerBlock,
  SliderText
} from "../Typography";
import { MobileView } from "react-device-detect";
import MainSliderItem from "./MainSliderItem";

const MainSlider: React.FC = () => {
  const {
    mainSlider: { frontmatter },
    slides: { edges },
    mobileBg: {
      childImageSharp: { fluid: mobileBg }
    }
  } = useStaticQuery(graphql`
    query {
      mainSlider: markdownRemark(frontmatter: { type: { eq: "sliderText" } }) {
        frontmatter {
          mobileTitle
          mobileTitle2
          mobileDesc1
          mobileDesc2
          mobileDesc3
        }
      }
      slides: allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "slide" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              id
              slideTitle
              slideDesc1
              slideDesc2
              img {
                id
                childImageSharp {
                  fluid(quality: 90, maxWidth: 2000) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
          }
        }
      }
      mobileBg: file(relativePath: { eq: "mobileBg.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 450) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const {
    mobileTitle,
    mobileTitle2,
    mobileDesc1,
    mobileDesc2,
    mobileDesc3
  } = frontmatter;

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
    pauseOnHover: false,
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
      <SliderSection id="main">
        <Slider {...settings}>
          {edges
            .sort(
              (a: any, b: any) => a.node.frontmatter.id - b.node.frontmatter.id
            )
            .map((item: any, idx: number) => {
              const {
                node: {
                  frontmatter: { slideTitle, slideDesc1, slideDesc2, img },
                  id
                }
              } = item;

              return (
                <MainSliderItem
                  idx={idx}
                  key={id}
                  fluid={img.childImageSharp.fluid}
                  title={slideTitle}
                  desc1={slideDesc1}
                  desc2={slideDesc2}
                />
              );
            })}
        </Slider>
      </SliderSection>
      <MobileView>
        <SliderSectionMobile id="main">
          <SlideImage fluid={mobileBg} alt="background" />
          <InnerBlock>
            <SliderText>
              <H1>{mobileTitle}</H1>
              <StyledAmpersand>&amp;</StyledAmpersand>
              <H1 as="h2">{mobileTitle2}</H1>
              <H4>{mobileDesc1}</H4>
              <H4>{mobileDesc2}</H4>
              <H4>{mobileDesc3}</H4>
              <Button
                link="https://n247635.yclients.com/company:242564?o=m704631"
                dataBack="Online запись"
                dataFront="Online запись"
              />
            </SliderText>
          </InnerBlock>
        </SliderSectionMobile>
      </MobileView>
    </>
  );
};

export default MainSlider;
