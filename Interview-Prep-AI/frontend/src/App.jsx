import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Dashboard from "./pages/Home/Dashboard";
import InterviewPrep from "./pages/InterviewPrep/InterviewPrep";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element="LandingPage" />

          <Route path="/dashboard" element="Dashboard" />
          <Route path="/interview-prep-ai/:sessionId" element="InterviewPrep" />
        </Routes>
      </Router>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontSize: "13px",
          },
        }}
      />
    </div>
  );
}

export default App;
