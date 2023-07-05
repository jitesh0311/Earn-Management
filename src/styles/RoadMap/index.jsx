import styled from "styled-components";
import Infinity from "../../asset/Infinity.png";

export const RoadMapSection = styled.div`
    width:100%;
    max-width: 1300px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 3px solid rgba(255, 255, 255, 0.12);
    flex-direction: column;
`
export const RoadMapSectionWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    padding-left: 70px;
    padding-right: 85px;
    display: flex;
    align-items: center;
    justify-content: center;
    
   
    
    @media (max-width:526px)
        {
            padding-left:50px;
            padding-right: 65px;
        }
    @media (max-width:480px)
        {
            padding-left:50px;
        }
    
     @media (max-width:435px)
        {
            padding-left:50px;
        } 
    
    @media (max-width:380px)
        {
            padding-left:45px;
            
        }
   
`
export const RoadMapSectionContent = styled.div`
    width: 100%;
    padding: 0px 60px;
    max-width: 1000px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
   
    @media (max-width:526px)
        {
            padding-inline:40px;
        }

        @media (max-width:480px)
        {
            
            padding-left:40px; 
            padding-right: 20px;
        }
    @media (max-width:380px)
        {
           
            padding-left:30px;
            padding-right:15px;
        }
    @media (max-width:336px)
        {
            padding-left:20px;
            padding-right:10px;
        }
    /* @media (max-width:320px)
        {
            padding-inline:40px;
        } */
  
  
`
export const RoadMapIntro = styled.div`
    width: 100%;
    max-width: 850px;
    min-height: 500px;
    /* padding: 0px 60px; */
   
    /* border-bottom : 3px solid rgba(255, 255, 255, 0.12); */

    display: flex;
    flex-direction: column;
    position: relative;
    &::before{
        content: " ";
        width: 100%;
        max-width: 238px;
        min-height: 23px;
        border-top: 3px solid rgba(255, 255, 255, 0.12);
        border-top-right-radius: 30px;
        position: absolute;
        left:-238px;
        /* left: 0px; */
        top:-22px; 

        @media (max-width:435px)
        {
            min-width: 237px;
        }
        
        
        @media (max-width:380px)
        {
            min-width: 237px;
        }

        
        @media (max-width:336px)
        {
            min-width: 236px;
        }
    }
`

export const RoadmapIntroTop = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-left: 50px;
    border-left: 3px solid rgba(255, 255, 255, 0.12);

    @media (max-width:321px)
    {
        min-height: 90px;
    }
`
export const RoadmapTitle = styled.h1`
    font-size: 80px;
    font-weight: 500;
    color: white;



    @media (max-width:543px)
    {
        font-size: 50px;
    }

    @media (max-width:426px)
    {
        font-size: 43px;
    }

    @media (max-width:376px)
    {
        font-size: 37px;
    }

    @media (max-width:321px)
    {
        font-size: 26px;
    }

`

export const RoadMapDesc = styled.p`
    font-size: 18px;
    color: white;

    @media (max-width:780px)
    {
        font-size: 16px;
    }

    @media (max-width:526px)
    {
        font-size: 16px;
    }

    @media (max-width:426px)
    {
        font-size: 15px;
    }

    @media (max-width:376px)
    {
        font-size: 12px;
    }

    @media (max-width:321px)
    {
        font-size: 13px;
    }
`
export const RoadmapIntroBottom = styled.div`
    width: 100%;
    max-width: 890px;
    min-height: 500px;
    display: flex;
    align-self: center;
    align-items: center;
    border-left: 3px solid rgba(255, 255, 255, 0.12);
    border-bottom : 3px solid rgba(255, 255, 255, 0.12);
    border-bottom-left-radius: 30px;
    

    @media (max-width:856px)
    {
        flex-direction: column-reverse;
    }

`
export const RoadmapIntroBottomLeft = styled.div`
   width: 100%;
   max-width: 600px;
   display:flex;
   position: relative;
   padding-right: 30px;

   @media (max-width:656px)
   {
      max-width: 650px;
   }

`


