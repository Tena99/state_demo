import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import About_Us from "./pages/About us";

function App() {
  const [page, setPage] = useState("Home");

  return (
    <>
      {page === "Home" ? <Home /> : page === "About" ? <About_Us /> : undefined}

      <button
        onClick={() => {
          setPage("Home");
        }}
      >
        Home
      </button>

      <button
        onClick={() => {
          setPage("About");
        }}
      >
        About Us
      </button>
    </>
  );
}

export default App;
