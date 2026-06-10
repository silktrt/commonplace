import { useState } from "react";
import DailyPage from "./pages/DailyPage";
import RuleOfLife from "./pages/RuleOfLife";
import Discussion from "./pages/Discussion";
import Commonplace from "./pages/Commonplace";
import ReadingLife from "./pages/ReadingLife";
import PoetryCorner from "./pages/PoetryCorner";
import "./styles/global.css";

const TABS = [
  { id: "daily", label: "Daily Page" },
  { id: "rule", label: "Rule of Life" },
  { id: "poetry", label: "Poetry" },
  { id: "reading", label: "Reading Life" },
  { id: "discussion", label: "Discussion" },
  { id: "commonplace", label: "Commonplace" },
];

export default function App() {
  const [activeTab, setActiveTab] = useState("daily");

  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="header-inner">
          <p className="header-date">{formatDate()}</p>
          <h1 className="header-title">The Commonplace</h1>
          <p className="header-sub">Ordered toward truth, beauty, and goodness</p>
        </div>
        <div className="header-rule" />
      </header>

      <nav className="tab-nav" role="tablist">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <main className="app-main">
        {activeTab === "daily" && <DailyPage />}
        {activeTab === "rule" && <RuleOfLife />}
        {activeTab === "poetry" && <PoetryCorner />}
        {activeTab === "reading" && <ReadingLife />}
        {activeTab === "discussion" && <Discussion />}
        {activeTab === "commonplace" && <Commonplace />}
      </main>
    </div>
  );
}

function formatDate() {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
