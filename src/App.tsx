import React from 'react';
import { useAuth } from './features/auth';
import { AppRoutes } from './routes/AppRoutes';

/**
 * Root Application Component
 * Handles global state (auth) and delegates rendering to the routing system.
 */
function App() {
  const { isLoading } = useAuth();

  // Global Loading State
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream selection:bg-caramel/20">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-caramel border-t-transparent"></div>
          <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-caramel tracking-widest uppercase animate-pulse">
            PNet
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-cream font-sans selection:bg-caramel/20">
      {/* Global Grainy Overlay for "Warm Editorial" texture */}
      <div className="noise-overlay" />

      {/* Actual Application Content */}
      <AppRoutes />
    </div>
  );
}

export default App;
