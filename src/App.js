import Topbar from "./components/topbar/Topbar";
import styled from "styled-components";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/pages/home/Home";
import Sidebar1 from "./components/sidebar/Sidebar1";
const Container = styled.div`
  display: flex;
  min-height: 100vh;
`
const Others = styled.div`
  flex: 10;
  padding-left: 100px;
  padding-top: 50px;
`

function App() {
  return (
    <div>
      <Container>
        <Sidebar1 />

        <Others>
          <Topbar />
          <Home />
          </Others>
      </Container>
    </div>
  );
}

export default App;
