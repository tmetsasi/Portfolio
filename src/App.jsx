import "./Global.css";
import styled from "styled-components";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Tools } from "./views/ToolsBar";
import { Profiles } from "./views/Profiles";
import { ProjectsView } from "./views/Projects";
import { IntroductionView } from "./views/Introduction";
import { ContactBar } from "./views/ContactUs";

const MainPage = styled.div`
  height: 200vh;
  width: 100vw;
  background-color: #407388;
  padding: 2rem;
`;

function App() {
  return (
    <div>
      <Header />
      <MainPage>
        <IntroductionView/>
        <Profiles/>
        <ProjectsView/>
        <Tools/>
        <ContactBar/>
      </MainPage>
      <Footer/>
    </div>
  );
}

export default App;
