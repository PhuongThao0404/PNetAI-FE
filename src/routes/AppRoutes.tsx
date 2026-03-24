import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage, SignUpPage, useAuth } from '../features/auth';
import { LandingPage } from '../features/landing/LandingPage';
import Navbar from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import Button from '../components/common/Button';

/**
 * Main application routes configuration.
 * Separates concerns and provides cleaner structure for scaling.
 */
export const AppRoutes: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
      {/* GLOBAL FIXED NAVBAR */}
      <Navbar />
      
      {/* MAIN CONTENT AREA: Global padding-top to account for fixed navbar height */}
      <main className="flex-grow pt-20">
        <Routes>
          {/* Auth Route */}
          <Route 
            path="/login" 
            element={isAuthenticated ? <Navigate to="/" replace /> : <LoginPage />} 
          />

          <Route 
            path="/signup" 
            element={isAuthenticated ? <Navigate to="/" replace /> : <SignUpPage />} 
          />

          {/* Home/Landing Page Route */}
          <Route 
            path="/" 
            element={
              isAuthenticated ? (
                <div className="min-h-screen bg-warm flex flex-col items-center justify-center p-4">
                  <div className="w-full max-w-lg bg-white p-10 rounded-3xl shadow-xl border border-sand/30 text-center relative z-10 transition-all hover:shadow-2xl">
                    <div className="w-24 h-24 bg-warm text-brown rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-serif italic border border-sand/50 shadow-inner">
                      {user?.name?.[0] || 'U'}
                    </div>
                    <h2 className="text-4xl mb-2 font-serif font-bold text-ink tracking-tight">Welcome, {user?.name}</h2>
                    <p className="text-muted mb-8 font-light italic">{user?.email}</p>
                    <div className="flex gap-4 justify-center">
                      <Button variant="outline" onClick={logout} className="rounded-full px-8 border-sand text-brown hover:bg-warm transition-all active:scale-95">
                        Sign Out
                      </Button>
                      <Button variant="primary" className="bg-forest rounded-full px-8 hover:bg-ink transition-all active:scale-95 shadow-lg shadow-forest/20">
                        Dashboard
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <LandingPage />
              )
            } 
          />

          {/* Catch-all Redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* FOOTER (Usually only on Landing Page or Main Pages, can be conditionally rendered if needed) */}
      <Footer />
    </div>
  );
};

export default AppRoutes;
