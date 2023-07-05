import React from 'react'
import { DiscordImgWrapper,A,ContactNumber, Discord,  FooterBottom, FooterLink, FooterSection, FooterTop, FooterWrapper, SocialWrapper, Title, TopLeft, TopLeftContent, TopRight, WhiteDiscordImg } from '../../styles/Footer'
import DiscordImg from "../../asset/Discord.svg"
import ContactImg from "../../asset/Phone.svg"
import WhiteDiscordPic from "../../asset/discord-img.png"

const copyrightYear = new Date().getFullYear()
const Footer = () => {
  const Lists = [
    {
      title: 'Fingertips',
      links: ['Home', 'blog', 'Roadmap','Contact'],
    },
    {
      title: 'Resources',
      links: ['Discord', 'Twitter', 'facebook', 'Instagram',],
    },
    {
      title: 'About',
      links: ['Lorem','Lorem','Lorem','Lorem'],
    },
  ];

  return (
 <FooterWrapper id = "About">
  
  <FooterSection>
    <FooterTop>
      <TopLeft>
      {Lists.map((list, index) => (
        <TopLeftContent key={index}>
          <Title>{list.title}</Title>
            {list.links.map((link, linkIndex) => (
              <FooterLink key={linkIndex}>{link}</FooterLink>
            ))}
        
        </TopLeftContent>
      ))}
      </TopLeft>
      <TopRight>
        <Discord>
          <img src={DiscordImg} alt="discord" /> 
          Join us on Discord
        </Discord>
       <ContactNumber>
        <img src={ContactImg} alt="contact" />
        (239) 555-0193
       </ContactNumber>
       <SocialWrapper>
      <A href = "#"><i class="fa-brands fa-twitter"></i></A>
       <A href = "#"><i class="fa-brands fa-discord"></i></A>
      </SocialWrapper>
      </TopRight>
    </FooterTop>
    <FooterBottom>
      @CopyRight {copyrightYear}
    </FooterBottom>
  </FooterSection>
  <DiscordImgWrapper>
          <WhiteDiscordImg src = {WhiteDiscordPic} />
    </DiscordImgWrapper> 
 </FooterWrapper>
  )
}

export default Footer