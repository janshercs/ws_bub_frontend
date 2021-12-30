import { Center } from "@chakra-ui/layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chatbox from "./chat_components/Chatbox";
import CodeEditor from "./components/codeEditor";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Center>
        <Router>
          <Routes>
            <Route exact path="/" element={<Chatbox />} />
            <Route exact path="/pair" element={<CodeEditor textValue={""} />} />
          </Routes>
        </Router>
      </Center>
    </div>
  );
}

export default App;
