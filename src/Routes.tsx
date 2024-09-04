import React from "react";
import { Routes, Route } from "react-router-dom";

import Subscription from "./components/Subscription/Subscription";
import Home from "./components/Home/Home";
import Info from "./components/Info/Info";
import NotFound from "./components/NotFound/NotFound";
import View from "./components/View/View";

const SwitchRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/subscribe" element={<Subscription />} />
      <Route path="/info" element={<Info />} />
      <Route path="/view" element={<View />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default SwitchRoutes;
