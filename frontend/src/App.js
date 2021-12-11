import { Center } from "@chakra-ui/layout";
import "./App.css";
import Chatbox from "./chat_components/Chatbox";

function App() {
  return (
    <div className="App">
      <Center>
        <Chatbox />
      </Center>
    </div>
  );
}

export default App;