export const Description = styled.div`
     width: 100%;
     max-width: 430px;
     display: flex;
     justify-content: flex-start;
     /* align-items: center; */
     flex-direction: column;
     padding-left: 150px;

    @media (max-width:856px)
     {
        padding-bottom: 50px;
     }

    @media (max-width:656px)
   {
      max-width: 650px;
   }

    @media (max-width:622px)
    {
        padding-left: 140px;
        max-width: 670px;
    }

    @media (max-width:580px)
    {
        padding-left: 130px;
        max-width: 690px;
    }

    @media (max-width:510px)
    {
        padding-left: 90px;
    }

    @media (max-width:420px)
    {
        padding-left: 70px;
    }  
`

export const Year = styled.h1`
        font-size: 70px;
        font-weight: 100;
        color: white;

    @media (max-width:610px)
    {
        font-size : 60px;
    }
    @media (max-width:510px)
    {
        font-size : 50px;
    }

    @media (max-width:476px)
    {
        font-size : 40px;
    }

    @media (max-width:352px)
    {
        font-size : 30px;
    }

`
export const Quarter = styled.h3`
    font-size: 33px;
    font-weight: 500;
    color: rgb(21, 196, 198);

    @media (max-width:610px)
    {
        font-size : 25px;
    }
   
    @media (max-width:510px)
    {
        font-size : 22px;
    }

    @media (max-width:352px)
    {
        font-size : 15px;
    }
`
export const QuarterDesc = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.39);

    @media (max-width:610px)
    {
        font-size : 15px;
    }

    @media (max-width:510px)
    {
        font-size : 14px;
    }

    @media (max-width:510px)
    {
        font-size : 12px;
    }

    @media (max-width:352px)
    {
        font-size : 10px;
    }
`

export const Timestamp = styled.div`
    width: 100%;
    max-width: 600px;
    position: absolute;
    left: -170px;
    top : -20px;
    padding-left: 10px;

    @media (max-width:856px)
    {
        top : -20px; 
        left : -170px;
    }

    @media (max-width:619px)
    {
        min-width: 330px;
        /* left: -150px; */
        /* padding-inline: 30px; */
    }
    
    @media (max-width:526px)
    {
        min-width: 300px;
        left: -150px;
        padding-inline: 30px;
    }

    @media (max-width:510px)
    {
        top : -10px; 
        /* left : -170px; */
    }

    @media (max-width:480px)
    {
        max-width: 250px;
        left: -150px;
        padding-inline: 30px;
    }
    @media (max-width:420px)
    {
        max-width: 230px;
        left: -120px;
        padding-right: 80px;
    }

    @media (max-width:382px)
    {
        /* max-width: 230px; */
        left: -140px;
        padding-left: 60px;
    }


`
export const TimestampImg = styled.img`
    width:100%;
    max-width :350px;
`

export const RoadmapIntroBottomRight = styled.div`

    width: 100%;
    max-width: 300px;
    display: flex;
    min-height: 400px;
    /* padding-right:60px; */
`
export const InfinityImg = styled.div`
width:100%; 
background-image: url(${Infinity});
background-position: center -85px;
background-repeat: no-repeat;
background-size: cover;
padding-left:15px;

@media (max-width:856px)
{
    background-position: center;
    background-size: 520px auto;
}




@media (max-width : 426px)
    {
        background-size: 390px auto;
        background-repeat: no-repeat;
    }

    @media (max-width : 376px)
    {
        background-size: 360px auto;
    }

  

    @media (max-width : 321px)
    {
        background-size: 290px auto;
    }



`
////////////////////////////////////////TIMELINE////////////////////////////////////////

export const BlackBoxWrapperQuarterRight = styled.div`
    width:100%;
    max-width:200px;
    position: absolute;
    right:-80px;

    @media (max-width:526px)
    {
        right:-103px;
    }

    @media (max-width:414px)
    {
        right: -80px;
    }

    @media (max-width:382px)
    {
        right: -71px;
    }
    
    @media (max-width:338px)
    {
        right:-42px;
    }

    @media (max-width:338px)
    {
        right:-53px;
    }
