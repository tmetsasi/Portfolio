import React from "react";
import { Header } from "../../EveryPageComponents/Header";
import { Footer } from "../../EveryPageComponents/Footer";
import { ProjectsView } from "./components/projects";
import { ContactBar } from "./components/ContactUs";
import styled from "styled-components";

const MainPageStats = styled.div`
  height: 200vh;
  width: 100%;
  background-color: #407388;
  
`;

const HeroText = styled.div`
  position: absolute;
  top: 20rem;
  left: 30%;
  font-family: Inria Sans;
  font-weight: 400;
  align-content: center;
  font-size: 2rem;
  color: white;
`;



function MainPage() { 
    return ( 
        <div> 
          <MainPageStats> 
          <Header/> 

          <HeroText> Suunnittelu, toteutus, ylläpito. Foami tarjoaa 
            digitaalisia vastauksia yhteisen haasteen ratkaisuun </HeroText>
          <video width="100%" autoPlay muted loop id="myVideo">
            <source src="/images/masterVid.mp4" type="video/mp4"/>
            </video> 
            <Header/> 

          </MainPageStats>
         <ContactBar/>
         <Footer/>
        </div>
    )
}

export default MainPage;