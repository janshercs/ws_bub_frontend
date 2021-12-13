import Bubbles from "./Bubbles";
import InputArea from "./InputArea";
import { useEffect, useState } from "react";
import { VStack } from "@chakra-ui/layout";
import { addMessageHandler, removeMessageHandler } from "../Socket";

export default function Chatbox() {
  const [threads, setThreads] = useState([]);
  const sendMessage = function (message) {
    console.log(message);
  };

  useEffect(() => {
    const handler = (e) => {
      setThreads(JSON.parse(e.data));
    };

    addMessageHandler(handler);
    return () => removeMessageHandler(handler);
  }, []);

  return (
    <VStack>
      <Bubbles threads={threads}></Bubbles>
      <InputArea sendMessage={sendMessage} />
    </VStack>
  );
}
