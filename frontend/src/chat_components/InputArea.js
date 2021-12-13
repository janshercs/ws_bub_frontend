import { Button, FormControl, Input, Textarea, VStack } from "@chakra-ui/react";
import { useState } from "react";
import socket from "../Socket";

export default function InputArea() {
  const [inputValue, setInputValue] = useState("");
  const handleUserInput = (e) => {
    setInputValue(e.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const { user, post } = e.target.elements;

    let payload = {
      User: user.value,
      Content: post.value,
    };

    socket.send(JSON.stringify(payload));
    setInputValue("");
  }

  return (
    <VStack>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <Input w="80%" id="user" placeholder="random username" />

          <Textarea
            w="80%"
            id="post"
            marginTop="1.5vh"
            placeholder="Write your thoughts here..."
            value={inputValue}
            onChange={handleUserInput}
          />
        </FormControl>

        <Button marginTop="1.5vh" colorScheme="teal" mr={3} type="submit">
          Post
        </Button>
      </form>
    </VStack>
  );
}
