import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import {
  H1,
  SecondButton,
  FlexColumnCenterCenter
} from "../components/Typography";

const Main = styled.div`
  ${FlexColumnCenterCenter}
  margin: 0 auto;
  width: 80%;
  height: 75vh;
  @media (max-width: 1200px) {
    height: 50vh;
  }
  @media (max-width: 767px) {
    height: 50vh;
  }
  @media (max-width: 360px) {
    height: 55vh;
  }
`;

const Title = styled(H1)`
  font-size: 2.5rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin: 1.8rem 0;
  color: grey;
  @media (max-width: 767px) {
    font-size: 1rem;
    margin: 1.5rem 0;
  }
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Main>
      <Title>Ошибка 404</Title>
      <Description>Страница не найдена</Description>
      <SecondButton href="/">Back to homepage</SecondButton>
    </Main>
  </Layout>
);

export default NotFoundPage;
