import { BrowserRouter, Routes } from "react-router-dom";
import { AuthRoutes } from "./routes/AuthRoutes";
import { UnAuthRoutes } from "./routes/UnAuthRoutes";
import { AuthUserContextProvider } from "./context/AuthUserContext";

function App() {
  return (
    <AuthUserContextProvider>
      <BrowserRouter>
        <Routes>
          {AuthRoutes}
          {UnAuthRoutes}
        </Routes>
      </BrowserRouter>
    </AuthUserContextProvider>
  );
}

export default App;
