import { Box, IconButton, Flex, Spacer } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import debounce from "lodash.debounce";
import pairSocket, {
  addMessageHandler,
  removeMessageHandler,
} from "../PairSocket";
import LanguageSelector from "./languageSelector";

const DEBOUNCE_TIME = 600;

export default function CodeEditor() {
  const [inputValue, setInputValue] = useState("");
  const [language, setLanguage] = useState("python");
  const [darkMode, toggleDark] = useState(false);
  const debounceUpdate = debounce(
    (value) => pairSocket.send(value),
    DEBOUNCE_TIME
  );

  const handleChange = (event) => {
    debounceUpdate(event);
  };

  useEffect(() => {
    const handler = (e) => {
      setInputValue(e.data);
    };

    addMessageHandler(handler);
    return () => removeMessageHandler(handler);
  }, []);

  return (
    <Box
      height="100vh"
      width="100%"
      backgroundColor={darkMode ? "#1E1E1E" : "white"}
    >
      <Flex w="100%">
        <LanguageSelector
          align="left"
          language={language}
          setLanguage={setLanguage}
        />
        <Spacer />
        <Box p="5">
          <IconButton
            float="right"
            size="lg"
            icon={darkMode ? <FaSun /> : <FaMoon />}
            colorScheme={"whatsapp"}
            isRound={true}
            onClick={() => toggleDark(!darkMode)}
          />
        </Box>
      </Flex>

      <Editor
        height="100vh"
        defaultValue={inputValue}
        onChange={handleChange}
        theme={darkMode ? "vs-dark" : "light"}
        language={language}
        value={inputValue}
      />
    </Box>
  );
}
