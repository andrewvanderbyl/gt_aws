import { BrowserRouter, Routes } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    // <AuthUserContextProvider>
    <BrowserRouter>
      <Routes>{AppRoutes}</Routes>
    </BrowserRouter>
    // </AuthUserContextProvider>
  );
}

export default App;
