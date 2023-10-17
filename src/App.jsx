import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";

function App() {
  return (
    <div className="font-primary">
      {/* Optional can use React Helmet here for meta tags */}
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
