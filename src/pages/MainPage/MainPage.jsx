import React from "react";
import { Header } from "../../EveryPageComponents/Header";
import { Footer } from "../../EveryPageComponents/Footer";
import styled from "styled-components";
import {Link} from "react-router-dom";
import { Projects } from "./components/Projects";
import { ContactUs } from "./components/ContactUs/ContactUs";
import { Funktio } from "./components/MainCaro/Caro";
import { Staili } from "./components/MainCaro/Caro";

const MainPageStats = styled.div`
  height: auto;
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

const SkillsLinkPhone = styled.div`
  height: 3vh;
  width: 14vw;
  position: absolute;
  left: 10%;
  bottom: 5%;
`;

const ServicesContti = styled.div`
  width: 100%;
  height: 50vw;
  position: relative;
  background-color: #407388;
  z-index: 0;
  padding: 3%;
  color: white;
  @media (max-width: 800px) {
    display: none;
  }
`;

const ServicesConttiPhone = styled.div`
  @media (max-width: 800px) {
    position: relative;
    padding: 3%;
  }
  @media (min-width: 800px){ 
    display: none;
  }
`;

const ServicesLinkPhone = styled.div`
  width: 73vw;
  height: 3.7vh;
  position: absolute;
  left: 11%;
  bottom: 1%;
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
  background-color: aliceblue;
`;

const ToolsContti = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  right: 0;
  z-index: 0;
 
`;

const SecondVid = styled.video`
  position: relative;
  width: 100%;
`;

const ToolsText = styled.div`
  background-color: #4e4e4e78;
  position: absolute;
  height: 20%;
  width: 47%;
  bottom: 57%;
  left: 5%;
  font-size: 2.4vw;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
`;

const ToolsLink = styled.div`
  background-color: #4e4e4e78;
  position: absolute;
  height: 8%;
  width: 47%;
  bottom: 17%;
  left: 40%;
  font-size: 2.4vw;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
`;

const ProjectsContti = styled.div`
  background-color: #407388;
  width: 100%;
  height: 60vh;
  position: relative;
  @media (max-width: 800px) {
    display: none;
  }
`;

const ProjectsHeader = styled.div`
  background-color: gray;
  height: 50vh;
  width: 100%;
  position: relative;
`;

const ContactBar = styled.div`
  height: auto;
  width:auto;
  position: relative;
  margin-top: 10vh;
  padding: 1rem;
  padding-bottom: 6vh;
`;

const ContactBarHeader = styled.div`
  height: 10vh;
  width: 100%;
  background-color: red;
  position: absolute;
  margin-top: 3vh;
  text-align: center;
  
`;

const ContactBarText = styled.div`
  height: 8vh;
  width: 50%;
  background-color: green;
  position: absolute;
  margin-top: 20vh;
  font-size: medium;
  margin-left: 3vw;
`;

const ContactBarPhoto = styled.span`
  height: 15vw;
  width: 15vw;
  border-radius: 50%;
  display: inline-block;
  background-color: black;
  position: absolute;
  margin-top: 45vh;
  margin-left: 3vw;
`;

const ContactBarPhotoSec = styled.span`
  height: 25vw;
  width: 25vw;
  border-radius: 50%;
  display: inline-block;
  background-color: black;
  position: absolute;
  margin-top: 45vh;
  margin-left: 45vw;
`;

const ContactBarInfo = styled.div`
  height: 10vh;
  width: 30%;
  position: absolute;
  margin-top: 65vh;
  background-color: blue;
`
const ContactBarInfoSec = styled.div`
  height: 10vh;
  width: 30%;
  position: absolute;
  margin-top: 65vh;
  margin-left: 40vw;
  background-color: blue;
`
const ContactBarName = styled.div`
  height: 2vh;
  width: 15vw;
  position: absolute;
  margin-top: 15vh;
  margin-left: 80%;
  background-color: aquamarine;
`
const ContactBarMail = styled.div`
  height: 2vh;
  width: 15vw;
  position: absolute;
  margin-top: 18vh;
  margin-left: 80%;
  background-color: aquamarine;
`
const ContactBarPhone = styled.div`
  height: 2vh;
  width: 15vw;
  position: absolute;
  margin-top: 21vh;
  margin-left: 80%;
  background-color: aquamarine;
`
const ContactBarCase = styled.div`
  height: 12vh;
  width: 15vw;
  position: absolute;
  margin-top: 24vh;
  margin-left: 80%;
  background-color: aquamarine;
`
const ContactBarSend = styled.div`
  height: 2vh;
  width: 7vw;
  position: absolute;
  margin-top: 37vh;
  margin-left: 80%;
  background-color: aquamarine;
  text-align: justify;
`
const Contact = styled.div`
  background-color: red;
  width: 40vw;
  height: 50vh;
  position: absolute;
  left: 50%;
  top: 30%;
`;

const ContactBarImg = styled.img`
  
`


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
                <Link to="/me"> 
                <SkillsLinkPhone/>
                </Link>
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
                <Link to="/palvelut"> 
                <ServicesLinkPhone/>
                </Link>
                </ServiceBox>
              </ServicesConttiPhone>


            <ToolsContti> 
            <SecondVid autoPlay muted loop id="vidi"> 
            <source src="/images/herovideo.mp4" type="video/mp4"/>
            </SecondVid>
            <ToolsText> 
              Kehitys-teknologiamme koostuu alan tuoreimmista
               työkaluista ja ohjelmistoista
            </ToolsText>
            <Link to="/tyokalut"> 
            <ToolsLink> 
              Tarkastele Foamin suosimia työkaluja -&gt;
            </ToolsLink>
            </Link>
            </ToolsContti>

            <ProjectsContti> 
              <Funktio/>
            </ProjectsContti>
            

            

            <ContactBar>
              <ContactBarImg src="/images/ContactBar.png"/> 
              
              <ContactUs/>

               
            </ContactBar> 
           
                    
            <Footer/>
            

            </MainPageStats> 

        

     


          

          


        </div>
    )
}

export default MainPage;