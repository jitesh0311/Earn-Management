import React,{useState} from 'react'
import {Earn, Head, Nav, NavLeft, NavMiddle, NavRight,Bars, ExtendedNavBar, ExtendedSocialMedia,A } from '../../styles/Header'
import Logo from "../../asset/Logo.png";



const Header = () => {
  const Links = [{id:"#roadmap",name:"RoadMap",},
               {id:"#contact",name:"Contact"},{id:"#About",name:"About"} ];
  const [extendNavBar,setExtendNavBar] = useState(false);

  extendNavBar?document.body.style.overflow="hidden":document.body.style.overflow="auto";
  return (
    <Head>
      <Nav>
        <NavLeft>
        <Earn src = {Logo} alt="Logo" />
        </NavLeft>
        <NavMiddle>
          {Links.map((link,index) => (
          
            <a href={link.id} key={index}>{link.name}</a>
          ))}
          {/* <A href = "#">RoadMap</A> */}
        </NavMiddle>
        <NavRight>
        <A href = "#"><i className="fa-brands fa-discord"></i></A>
        <A href = "#"><i className="fa-brands fa-twitter"></i></A>
        </NavRight>
        <Bars 
        onClick = {() => {
          setExtendNavBar((curr) => !curr);
  
        }}
        >
         {extendNavBar ? <>&#10005;</> : <>&#8801;</>} 
        </Bars>
        {extendNavBar && (
        <ExtendedNavBar>
            {Links.map(link => {
            return(
            <A key = {link.id} href={link.name}>{link.name}</A>)
          })}
            <ExtendedSocialMedia>
            <A href = "#"><i class="fa-brands fa-discord"></i></A>
            <A href = "#"><i class="fa-brands fa-twitter"></i></A>
            </ExtendedSocialMedia>
        </ExtendedNavBar>
        )}
      </Nav>
    </Head>
  )
}

export default Header;