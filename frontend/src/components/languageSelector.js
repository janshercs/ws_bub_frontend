import { Box, IconButton } from "@chakra-ui/react";
import { DiPython, DiJavascript1, DiJava } from "react-icons/di";
import { SiGoland } from "react-icons/si";
export default function LanguageSelector({ align, language, setLanguage }) {
  return (
    <Box align={align} p={5}>
      <IconButton
        size={"lg"}
        colorScheme={"whatsapp"}
        icon={<SiGoland />}
        isActive={language === "go"}
        isRound={true}
        marginRight={3}
        onClick={() => setLanguage("go")}
      />
      <IconButton
        size={"lg"}
        colorScheme={"whatsapp"}
        icon={<DiPython />}
        isActive={language === "python"}
        isRound={true}
        marginRight={3}
        onClick={() => setLanguage("python")}
      />
      <IconButton
        size={"lg"}
        colorScheme={"whatsapp"}
        icon={<DiJavascript1 />}
        isActive={language === "javascript"}
        isRound={true}
        marginRight={3}
        onClick={() => setLanguage("javascript")}
      />
      <IconButton
        size={"lg"}
        colorScheme={"whatsapp"}
        icon={<DiJava />}
        isActive={language === "java"}
        isRound={true}
        marginRight={3}
        onClick={() => setLanguage("java")}
      />
    </Box>
  );
}
