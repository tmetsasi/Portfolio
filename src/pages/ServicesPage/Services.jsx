import React from "react";
import styled from "styled-components";
import { Header } from "../../EveryPageComponents/Header";
import { Footer } from "../../EveryPageComponents/Footer";
import Carousel from "./components/Carousel/Carousel";
import { CarouselItem } from "./components/Carousel/Carousel";
import { Projects } from "../MainPage/components/Projects";

const ServicesPageStats = styled.div`
  height: 3000px;
  width: 100%;
  background-color: #407388;
  position: relative;
`;

const Boxi = styled.div`
  height: 80vh;
  width: 100%;
  background-color: gray;
  
`

function ServicesPage() { 
    return ( 
      <div> 
        
        <ServicesPageStats> 
          <Header/>
          <Boxi> 
          <Carousel> 
          <CarouselItem>Kaikenlaista</CarouselItem>
          <CarouselItem>Hyvää kamaa</CarouselItem>
          <CarouselItem>Asiaa</CarouselItem>
          <CarouselItem>Jotain dataa</CarouselItem>

        </Carousel>
  
          </Boxi>
          <Boxi> 
            <img src="/images/background-kuva.svg"/> 
          </Boxi>
       

        </ServicesPageStats>
     
        
        

      </div>
      
    );
}

export default ServicesPage;