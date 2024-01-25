import {BrowserRouter, Routes, Route} from "react-router-dom"

// Components Pages
import About from "./pages/About"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import Project from "./pages/Project"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}
