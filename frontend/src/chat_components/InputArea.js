import { Button, FormControl, Input, Textarea, VStack } from "@chakra-ui/react";
import { BACKEND_URL } from "./Chatbox";

export default function InputArea() {
  async function handleSubmit(e) {
    e.preventDefault();
    const { user, post } = e.target.elements;

    let payload = {
      User: user.value,
      Content: post.value,
    };

    fetch(BACKEND_URL + "/thread", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
          />
        </FormControl>

        <Button marginTop="1.5vh" colorScheme="teal" mr={3} type="submit">
          Post
        </Button>
      </form>
    </VStack>
  );
}
