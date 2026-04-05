import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { CitizenDashboard } from './views/CitizenDashboard';
import { LearnModules } from './views/LearnModules';
import { Rewards } from './views/Rewards';
import { AuthorityPortal } from './views/AuthorityPortal';
import { ReportIssue } from './views/ReportIssue';

export default function App() {
  const [currentView, setCurrentView] = useState('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <CitizenDashboard />;
      case 'report':
        return <ReportIssue />;
      case 'learn':
        return <LearnModules />;
      case 'rewards':
        return <Rewards />;
      case 'authority':
        return <AuthorityPortal />;
      default:
        return <CitizenDashboard />;
    }
  };

  return (
    <div className="relative flex h-screen w-full bg-[#050505] overflow-hidden font-sans">
      <div className="absolute top-0 left-0 h-full z-50 pointer-events-none">
        <div className="pointer-events-auto h-full">
          <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
        </div>
      </div>
      <div className="flex-1 w-full h-full relative">
        {renderView()}
      </div>
    </div>
  );
}
