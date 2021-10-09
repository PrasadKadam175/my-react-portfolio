import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, There <br />
        My Name is Prasad.
      </SectionTitle>
      <SectionText>
        I am web developer who like to develope Awesome website. 
      </SectionText>
      <Button onClick={() => window.location = 'https://drive.google.com/file/d/1rReHTseAynJ15NaTSXHvDtgT_2mzQZxB/view?usp=sharing'}>Download CV</Button>
    </LeftSection>
  </Section>
);

export default Hero;