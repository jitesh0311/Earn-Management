import React from 'react'
import {Bit2,Para, Info4Wrapper, Eth,GorillaRight, GorillaSection, GorillaSectionWrapper,
      Bit1, Info1, Info2, Info4, Info3, InfoWrapper, EthWrapper, BitWrapper, BitWrapper2,
     Email, EmailEntry, GorillaLeft,Header, Paragraph,SubImage,StyledSelect,EmailEntryWrapper,
      SubmitWrapped,CryptoCurrency} from '../../styles/Gorilla';
// import Ethereum from "../../asset/Etherium.png";
// import Bitcoin from "../../asset/Bitcoin.png";
import Crypto from "../../asset/Crypto.png"
import SubmitImage from "../../asset/Submit.png"
const Gorilla = () => {
  return (
    <GorillaSection>
        <GorillaSectionWrapper>
        <GorillaLeft>
      <Header>Guild Hub of the Metaverse</Header>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis mattis hendrerit. Praesent vel risus in risus vestibulum aliquet. </Paragraph>
      <Email>
      <EmailEntryWrapper>
      <EmailEntry type="text" name="username" placeholder="Enter your Email Address"></EmailEntry>
      </EmailEntryWrapper>
      <StyledSelect id="Role" name="">
        <option value="Owner">Owner</option>
      </StyledSelect>
      <SubmitWrapped> 
      <SubImage src={SubmitImage}/>
      </SubmitWrapped>
      </Email>
      </GorillaLeft>        
      <GorillaRight>               
         <EthWrapper>
         <CryptoCurrency src = {Crypto}/>
             </EthWrapper>
            <Info1>
            <InfoWrapper>
            <Para>
                Automate payments for quick transparent cashout?
            </Para>
            </InfoWrapper>
        </Info1>
        <Info2>
            <InfoWrapper>
            <Para>
            You mean, i can track my scholar's performance
            </Para>
            </InfoWrapper>
        </Info2>
        <Info3>
            <InfoWrapper>
            <Para>
            All on one platform that doesn't log? You're kidding
            </Para>
            </InfoWrapper>
        </Info3>
        <Info4>
        <Info4Wrapper>
            <Para>
            Search and breed Axies and NFT's
            </Para>
        </Info4Wrapper>
        </Info4> 
    </GorillaRight> 
        </GorillaSectionWrapper>
    </GorillaSection>
  )
}

export default Gorilla