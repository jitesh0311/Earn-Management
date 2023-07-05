import styled from "styled-components";

export const Head = styled.div`
    width: 100%;
    max-width: 1500px;
    display:flex;
    align-items: center;
    justify-content: center;
    min-height: 100px;
    
`
export const Nav = styled.div`
    width: 100%;
    max-width: 1400px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
`   

export const NavLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Earn = styled.img`

`

export const NavMiddleRight = styled.div`
    width: 100%;
    max-width: 800px;
    display: flex;
    justify-content: space-between;

    @media (max-width:768px)
    {
        display: none;
    }

`
 export const A = styled.a`
      color: white;
   font-size: 25px;
   text-decoration: none;
   position: relative;

    @media (max-width:768px)
   {
        font-size: 1px; 
        font-weight: 500;
       text-decoration: none;
         font-size : 30px;
     }

   &::after {
     content: '';
     position: absolute;
   bottom: -8px;
   left: 0;
   width: 100%;
   height: 2px;
   background-color: transparent;
   transition: background-color 0.2s ease-in-out;
 }

  &:hover::after {
   background-color: white;
   } 
`

export const NavMiddle = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        gap : 30px;

        a{
            color: white;
   font-size: 25px;
   text-decoration: none;
   position: relative;

    @media (max-width:768px)
   {
        display: none;
     }



   &::after {
     content: '';
     position: absolute;
   bottom: -8px;
   left: 0;
   width: 100%;
   height: 2px;
   background-color: transparent;
   transition: background-color 0.2s ease-in-out;
 }

  &:hover::after {
   background-color: white;
   } 
    @media (max-width:768px){

        font-size: 1px;
        font-weight: 500;
       text-decoration: none;
         font-size : 30px;
      
    }
}
`
export const NavRight = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 15px;
        border: 1px solid rgba(255, 255, 255, 0.17);
        border-radius: 30px;
        gap:20px;

        
        @media (max-width:768px)
        {
            display : none;
        }
`
export const Bars = styled.button`
    display: none;

    @media (max-width:768px)
    {
        display: flex;
        max-width: 70px;
        min-height: 50px;
        background: none;
        font-size:45px;
        cursor: pointer;
        border: none;
        z-index: 5;
        color:white;
    }
    
    @media (max-width:426px){
        font-size: 30px;
    }
    `
export const ExtendedNavBar = styled.div`
    display: none;
    
    @media (max-width:768px)
    {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #020404;
        position: absolute;
        top:90px;
        left:0px;
        min-height: 660px;
        width: 100%;
        max-width: 768px;
        gap:40px;
        transition: .4s;
        z-index:8;
    }

    @media (max-width:426px)
    {
        min-height: 550px;
    }
`


export const ExtendedSocialMedia = styled.div`
    display: none;

    @media (max-width:768px)
    {
        display: flex;
        gap:20px;
    }
`





