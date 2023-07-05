import React from 'react'
import { BlackBoxImg, BlackBoxWrapperQuarterLeft, BlackBoxWrapperQuarterRight, ContactBottom, ContactMid, ContactNumber, ContactTop, ContactUs, ContactUsWrapper, Description, Details, EarnMgtLink , InfinityImg, MidLeft, MidRight, Quarter, QuarterDesc, QuarterFour, QuarterFourWrapper, QuarterOneTwentyThree,QuarterOneTwentyThreeWrapper,QuarterThree, QuarterThreeWrapper, QuarterTwo, QuarterTwoTwentyThree, QuarterTwoTwentyThreeWrapper, QuarterTwoWrapper, RoadMapDesc, RoadMapIntro, RoadMapSection,RoadMapSectionContent, RoadMapSectionWrapper, RoadmapIntroBottom, RoadmapIntroBottomLeft, RoadmapIntroBottomRight,
     RoadmapIntroTop, RoadmapTitle,TimelineDescription, TimelineQuarter, TimelineYear, Timestamp, TimestampImg,Year } from '../../styles/RoadMap'
import Bluetimestamp from "../../asset/BlueTimestamp.png"
import BlackBox from "../../asset/Blackbox.png"
const Roadmap = () => {
  return (
    <RoadMapSection id = "roadmap">
        <RoadMapSectionWrapper>
            <RoadMapSectionContent>
                <RoadMapIntro>
                    <RoadmapIntroTop>
                        <RoadmapTitle>
                            Road Map
                        </RoadmapTitle>
                        <RoadMapDesc>
                        Lorem ipsum dolor sit amet, consectetur adiposcing elit.
                        </RoadMapDesc>
                    </RoadmapIntroTop>
                    <RoadmapIntroBottom>
                        <RoadmapIntroBottomLeft>
                            <Timestamp>
                                <TimestampImg src = {Bluetimestamp}/>
                            </Timestamp>
                            <Description>
                                <Year>
                                   2022
                                </Year>
                                <Quarter>
                                    Q1
                                </Quarter>
                                <QuarterDesc>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id purus augue. Lorem ipsum dolor
                                </QuarterDesc>
                            </Description>
                        </RoadmapIntroBottomLeft>
                        <RoadmapIntroBottomRight>
                         <InfinityImg></InfinityImg>      
                        </RoadmapIntroBottomRight>
                    </RoadmapIntroBottom>
                </RoadMapIntro>
                        <QuarterTwo>
                            <QuarterTwoWrapper>
                           <BlackBoxWrapperQuarterRight>
                                <BlackBoxImg src = {BlackBox} alt = "BlackBox"/>
                            </BlackBoxWrapperQuarterRight>  
                            <TimelineYear>2022</TimelineYear>
                        <TimelineQuarter>Q2</TimelineQuarter>
                        <TimelineDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id purus augue. Lorem ipsum dolor </TimelineDescription>
                        </QuarterTwoWrapper>
                    </QuarterTwo>
                    <QuarterThree> 
                        <QuarterThreeWrapper>
                        <BlackBoxWrapperQuarterLeft>
                                <BlackBoxImg src = {BlackBox} alt = "BlackBox"/>
                            </BlackBoxWrapperQuarterLeft>  
                        <TimelineYear>2022</TimelineYear>
                        <TimelineQuarter>Q3</TimelineQuarter>
                        <TimelineDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id purus augue. Lorem ipsum dolor </TimelineDescription>
                        </QuarterThreeWrapper>
                        </QuarterThree>
                    <QuarterFour> 
                        <QuarterFourWrapper>
                            <BlackBoxWrapperQuarterRight>
                                <BlackBoxImg src = {BlackBox} alt = "BlackBox"/>
                            </BlackBoxWrapperQuarterRight>
                        <TimelineYear>2022</TimelineYear>
                        <TimelineQuarter>Q4</TimelineQuarter>
                        <TimelineDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id purus augue. Lorem ipsum dolor </TimelineDescription>
                        </QuarterFourWrapper>
                        </QuarterFour>
                    <QuarterOneTwentyThree>
                        <QuarterOneTwentyThreeWrapper>
                            <BlackBoxWrapperQuarterLeft>
                                <BlackBoxImg src = {BlackBox} alt = "BlackBox"/>
                            </BlackBoxWrapperQuarterLeft>
                    <TimelineYear>2023</TimelineYear>
                        <TimelineQuarter>Q1</TimelineQuarter>
                        <TimelineDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id purus augue. Lorem ipsum dolor </TimelineDescription>
                        </QuarterOneTwentyThreeWrapper>
                    </QuarterOneTwentyThree>
                   <QuarterTwoTwentyThree>
                    <QuarterTwoTwentyThreeWrapper>
                        <BlackBoxWrapperQuarterRight>
                            <BlackBoxImg src = {BlackBox} alt = "BlackBox"/>
                        </BlackBoxWrapperQuarterRight>
                   <TimelineYear>2023</TimelineYear>
                        <TimelineQuarter>Q2</TimelineQuarter>
                        <TimelineDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse id purus augue. Lorem ipsum dolor </TimelineDescription>
                        </QuarterTwoTwentyThreeWrapper>
                   </QuarterTwoTwentyThree>
           
            </RoadMapSectionContent>
           
        </RoadMapSectionWrapper>
        <ContactUs id="contact">
                <ContactUsWrapper>
                    <ContactTop>
                        <RoadmapTitle>Contact us</RoadmapTitle>
                        <RoadMapDesc>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</RoadMapDesc>
                    </ContactTop>
                    <ContactMid>
                        <MidLeft>
                            <EarnMgtLink href = "#">Earnmanagement.com</EarnMgtLink>
                            <ContactNumber><span>US</span> +1 (872) 288 9283</ContactNumber>
                            <ContactNumber><span>UA</span> +1 (872) 288 9283</ContactNumber>
                        </MidLeft>
                        <MidRight>
                             <Details type="text" name="name" placeholder="Your Name"></Details>
                             <Details type="text" name="name" placeholder="Your Email Address"></Details>
                             <Details type="text" name="name" placeholder="Describe your needs"></Details>
                        </MidRight>
                    </ContactMid>
                    <ContactBottom>Submit Request</ContactBottom>
                </ContactUsWrapper>
            </ContactUs>
    </RoadMapSection>
  )
}

export default Roadmap