import "./Global.css";
import styled from "styled-components";
import { Header } from "./components/Header";
import { Testi } from "./components/MenuElement";
import { SkillsView } from "./views/Skills";
import { ExperienceView } from "./views/Experience";
import { Footer } from "./components/Footer";

const MainPage = styled.div`
  height: 400vh;
  width: 100vw;
  background-color: #ececec;
  padding: 2rem;
`;

function App() {
  return (
    <div>
      <Header />
      <MainPage>
        <SkillsView />
        <ExperienceView />
      </MainPage>
      <Footer />
    </div>
  );
}

export default App;
