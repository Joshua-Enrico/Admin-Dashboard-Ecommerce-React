import Topbar from "./components/topbar/Topbar";
import styled from "styled-components";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/pages/home/Home";
const Container = styled.div`
  display: flex;
  margin-top: 10px;
`
const Others = styled.div`
  flex: 4;
`


function App() {
  return (
    <div>
       <Topbar/>
       <Container>
         <Sidebar/>
         <Home/>
       </Container>
    </div>
  );
}

export default App;
