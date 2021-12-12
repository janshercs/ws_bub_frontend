import Bubbles from "./Bubbles";
import InputArea from "./InputArea";
import { useEffect, useState } from "react";
import { VStack } from "@chakra-ui/layout";

export const BACKEND_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://wassup-bub.herokuapp.com";

export default function Chatbox() {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    initWS();
  }, []);

  function initWS() {
    let wsURL = BACKEND_URL.replace(/^https?/, "ws") + "/ws";
    let socket = new WebSocket(wsURL);
    socket.onopen = function () {
      console.log("Socket is open");
    };
    socket.onmessage = function (e) {
      setThreads(JSON.parse(e.data));
    };
    return socket;
  }

  return (
    <VStack>
      <Bubbles threads={threads}></Bubbles>
      <InputArea />
    </VStack>
  );
}
