import Link from 'next/link';
import React, {useState} from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
// import { DiCssdeck } from 'react-icons/di';

import { Container, Span, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  {
  const [expandNav, setExpandNav] = useState(false)
  const toggleExpandNav = () => setExpandNav(!expandNav)
  const collapseNav = () => setExpandNav(false)
  return (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px' }}>
           <img style={{borderRadius: '50%', width: '25px', height: '25px'}} src='./images/effie.jpeg' alt='Effie Richman Avatar' /> <Span style={{paddingLeft: '.75rem'}}>Effie's Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>My Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>My Tech</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>About Me</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/effierichman?tab=repositories'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/effie-richman/'>
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.instagram.com/the_feh/'>
        <AiFillInstagram size='3rem' />
      </SocialIcons>
    </Div3>
  </Container>
  )
};

export default Header;
