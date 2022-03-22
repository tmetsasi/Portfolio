import "./Global.css";
import styled from "styled-components";
import { Header } from "./components/Header";

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
      </Container>
    </div>
  );
}

export default App;
