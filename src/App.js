import "./Global.css";
import styled from "styled-components";

const StyledButton = styled.div`
  height: 2rem;
  width: 2rem;
  background-color: red;
`;

function App() {
  return (
    <div>
      <StyledButton />
    </div>
  );
}

export default App;
