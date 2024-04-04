import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/domine/700.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { AuthProvider } from "./utils/authContext/authContext.tsx";
import { DataContextProvider } from "./utils/dataContext/dataContext.tsx";

const theme = extendTheme({
  fonts: {
    heading: `Domine`,
    body: "Domine",
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <AuthProvider>
        <DataContextProvider>
          <App />
        </DataContextProvider>
      </AuthProvider>
    </BrowserRouter>
  </ChakraProvider>,
);
