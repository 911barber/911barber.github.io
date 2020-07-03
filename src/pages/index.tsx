import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import MainSlider from "../components/MainSlider";
import Training from "../components/Training";
import PriceList from "../components/PriceList";
import InstagramGallery from "../components/InstagramGallery";
import Reviews from "../components/Reviews";
import Contacts from "../components/Contacts";
import YouTube from "../components/YouTube";

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Барбершоп 911 Минск" />
    <MainSlider />
    <Contacts />
    <PriceList />
    <Training />
    <InstagramGallery />
    <YouTube />
    <Reviews />
  </Layout>
);

export default IndexPage;
