import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./routes/homepage/homepage";
import CreatePage from "./routes/createPage/createPage";
import LoginPage from "./routes/loginPage/loginPage";
import PostPage from "./routes/postPage/postPage";
import { BrowserRouter, Routes, Route } from "react-router";
import SearchPage from "./routes/searchPage/searchPage.jsx";
import ProfilePage from "./routes/profilePage/profilePage.jsx";
import MainLayout from "./routes/layout/mainLayout.jsx";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Register from "./component/register/register.jsx";
const queryClient = new QueryClient()
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/pin/:id" element={<PostPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/:username" element={<ProfilePage />} />
           <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
