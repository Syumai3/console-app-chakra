import { Button, ChakraProvider } from "@chakra-ui/react";
import { theme } from "././theme/Theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Button colorScheme="teal">ボタン</Button>
      <h1>テスト</h1>
    </ChakraProvider>
  );
}

export default App;
