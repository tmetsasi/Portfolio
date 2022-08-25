import React from "react";
import { Header } from "../../EveryPageComponents/Header";
import { Footer } from "../../EveryPageComponents/Footer";
import { ProjectsView } from "./components/projects";
import { ContactBar } from "./components/ContactUs";
import styled from "styled-components";
import {Link} from "react-router-dom";


const MainPageStats = styled.div`
  height: 5000px;
  width: 100%;
  background-color: #407388;
  position: relative;
  
`;

const HeroText = styled.div`
  position: absolute;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2.4vw;
  color: white;
  background-color: #4e4e4e78;
  width: 40%;
  height: 20%;
  top: 30%; 
  left: 5vw;
  text-align: center;

  @media (max-width: 800px){ 
    width: 80%;
    height: 25%;
    top: 60%;
    left: 5vw;
    font-size: 3vw;
  }
`;


const HeroVid = styled.video`
  position: relative;
  z-index: 0;
`;

const HeroContti = styled.div`
  position: relative;

`;


const SkillsContti = styled.div`
  @media (min-width: 800px) { 
    position: relative;
  width: 100%;
  height: 50vw;
  color: white;
padding: 5%;
  }
  @media (max-width: 800px) {
    display: none;
  }

`;

const LinkBox = styled.div`
  width: 9vw;
  height: 3vw;
  background-color: #40728821;
  position: absolute;
  top: 0;
  margin-top: 22%;
  margin-left: 63%;
  z-index: 0;
  @media (max-width: 800px) {
    display: none;
  }
`;

const SkillsConttiPhone = styled.div`
  @media (max-width: 800px) { 
    position: relative;
    width: 100%;
    height: auto;
    padding: 5%;
  }
  @media (min-width: 800px) {
    display: none;
  }

`;

const ServicesContti = styled.div`
  width: 100%;
  height: 50vw;
  position: relative;
  background-color: #407388;
  z-index: 0;
  padding: 5%;
  color: white;
  @media (max-width: 800px) {
    display: none;
  }
`;

const ServicesConttiPhone = styled.div`
  @media (max-width: 800px) {
    position: relative;
  }
  @media (min-width: 800px){ 
    display: none;
  }
`;

const Kuva = styled.img`
  position: relative;
  height: auto;
  width: auto;
  
`;

const ServiceBox = styled.div`
  position: relative;
  background-color: white;
  width: 100%;
  height: auto;
  padding: 2%;
  border-radius: 2rem;
`;


const ServiceLink = styled.div`
  width: 34vw;
  height: 2.5vw;
  position: absolute;
  bottom: 11%;
  left: 8%;
`;

const ToolsContti = styled.div`
  background-color: green;
  width: 70%;
  height: auto;
  position: relative;
  right: 0;
  z-index: 0;
  @media (max-width: 800px) {
    display: none;
  }
`;

const SecondVid = styled.video`
  position: relative;
  width: 100%;
`;

const ProjectsContti = styled.div`
  background-color: gray;
  width: 100%;
  height: 70vh;
  position: relative;
  @media (max-width: 800px) {
    display: none;
  }
`;

function MainPage() { 
    return ( 
        <div>

          <MainPageStats> 
          
          <Header/>        
          <HeroContti>
            <HeroVid width="100%" autoPlay muted loop id="myVideo">
            <source src="/images/masterVid.mp4" type="video/mp4"/>
            </HeroVid> 
              <HeroText> 
              Suunnittelu, toteutus, ylläpito. <br/> Foami tarjoaa 
            digitaalisia vastauksia <br/> yhteisen haasteen ratkaisuun.
              </HeroText>
              </HeroContti> 


              <SkillsContti>
                <Kuva src="/images/SkillsView.png"/>
               <Link to="/me"> 
                <LinkBox/>
               </Link>
              </SkillsContti>
              <SkillsConttiPhone> 
                <Kuva src="/images/SkillsPhone.png"/>
                
              </SkillsConttiPhone>

            <ServicesContti> 
              <ServiceBox> 
              <Kuva src="/images/Untitled2.png"/>
              </ServiceBox>
              <Link to="/palvelut"> 
              <ServiceLink/>
              </Link>
              </ServicesContti> 
              <ServicesConttiPhone> 
                <ServiceBox> 
                
                <Kuva src="/images/ServicesViewPhone.png"/>

                </ServiceBox>
              </ServicesConttiPhone>


            <ToolsContti> 
            <SecondVid autoPlay muted loop id="vidi"> 
            <source src="/images/herovideo.mp4" type="video/mp4"/>
            </SecondVid>
            
            </ToolsContti>

            <ProjectsContti> 
              
              </ProjectsContti> 

            <ContactBar/>
            <Footer/>
            

            </MainPageStats> 

        

     


          

          


        </div>
    )
}

export default MainPage;