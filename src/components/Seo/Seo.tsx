import React, { FC } from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

type Props = {
  description?: string;
  lang?: string;
  title?: string;
};

const SEO: FC<Props> = ({ description = ``, lang = `ru`, title = `` }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            telegramUsername
            image
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const metaKeywords = [
    "BarberShop",
    "мужская парикмахерская",
    "барбершоп минск",
    "barbershop",
    "барбершоп",
    "стрижка бороды",
    "Белорусский Центр Моды",
    "индивидуальное обучение",
    "barbieshop"
  ];

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: "description",
          content: metaDescription
        },
        {
          property: "og:title",
          content: title
        },
        {
          property: "og:description",
          content: metaDescription
        },
        {
          property: "og:type",
          content: "website"
        },
        {
          property: "og:image",
          content: site.siteMetadata.image
        },
        {
          property: "og:locale",
          content: "ru_BY"
        },
        {
          property: "og:url",
          content: site.siteMetadata.siteUrl
        },
        {
          name: "twitter:card",
          content: "summary"
        },
        {
          name: "twitter:creator",
          content: site.siteMetadata.author
        },
        {
          name: "twitter:title",
          content: title
        },
        {
          name: "twitter:description",
          content: metaDescription
        },
        {
          name: "google-site-verification",
          content: "A8j2LcIblv_czJ1CpYdSARppLQ3Bx9SgzBLLIA4GPjk"
        }
      ].concat({ name: "keywords", content: metaKeywords.join(",") })}
    />
  );
};

export default SEO;
