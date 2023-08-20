import React, { useState } from "react";
import { FaHtml5, FaCss3, FaJs } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { SiSemanticuireact } from "react-icons/si";

const Tab = ({ label, icon, isActive, onClick }) => (
  <li className={`tab ${isActive ? "active" : ""}`} onClick={onClick}>
    {icon}
  </li>
);

const TabContent = ({ title, content, isActive }) => (
  <div className={`item ${isActive ? "active" : ""}`}>
    <h1>{title}</h1>
    <p>{content}</p>
  </div>
);

const tabsData = [
  { label: "HTML", icon: <FaHtml5 /> },
  { label: "CSS", icon: <FaCss3 /> },
  { label: "JavaScript", icon: <DiJavascript /> },
  { label: "React", icon: <SiSemanticuireact /> },
];

const contentsData = [
  {
    title: "HTML Fundamentals",
    content:
      "Learn about the structure and semantics of HTML for building web pages.",
  },
  {
    title: "CSS Styling",
    content:
      "Master CSS to style your web pages and create visually appealing designs.",
  },
  {
    title: "JavaScript Essentials",
    content:
      "Explore JavaScript's role in making your websites interactive and dynamic.",
  },
  {
    title: "React Basics",
    content:
      "Get started with React, a popular library for building modern web applications.",
  },
];

export default function FrontendTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <main className="container">
      <div className="tabs">
        {tabsData.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            icon={tab.icon}
            isActive={index === activeTab}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </div>
      <div className="content">
        {contentsData.map((content, index) => (
          <TabContent
            key={index}
            title={content.title}
            content={content.content}
            isActive={index === activeTab}
          />
        ))}
      </div>
    </main>
  );
}
