import logo from "./logo.svg";
import "./App.css";
import Routes from "./Routes";
import { RouterProvider } from "react-router-dom";
import { createContext,  useState } from "react";

export const appContext = createContext()


function App() {
  const [token, setToken] = useState(null)
  return (
    <div className="App">
      <appContext.Provider value={{token, setToken}}>
        <RouterProvider router={Routes} />
      </appContext.Provider>
    </div>
  );
}

export default App;
