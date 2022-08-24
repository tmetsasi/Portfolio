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
  padding: 2rem;
`;

function MainPage() { 
    return ( 
        <div> 
         <Header />
         <MainPageStats> 
         <ContactBar/>
         </MainPageStats>
         <Footer/>
        </div>
    )
}

export default MainPage;