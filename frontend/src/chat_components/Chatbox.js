import Bubbles from "./Bubbles";
import InputArea from "./InputArea";
import { useEffect, useState } from "react";
import { VStack } from "@chakra-ui/layout";

export const BACKEND_URL = "http://localhost:5000";

export default function Chatbox() {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    async function fetchThreads() {
      let response = await fetch(BACKEND_URL + "/thread");
      response = await response.json();
      setThreads(response);
    }
    fetchThreads();
  }, []);

  return (
    <VStack>
      <Bubbles threads={threads}></Bubbles>
      <InputArea />
    </VStack>
  );
}
