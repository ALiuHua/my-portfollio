import React from "react";
import { Container } from "../../styles/Container.styled";
import { FlexContainer } from "../../styles/FlexContainer.styled";
import { HeadingPrimary, HeadingSecondary } from "../../styles/Typo.Elements";
import { ImageWrapper } from "./About.Elements";
const About = () => {
  return (
    <>
      <section>
        <Container textAlign="center">
          <HeadingPrimary>About me</HeadingPrimary>
          <p>
            Hello! My name is Andy Liu, a self-taught front-end developer living
            in sydney.
          </p>
        </Container>

        <FlexContainer>
          <ImageWrapper>
            <img src="./images/about/mails.png" alt="mail" />
          </ImageWrapper>
          <div>
            <HeadingSecondary>
              I'm the one you'd like to work with
            </HeadingSecondary>
            <p>
              I’m a hard working and dedicated person with a determination to
              deliver the very highest quality. I take great pride in my work,
              and I always try to better myself with every project I work on.
            </p>
          </div>
        </FlexContainer>
        <FlexContainer layout="row-reverse">
          <ImageWrapper>
            <img src="./images/about/tools.png" alt="tools" />
          </ImageWrapper>
          <div>
            <HeadingSecondary>
              I like to dream more, learn more and become more.
            </HeadingSecondary>
            <p>
              Since I wrote my first 'hello world' in HTML, I have gained
              experience in:
            </p>
            <ul>
              <li>
                Building Front-End Web Applications ( HTML, JavaScript ES6,
                React, Next.js, Vue)
              </li>
              <li>
                Applying various CSS solutions( Styled-components, Tailwind CSS,
                Sass, CSS modules)
              </li>
              <li>Building Back-End database(MongoDB, Firebase)</li>
              <li>Interacting with database(REST APIs, Apollo GraphQL )</li>
              <li>Version Control tools(Git, Github)</li>
            </ul>

            <p>
              I’m also a fast learner, able to pick up new skills and juggle
              different projects with relative ease.
            </p>

            <p>The following are things I'm planning to learn this year:</p>
            <ul>
              <li>TypeScript</li>
              <li>Testing</li>
            </ul>
          </div>
        </FlexContainer>
        <FlexContainer>
          <ImageWrapper>
            <img src="./images/about/typewriter.png" alt="typewriter" />
          </ImageWrapper>
          <div>
            <HeadingSecondary>
              I'm always open to job opportunities and new connections.
            </HeadingSecondary>
            <p>
              Shoot me over an email, have a look at my resume, or just&nbsp;
              talk &nbsp;with me!
            </p>
          </div>
        </FlexContainer>
      </section>
    </>
  );
};

export default About;
