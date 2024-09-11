import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import FilterDropdown from './component/FilterDropdown.jsx'
import FilterSection from './component/FilterSection.jsx'
import WaterUsageChart from './component/WaterUsageChart.jsx';
import WaterUsageBreakdown from './component/WaterUsageBreakdown';
import WaterUsageSection from './component/WaterUsageSection.jsx';
import Header from './component/Header.jsx';
import Layout from './component/Layout.jsx';
import RiskAssessment from './WaterManagementDashboard.jsx';
import ScenarioPlanning from './ScenarioPlanning.jsx';
import ReportsExports from './ReportsExports.jsx';
import DataVisualizations from './component/DataVisualizations.jsx';
//import WaterManagementDashboard from './WaterManagementDashboard.jsx';

// Define placeholder components for other pages
const Home = () => <div>Home Page</div>;
const WaterForecast = () => <div>Water Forecast Page</div>;
const ReservoirStatus = () => <div>Reservoir Status Page</div>;

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/waterforecast" element={<WaterForecast />} />
        <Route path="/reservoirstatus" element={<ReservoirStatus />} />
        <Route path="/riskassessment" element={<RiskAssessment />} />
        <Route path="/scenarioplanning" element={<ScenarioPlanning />} />
        <Route path="/reports" element={<ReportsExports />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
