import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Cell</LinkTitle>
          <LinkItem href="tel:347-681-2690">Call Me</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:effierichman@gmail.com?subject=Email from Portfolio">
          Email Me
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Hard Working and Innovative</Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href='https://github.com/effierichman?tab=repositories'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/effie-richman/'>
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.instagram.com/the_feh/'>
        <AiFillInstagram size='3rem' />
      </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
