import React from 'react'
import Header from '../../components/Header'
import styled from 'styled-components'
import Gorilla from '../../views/Gorilla'
import RoadMap from '../../views/RoadMap'
import Footer from '../../components/Footer'
// import EarnBackground from "../../asset/Background.png"


const Home = () => {
const Container = styled.div`
display:flex;
gap:32px;
flex-direction: column;
align-items: center;
justify-content: center;
  /* background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-clip: border-box; */ 
`
  return (
      <Container>
      <Header/>
      <Gorilla/>
      <RoadMap/>
      <Footer/>
      </Container>
  )
}

export default Home
