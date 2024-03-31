import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";


const theme = extendTheme({
  fonts: {
    heading: "body",
  },
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>,
);
