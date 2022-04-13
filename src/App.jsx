import "./Global.css";
import styled from "styled-components";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Tools } from "./views/ToolsBar";
import Carousel, { CarouselItem } from "./views/Carousel/Carousel";


const MainPage = styled.div`
  height: 250vh;
  width: 100vw;
  background-color: #407388;
  padding: 2rem;
`;

function App() {
  return (
    <div>
      <Header />
      <MainPage>
        <Carousel> 
          <CarouselItem>Kaikenlaista</CarouselItem>
          <CarouselItem>Hyvää kamaa</CarouselItem>
          <CarouselItem>Asiaa</CarouselItem>
          <CarouselItem>Jotain dataa</CarouselItem>

        </Carousel>
      
          
        <Tools/>
      </MainPage>
      <Footer/>
    </div>
  );
}

export default App;
