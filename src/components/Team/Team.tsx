import React from "react";
import {
  TeamSection,
  EmployeePhoto,
  EmployeeName,
  EmployeePosition
} from "./styled";
import { useStaticQuery, graphql } from "gatsby";
import {
  SectionTitle,
  SectionDescription,
  CardContainer,
  Card,
  CardInfo
} from "../Typography";

const Team: React.FC = () => {
  const {
    team: { frontmatter },
    emloyeePhoto1: {
      childImageSharp: { fluid: emloyeePhoto1 }
    },
    emloyeePhoto2: {
      childImageSharp: { fluid: emloyeePhoto2 }
    },
    emloyeePhoto3: {
      childImageSharp: { fluid: emloyeePhoto3 }
    }
  } = useStaticQuery(graphql`
    query {
      team: markdownRemark(frontmatter: { type: { eq: "team" } }) {
        frontmatter {
          title
          description
          employee1
          position1
          info1
          employee2
          position2
          info2
          employee3
          position3
          info3
        }
      }
      emloyeePhoto1: file(relativePath: { eq: "employee1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      emloyeePhoto2: file(relativePath: { eq: "employee2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      emloyeePhoto3: file(relativePath: { eq: "employee3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const {
    title,
    description,
    employee1,
    position1,
    info1,
    employee2,
    position2,
    info2,
    employee3,
    position3,
    info3
  } = frontmatter;

  return (
    <TeamSection>
      <SectionTitle>{title}</SectionTitle>
      <SectionDescription>{description}</SectionDescription>
      <CardContainer>
        <Card
          href="https://n247635.yclients.com/company:242564/master-info:704631?o=m704631&companyId=242564#reviews"
          target="blank_"
          rel="noopener noreferrer"
        >
          <EmployeePhoto fluid={emloyeePhoto1} alt="employee" />
          <EmployeeName>{employee1}</EmployeeName>
          <EmployeePosition>{position1}</EmployeePosition>
          <CardInfo>{info1}</CardInfo>
        </Card>
        <Card
          href="https://n247635.yclients.com/company:242564/master-info:713378?o=m704631&companyId=242564#reviews"
          target="blank_"
          rel="noopener noreferrer"
        >
          <EmployeePhoto fluid={emloyeePhoto2} alt="employee" />
          <EmployeeName>{employee2}</EmployeeName>
          <EmployeePosition>{position2}</EmployeePosition>
          <CardInfo>{info2}</CardInfo>
        </Card>
        <Card
          href="https://n247635.yclients.com/company:242564/master-info:704629?o=m704631&companyId=242564#reviews"
          target="blank_"
          rel="noopener noreferrer"
        >
          <EmployeePhoto fluid={emloyeePhoto3} alt="employee" />
          <EmployeeName>{employee3}</EmployeeName>
          <EmployeePosition>{position3}</EmployeePosition>
          <CardInfo>{info3}</CardInfo>
        </Card>
      </CardContainer>
    </TeamSection>
  );
};

export default Team;
