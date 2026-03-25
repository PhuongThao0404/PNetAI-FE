import React from 'react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-cream overflow-x-hidden selection:bg-caramel/20 selection:text-ink font-sans">
      {/* Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.02] bg-[url('data:image/svg+xml,%3Csvg%20viewBox=%220%200%20256%20256%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter%20id=%22n%22%3E%3CfeTurbulence%20type=%22fractalNoise%22%20baseFrequency=%220.9%22%20numOctaves=%224%22%20stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect%20width=%22100%25%22%20height=%22100%25%22%20filter=%22url(%23n)%22/%3E%3C/svg%3E')]" />

      <main className="flex-1 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-10">
          {children}
        </div>
      </main>
    </div>
  );
};
