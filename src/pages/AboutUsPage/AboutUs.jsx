import React from "react";
import styled from "styled-components";
import { Profiles } from "./components/profiles";
import { Header } from "../../EveryPageComponents/Header";
import { Footer } from "../../EveryPageComponents/Footer";

const AboutUsPageStats = styled.div`
  height: 200vh;
  width: 100%;
  background-color: #407388;
  padding: 2rem;
`;


function AboutUsPage() { 
    return ( 
      <div> 
        <Header/>
          <AboutUsPageStats> 
            <Profiles/>
        </AboutUsPageStats>
        <Footer/>
      </div>
        
    );
}

export default AboutUsPage;