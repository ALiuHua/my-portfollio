import React from "react";
import { HeroContainer, Section } from "./Hero.elemens";
import { HeadingPrimary } from "../../styles/Typo.Elements";
const Hero = () => {
  return (
    <Section>
      <HeroContainer margin="30px" position={"absolute"}>
        <HeadingPrimary>
          Hi, I'm Andy Liu.
          <br />A front-end developer.
        </HeadingPrimary>
        <p>
          I love spending hours and hours building things, resolving problems,
          and learning new technologies. Programing makes me a happy man
        </p>
      </HeroContainer>
    </Section>
  );
};
export default Hero;
