import React from "react";
import styled from "styled-components";
import { Tools } from "./components/ToolsBox";
import { Header } from "../../EveryPageComponents/Header";
import { Footer } from "../../EveryPageComponents/Footer";


const ToolsPageStats = styled.div`
  height: 200vh;
  width: 100%;
  background-color: #407388;
  padding: 2rem;
`;


function ToolsPage() { 
    return ( 
      <div> 
        <Header />
        <ToolsPageStats> 
        <Tools/>
        </ToolsPageStats>
        <Footer/>
      </div>
    );
}

export default ToolsPage;