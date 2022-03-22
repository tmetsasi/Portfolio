import "./Global.css";
import styled from "styled-components";
import { Header } from "./components/Header";
import { Testi } from "./components/MenuElement";

const Container = styled.div`
  height: 100vw;
  width: 100vw;
  background-color: #d8d8d8;
`;

function App() {
  return (
    <div>
      <Container>
        <Header />
        <Testi luku = "1" name="About Us"/>
        <Testi luku = "2" name="Skills"/>
        <Testi luku = "3" name="Projects"/>
        <Testi luku = "4" name="Contact"/>
      </Container>
    </div>
  );
}

export default App;
