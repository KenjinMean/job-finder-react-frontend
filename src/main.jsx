import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { QueryBoundaries } from "./components/utils/QueryBoundaries.Util";
import AuthProviderProvider from "./services/providers/AuthProvider.Provider";
import { ThemeProvider } from "./services/providers/ThemeProvider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: (error) => {
        // Handle the error globally
        console.error("Network error:", error);
      },
      useErrorBoundary: true,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <QueryBoundaries>
        <AuthProviderProvider>
          <ThemeProvider>
            <App />
          </ThemeProvider>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover={false}
            theme="light"
          />
        </AuthProviderProvider>
      </QueryBoundaries>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  </React.StrictMode>
);
