import React from "react";
import Bubble from "./Bubble";
import { VStack } from "@chakra-ui/react";

export default function Bubbles({ threads }) {
  return (
    <VStack>
      {threads.map((_, i) => {
        return <Bubble key={i} thread={threads[i]}></Bubble>;
      })}
    </VStack>
  );
}
