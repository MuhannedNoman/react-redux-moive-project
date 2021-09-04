import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./Redux/Store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
