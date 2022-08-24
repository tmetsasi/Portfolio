import React from "react";
import styled from "styled-components";
import { Header } from "../../EveryPageComponents/Header";
import { Footer } from "../../EveryPageComponents/Footer";

const ServicesPageStats = styled.div`
  height: 200vh;
  width: 100%;
  background-color: #407388;
  padding: 2rem;
`;

function ServicesPage() { 
    return ( 
      <div> 
        <Header/>
        <ServicesPageStats> 
          Muotoilu Figmassa
        </ServicesPageStats>
        <Footer/>
      </div>
      
    );
}

export default ServicesPage;