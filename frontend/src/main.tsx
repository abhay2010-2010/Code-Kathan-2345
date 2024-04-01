import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { AuthProvider } from "./utils/authContext/authContext.tsx";
import { DataContextProvider } from "./utils/dataContext/dataContext.tsx";
import "./index.css";
const theme = extendTheme({
  fonts: {
    heading: "body",
    p: "body",
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
