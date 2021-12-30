import { Center, Textarea } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import pairSocket, {
  addMessageHandler,
  removeMessageHandler,
} from "../PairSocket";

export default function Editor() {
  const [inputValue, setInputValue] = useState("");
  const handleUserInput = (e) => {
    pairSocket.send(e.target.value);
  };

  useEffect(() => {
    const handler = (e) => {
      setInputValue(e.data);
    };

    addMessageHandler(handler);
    return () => removeMessageHandler(handler);
  }, []);

  return (
    <Center w="80%" p="5">
      <Textarea size="lg" value={inputValue} onChange={handleUserInput} />
    </Center>
  );
}
