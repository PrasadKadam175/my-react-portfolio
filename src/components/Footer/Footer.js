import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
        <LinkTitle>Call</LinkTitle>
        <LinkItem href="">Contact</LinkItem>
        </LinkColumn>
        <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:kadamprasad175@gmail.com">kadamprasad175</LinkItem>
        </LinkColumn>
      </LinkList>
      <CompanyContainer>
        <Slogan>Think, Coffee, Solve.</Slogan>
      </CompanyContainer>
      <SocialIconsContainer>
      <SocialIcons href="https://github.com/PrasadKadam175">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/prasad-kadam-5b318a190?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B8CDeT1GUQ4mar7r4%2BtCbWg%3D%3D">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/prasad_9174_">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