`
export const BlackBoxWrapperQuarterLeft = styled.div`
    width:100%;
    max-width:200px;
    position: absolute;
    left:-125px;

    @media (max-width:526px)
    {
        left: -100px;
    }

    @media (max-width:414px)
    {
        left: -85px;
    }

    @media (max-width:382px)
    {
        left: -75px;
    }

    @media (max-width:338px)
    {
        left:-60px;
    }
    
    
`

export const BlackBoxImg = styled.img`
    max-width:250px;

    @media (max-width:526px)
    {
        max-width: 200px;
    }

    @media (max-width:414px)
    {
        max-width: 160px;
    }

    @media (max-width:382px)
    {
        max-width: 140px;
    }

    @media (max-width:338px)
    {
        max-width: 120px;
    }
` 

export const QuarterTwo = styled.div`
    border-right: 3px solid rgba(255, 255, 255, 0.12);
    border-left: none;
    border-bottom: none;
    min-height: 200px;
    border-radius: 0px 20px 20px 0px;
    width: 100%;
    max-width: 853px;
    position: relative;
    right:-13px;
    display: flex;
    justify-content: flex-end;
`
export const QuarterTwoWrapper = styled.div`
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: right;
    padding-right: 120px;

    @media (max-width:526px)
    {
        padding-right: 100px;
    }

    @media (max-width:414px)
    {
        padding-right: 80px;
    }
`
export const QuarterThreeWrapper = styled.div`
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    justify-content:center;
    text-align: left;
    padding-left:120px;

    @media (max-width:526px)
    {
        padding-left: 100px;
    }
    
    @media (max-width:414px)
    {
        padding-left: 80px;
    }

`
    
export const QuarterThree = styled.div`
    border-top: 3px solid rgba(255, 255, 255, 0.12);
    border-bottom: 3px solid rgba(255, 255, 255, 0.12);
    border-left: 3px solid rgba(255, 255, 255, 0.12);
    border-right: none;
    border-radius: 20px 0px 0px 20px;
    width: 100%;
    max-width: 845px;
    min-height: 200px;
    position: relative;
    display: flex;
    justify-content: center;
    /* left:-10px; */

`

export const QuarterFour = styled(QuarterTwo)``

export const QuarterFourWrapper = styled(QuarterTwoWrapper)`
`

export const QuarterOneTwentyThree = styled(QuarterThree)``

export const QuarterOneTwentyThreeWrapper = styled(QuarterThreeWrapper)``

export const QuarterTwoTwentyThree = styled(QuarterTwo)`
  border-bottom: 3px solid rgba(255, 255, 255, 0.12);
`
export const QuarterTwoTwentyThreeWrapper = styled(QuarterTwoWrapper)`
`

export const TimelineYear = styled.h1`
font-size: 70px;
font-weight: 100;
color: white;

@media (max-width:610px)
{
    font-size: 60px;
}

@media (max-width:526px)
{
    font-size: 50px;
}

@media (max-width:476px)
{
    font-size: 40px;
}

@media (max-width:352px)
    {
        font-size : 30px;
    }

`

export const TimelineQuarter = styled.h3`
    font-size: 33px;
    font-weight: 500;
    color: rgb(21, 196, 198);

    @media (max-width:596px)
{
    font-size: 25px;
}
   
    @media (max-width:476px)
{
    font-size: 22px;
} 

@media (max-width:352px)
    {
        font-size : 15px;
    }

`

export const TimelineDescription = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.39);

    @media (max-width:610px)
{
    font-size: 15px;
}
 
   
    @media (max-width:510px)
{
    font-size: 12px;
} 

@media (max-width:352px)
{
    font-size: 10px;
} 
`

///////////////////Contact us////////////////////////////////////////////////////////////////////////////////////////

