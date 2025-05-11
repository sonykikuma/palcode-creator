// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import IdeaGeneratorPage from "./pages/IdeaGeneratorPage";

function App() {
  const [publishedVideos, setPublishedVideos] = useState([]);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route
            path="/"
            element={
              <IdeaGeneratorPage
                publishedVideos={publishedVideos}
                setPublishedVideos={setPublishedVideos}
              />
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={<DashboardPage videos={publishedVideos} />}
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
