import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Welcome to <br />
        Effie Richman's Portfolio
      </SectionTitle>
      <SectionText>
        I am a Software Engineer based in New York. With experience both as a
        supervisor and a software developer, I have the capacity to address and
        solve difficult problems with innovation and efficiency.
      </SectionText>
      {/* <Button onClick={() => window.location = '#about'}>Learn More</Button> */}
    </LeftSection>
  </Section>
);

// JavaScript, ReactJS, NextJS, Tailwind CSS, React Native, Flutter, Dart, Ruby on Rails, Express, and SQL are some of the many tools I use in every day coding.
// We use NextJS, Vercel, Flutter, Dart and other tools to create web and mobile applications that are fast and user friendly.'

export default Hero;
