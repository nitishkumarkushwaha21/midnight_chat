import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";

import Chat from "./pages/Chat";

import Home from "./pages/Home";
import Body from "./pages/Body";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout shownav>
            <Home />
          </Layout>
        }
      />

      <Route path="*" element={<Navigate to="/" />} />
      
      
    
      
      <Route
        path="/girl"
        element={
          <Layout shownav>
            <Body />
          </Layout>
        }
      />
      
      <Route
        path="/chat"
        element={
          <Layout shownav>
            < Chat/>
          </Layout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
