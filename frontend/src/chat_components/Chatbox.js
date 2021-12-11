import Bubbles from "./Bubbles";
import InputArea from "./InputArea";
import { useEffect, useState } from "react";
import { VStack } from "@chakra-ui/layout";

export const BACKEND_URL = "http://localhost:5000";

export default function Chatbox() {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    initWS();
    // async function fetchThreads() {
    //   let response = await fetch(BACKEND_URL + "/thread");
    //   response = await response.json();
    //   setThreads(response);
    // }
    // fetchThreads();
  }, []);

  function initWS() {
    let socket = new WebSocket("ws://localhost:5000/ws");
    socket.onopen = function () {
      console.log("Socket is open");
    };
    socket.onmessage = function (e) {
      setThreads(JSON.parse(e.data));
      // console.log(JSON.parse(e.data));
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
