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
  font-size: 3vh;
  color: white;
  background-color: #4e4e4e78;
  width: 40%;
  height: 30%;
  top: 30%; 
  left: 5vw;
  text-align: center;
`;

const HeroVid = styled.video`
  position: relative;
  z-index: 0;
`;

const HeroContti = styled.div`
  position: relative;

`;


const SkillsContti = styled.div`
position: relative;
  width: 100%;
  height: 50vw;
  color: white;
padding: 5%;
`;

const Joku = styled.div`
  width: 9vw;
  height: 3vw;
  background-color: #40728821;
  position: absolute;
  top: 0;
  margin-top: 22%;
  margin-left: 63%;
  z-index: 0;
`;

const ServicesContti = styled.div`
  width: 100%;
  height: 50vw;
  position: relative;
  background-color: #407388;
  z-index: 0;
  padding: 5%;
  color: white;
`;

const Kuva = styled.img`
  position: relative;
  height: auto;
  width: auto;
  
`;

const Otsikko = styled.div`
  color: white;
  text-align: justify;
  position: relative;
  font-size: 200%;
  margin-bottom: 2%;
`;

const Chapter = styled.div`
  color: white;
  text-align: justify;
  position: absolute;
  font-size: 200%;
  bottom: 10%;
`;

const Texti = styled.div`
  color: white;
  text-align: left;
  position: absolute;
  font-size: 150%;
  bottom: 25%;
  right: 7%;
`;

const ToolsContti = styled.div`
  background-color: green;
  width: 70%;
  height: auto;
  position: relative;
  right: 0;
  z-index: 0;
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
                <Joku/>
               </Link>
              </SkillsContti>
            

            <ServicesContti>
              <Otsikko> 
              Palvelumme tuovat joustavan yhteistyön osaksi arkea
                </Otsikko> 
              <Kuva src="/images/servicesView.png"/>
                <Texti> 
                Suunnittelemme, rakennamme ja ylläpidämme ohjelmistoja. Palvelumme
                 kustomoidaan <br/> jokaiselle asiakkaalle tapauskohtaisesti ja tarpeita
                  arvioidaan <br/> innostavimman lopputuloksen takaamiseksi.
                </Texti>
              <Chapter> 
                <Link to="/palvelut"> 
                <p> Tutustu tarjoamiimme palveluihin -&gt; </p> 
                </Link>
              </Chapter>
              </ServicesContti> 


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