export const ContactUs = styled.div`
    display: flex;
    max-width: 1000px;
    width: 100%;
    justify-content: center;
    align-self: center;
    position: relative;
    left:-20px;
    bottom:2px;
    padding-inline:70px;
    
    &::before{
    content: "";
    position: absolute;
    width: 100%;
    max-width: 58px;
    height: 50px;
    top:0px;
    left:99px;
    border-top : 2px solid rgba(255, 255, 255, 0.12);

    @media (max-width:1441px)
    {
        max-width: 0px;
        top:0px;
    }
    @media (max-width:1025px)
    {
        max-width: 52px;
        top:0px;
    }
    @media (max-width:769px)
    {
        max-width: 65px;
        top:0px;
    }
    @media (max-width:426px)
    {
        max-width: 24px;
        top:0px;
    }
    @media (max-width:376px)
    {
        max-width: 9px;
        
    }
    @media (max-width:320px)
    {
        max-width: 0px;
        top:0px;
    }
  }
`

export const ContactUsWrapper = styled.div`
    border-left: 3px solid rgba(255, 255, 255, 0.12);
    border-top-left-radius: 30px;
    display: flex;
    /* position: relative;
    bottom: 2px;
    left: -30px; */
    flex-direction: column;
    gap: 100px;
    width:100%;
    max-width: 845px;
    padding: 50px;
    /* min-height:100px; */

    @media (max-width:321px)
    {
        padding: 30px;
        gap:50px;
    }
`
export const ContactTop = styled.div`
display: flex;
flex-direction: column;
 gap: 25px;
`
export const ContactMid = styled.div`
    display: flex;
    width: 100%;
    max-width: 730px;
    -webkit-box-pack: justify;
    /* justify-content: space-between; */
    gap:50px;

    @media (max-width:780px)
{
    flex-direction: column;
}
`
export const MidLeft = styled.div`
    display: flex;
    gap: 35px;
    flex-direction: column;
`
export const EarnMgtLink = styled.a`
color: rgb(255, 255, 255);
font-size: 25px;

@media (max-width:426px)
    {
        font-size: 18px;
    }
    @media (max-width:376px)
    {
        font-size: 16px;
    }

    @media (max-width:321px)
    {
        font-size: 14px;
    }
`
export const ContactNumber = styled.p`
color: rgb(255, 255, 255);
font-size: 25px;

@media (max-width:426px)
    {
        font-size: 17px;
    }
    @media (max-width:376px)
    {
        font-size: 14px;
    }

    @media (max-width:321px)
    {
        font-size: 13px;
    }

span{
    color: #6C6C6C;

    @media (max-width:426px)
    {
        font-size: 17px;
    }

    @media (max-width:376px)
    {
        font-size: 15px;
    }

    
    @media (max-width:321px)
    {
        font-size: 12px;
    }

}
`
export const MidRight = styled.div`
display: flex;
flex-direction: column;
gap: 30px;
width: 100%;
max-width: 600px;

@media (max-width:780px)
{
    flex-direction: column;
}

`
export const Details = styled.input`
    font-size: 18px;
    height: 35px;
    border-top: none;
    border-right: none;
    border-left: none;
    border-image: initial;
    border-bottom: 1px solid rgb(108, 108, 108);
    background-color: transparent;
    color: rgba(255, 255, 255, 0.39);
    font-size: 16px;
    line-height: 25px;
    /* padding-left: 10px; */
    max-width: 500px;
    width: 100%;
    
    @media (max-width:950px)
    {
        min-width:250px;
        /* background-color: red; */
    }

    @media (max-width:426px)
    {
        font-size: 15px;
    }

    @media (max-width:376px)
    {
        font-size: 13px;
        min-width: 200px;
    }

    
    @media (max-width:321px)
    {
        font-size: 11px;
        min-width: 150px;
    }
    `

export const ContactBottom = styled.button`
    width: 150px;
    height: 150px;
    border-radius: 158px;
    background: linear-gradient(180deg, #107BEE 0%, #359DFD 100%);
    align-self: flex-end;
    color: rgb(255, 255, 255);
    font-size: 16px;
    text-align: center;
    cursor: pointer;
    font-weight: 700;
    border: none;

    &:hover{
        background: rgba(53, 157, 253, 0.333);
        color: rgb(108, 108, 108);
    }

    @media (max-width:426px)
    {
        width: 100px;
        height: 100px;
    }

    @media (max-width:321px)
    {
        width: 90px;
        height: 90px;
    }
`
