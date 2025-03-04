import React from "react";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import Main_layout from "./layout/Main_layout";
import Home from "./pages/Home";

import SayHello from "./pages/SayHello";
import OurStory from "./pages/OurStory";
import Projects from "./pages/Projects";
import Single_Project from "./pages/Single_Project";
import OurWorld from "./pages/OurWorld";
import OurCollection from "./pages/OurCollection";
import Services from "./pages/Services";
import AdminLayout from "./layout/AdminLayout";
import Login from "./admin/login";
import AddProject from "./admin/AddProject";

function App() {
  const Routers =
    import.meta.env.MODE === "development" ? BrowserRouter : HashRouter;
  return (
    <Routers>
      <Routes>
        <Route path="/" element={<Main_layout />}>
          <Route index element={<Home />} />
          <Route path="Services" element={<Services />} />
          <Route path="SayHello" element={<SayHello />} />
          <Route path="OurStory" element={<OurStory />} />
          <Route path="Projects" element={<Projects />} />
          <Route path="Projects/:id" element={<Single_Project />} />
          <Route path="OurWorld" element={<OurWorld />} />
          <Route path="OurCollection" element={<OurCollection />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Login />} />
          <Route path="new_project" element={<AddProject />} />
        </Route>
      </Routes>
    </Routers>
  );
}

export default App;
