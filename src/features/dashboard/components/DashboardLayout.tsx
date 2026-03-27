import React from 'react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-cream overflow-x-hidden selection:bg-caramel/20 selection:text-ink font-sans">

      <main className="flex-1 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-10">
          {children}
        </div>
      </main>
    </div>
  );
};
