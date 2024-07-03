import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { QueryBoundaries } from "./components/utils/QueryBoundaries.Util";
import { RouterProvider } from "react-router-dom";
import router from "./router";
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
    <QueryBoundaries>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </QueryBoundaries>
  </React.StrictMode>
);
