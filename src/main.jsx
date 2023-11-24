import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { ContextProvider } from "./context/ContextProvider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { QueryBoundaries } from "./components/utils/QueryBoundaries.Util";
import AuthProviderProvider from "./services/providers/AuthProvider.Provider";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <QueryClientProvider client={queryClient}>
        <QueryBoundaries>
          <AuthProviderProvider>
            <App />
          </AuthProviderProvider>
        </QueryBoundaries>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </ContextProvider>
  </React.StrictMode>
);
