import styled from "styled-components";
import Image from "../../asset/Gorilla.png"
 
export const GorillaSection = styled.div`
    width: 100%;
    max-width: 1500px;
    display: flex;
    align-items: center;
    justify-content: center;
   
`
export const GorillaSectionWrapper = styled.div`
    width: 100%;
    max-width: 1100px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap:10px;
    padding-inline: 10px;

    @media (max-width:768px)
    {
        flex-direction: column;
    }

`

export const GorillaLeft = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (max-width:768px)
    {
        align-items: center;
        text-align: center;
    }
`
export const Header = styled.h1`
    font-size: 70px;
    color:white;

    @media (max-width:550px)
    {
        font-size: 50px;
    }

    @media (max-width:480px)
    {
        font-size: 40px;
    }
`
export const Paragraph = styled.p`
    font-size: 20px;
    color:white;

    @media (max-width:550px)
    {
        font-size: 17px;
    }

    @media (max-width:480px)
    {
        font-size: 15px;
    }
`
export const Email = styled.div`
    width: 100%;
    max-width:430px;
    padding:3px 3px 3px 15px;
    border:1px solid rgba(255, 255, 255, 0.18);
    border-radius: 60px;
    display: flex;
    justify-content:space-between;
    align-items: center;

    @media (max-width:768px)
    {
        max-width: 520px;
    }

    @media (max-width:768px)
    {
        max-width: 440px;
    }

    @media (max-width:480px)
    {
        max-width: 380px;
    }
    @media (max-width:438px)
    {
        max-width: 300px;
    }
    @media (max-width:380px)
    {
        max-width: 270px;
    }
`
export const EmailEntry = styled.input`
    font-size: 14px;
    font-weight: 400;
    color:rgba(255, 255, 255, 0.62);
    background-color: transparent;
    border:none;
    width:100%;
    max-width:200px;

    @media (max-width:438px)
    {
        font-size: 12px;
    }

`

export const EmailEntryWrapper = styled.div`
    width:100%;
    max-width: 280px;
    border-right: 1px solid gray ;
    
`
export const StyledSelect = styled.select`
    background-color: transparent;
    color: white;
    font-size: 14px;
    border:none;

    @media (max-width:380px)
    {
       font-size: 12px;
    }
`
export const SubmitWrapped = styled.div`
    border-radius: 50%;
    width:50px;
    height: 50px;
    background: linear-gradient(180deg, #107BEE 0%, #359DFD 100%);
    display:flex;
    justify-content:center;
    align-items:center;

    @media(max-width:426px){
        width:50px;
        height: 30px;
    }
`
export const SubImage = styled.img`
width:100%;
max-width:20px;
height:20px;

@media (max-width:480px)
    {
        max-width: 18px;
        height: 18px;
    }

    @media (max-width:438px)
    {
        max-width: 16px;
        height: 16px;
    }

`
;


export const GorillaRight = styled.div`
    display: grid;
    min-height: 500px;
    flex:1;
    place-content: center;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    background-image: url(${Image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    /* transform: translate(-50%, -50%); */
    animation: floating 6s ease-in-out infinite;

    @media (max-width:380px)
    {
        background-size: 600px auto;
    }



@keyframes floating {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5%);

  }
  100% {
    transform: translateY(0);
    
  }
}
    
`

export const EthWrapper = styled.div`

    display: grid;
    grid-column-start : 3;
    grid-column-end: 5;
    grid-row-start:3 ;
    grid-row-end: -1;
    place-content:  end center ;

    @media (max-width:380px){
    grid-row-start:3 ;
    grid-row-end: -1;
    place-content:  center;
    }
`
export const Para = styled.p`
    color: white;
    font-weight: 200;
    font-size: 14px;

    @media (max-width:1032px)
    {
        font-size: 13px;
    }

    @media (max-width:768px)
    {
        font-size: 14px;
    }

    @media (max-width:533px)
    {
        font-size: 12px;
    }

    @media (max-width:473px)
    {
        font-size: 11px;
    }

    @media (max-width:443px)
    {
        font-size: 10px;
    }

    @media (max-width:413px)
    {
        font-size: 9px;
    }

    @media (max-width:384px)
    {
        font-size: 8px;
    }

    @media (max-width:354px)
    {
        font-size: 7px;
    }
    @media (max-width:329px)
    {
        font-size: 6px;
    }
`
export const CryptoCurrency = styled.img`
height: 253px;
width:100%;
max-width: 250px;
@media (max-width:380px)
    {
        max-width: 200px;
        height: 203px;
    }
` 



export const Heads = styled.h1`
    color: white;
    font-size: 70px;
    font-weight: 400;
    line-height: 1;

    @media (max-width:1020px){
        font:normal normal 500 45px "Outfit",sans-serif; 
    }
`

export const Eth = styled.img`
   height: 100px;
`
export const Bit1 = styled.img`
   height: 110px;
`
export const Bit2 = styled.img`
    height: 90px;
    max-width: 85px;
    
`
export const InfoWrapper = styled.div`
    width:100%;
    max-width:200px;
    padding: 15px;
    border: 1px solid rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(40px);
    border-radius: 90px;
`
export const Info4Wrapper = styled.div`
    width:100%;
    max-width:170px;
    padding: 15px;
    border: 1px solid rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(40px);
    border-radius: 90px;
`



export const Info1 = styled.div`
    
    background: none;
    color : white;
    font-size: 14px;
    display: grid;
    place-content:end end;
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
`
export const Info2 = styled(Info1)`
    place-content:start center;
    grid-column-start: 4;
    grid-column-end: -1;
    grid-row-start: 2;
    grid-row-end: 3;
`
export const Info3 = styled(Info1)`
    place-content : start end ;
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 4;
    grid-row-end: 5;
    
`
export const Info4 = styled(Info1)`
    place-content: end center;
    grid-column-start: 4;
    grid-column-end: -1;
    grid-row-start: 3;
    grid-row-end: 5;
    place-content : center end;

`

export const A = styled.a`
    color: white;
    font-size: 18px;
    text-decoration: none;

    @media (max-width:768px)
    {
        font-size: 30px; 
        font-weight: 500;
        text-decoration: none;
    }
`