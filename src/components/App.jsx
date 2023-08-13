import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import HomePage from "./HomePage";
import About from "../pages/About";
import DiceGame from "../pages/frontend_projects/DiceGame";
import PageNotFound from "../pages/PageNotFound";
import NoteVerse from "../pages/frontend_projects/NoteVerse";
import Header from "./Header";
import DrumKit from "../pages/frontend_projects/DrumKit";
import SimonGame from "../pages/frontend_projects/SimonGame";
import Notes from "../pages/backend_projects/Notes";
import Todolist from "../pages/backend_projects/Todolist";
import DailyJournal from "../pages/backend_projects/DailyJournal";
import ScrollToTop from "./scrollrestoration";

function App() {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<About />} />
        {/* frontend_projects */}
        <Route path="/NoteVerse" element={<NoteVerse />} />
        <Route path="/DiceGame" element={<DiceGame />} />
        <Route path="/DrumKit" element={<DrumKit />} />
        <Route path="/SimonGame" element={<SimonGame />} />
        {/* backend_projects */}
        <Route path="/Notes" element={<Notes />} />
        <Route path="/Todolist" element={<Todolist />} />
        <Route path="/DailyJournal" element={<DailyJournal />} />
        {/*PageNotFound*/}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
