import { BrowserRouter, Routes } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import { AuthUserContextProvider } from "./util/context/AuthUserContext";

function App() {
  return (
    <AuthUserContextProvider>
      <BrowserRouter>
        <Routes>{AppRoutes}</Routes>
      </BrowserRouter>
    </AuthUserContextProvider>
  );
}

export default App;
