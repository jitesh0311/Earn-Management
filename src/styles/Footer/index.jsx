import styled from "styled-components";

export const FooterWrapper = styled.div`
    width: 100%;
    align-self: center;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    padding: 25px 0px 0px;
    position: relative;
`
export const FooterSection = styled.div`
    min-height: 300px;
    width: 100%;
    max-width: 1000px;
    color: rgb(255, 255, 255);
  
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    justify-content: space-around;

 
`
export const FooterTop = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    -webkit-box-align: center;
    align-items: center;
    gap: 40px;

    
    @media (max-width:768px)
    {
        flex-direction: column;
        padding-bottom: 13px;
    }
`
export const TopLeft = styled.div`
display: flex;
gap: 60px;

    @media (max-width: 321px){
        gap: 30px;
    } 
`

export const TopLeftContent = styled.div`
display: flex;
gap: 20px;
flex-direction: column;
text-align: left;
`
export const Title = styled.h3`
color: rgb(255, 255, 255);
`
export const FooterLink = styled.a`
color: rgb(255, 255, 255);

&:hover{
    color: rgb(57,144,172);
}
`
export const TopRight = styled.div`
display: flex;
gap: 30px;
flex-direction: column;


@media (max-width:768px)
    {
        gap:20px;
    }
`
export const Discord = styled.h3`
    color:#5865F2;
    display: flex;
    font-size: 20px;
    -webkit-box-align: center;
    align-items: center;
    gap: 20px;

    
    @media (max-width:768px)
    {
        font-size: 18px;
    }
`
export const ContactNumber = styled.h3`
    color:white;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    gap: 20px;

    @media (max-width:768px)
    {
        font-size: 16px;
        justify-content: center;
    }
`

export const FooterBottom = styled.div`
    display: flex;
    width: 100%;
    background-color: transparent;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;

    @media (max-width:768px)
    {
        font-size: 14px;
    }
`
export const SocialWrapper = styled.div`
    display:flex;
    gap: 25px;

    @media (max-width:768px)
    {
        gap:15px;
        justify-content: center;
        
    }
`

export const A = styled.a`
    color: white;
    font-size: 25px;
    text-decoration: none;

`


export const DiscordImgWrapper = styled.div`
   position: absolute;
   right: 10px;
   bottom:5px;

  
`

export const WhiteDiscordImg = styled.img`
    @media (max-width:426px)
   {
     width: 105px;
   }
   @media (max-width:376px)
   {
     width: 80px;
   }

   @media (max-width:321px)
   {
     width: 70px;
   }
`