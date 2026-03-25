import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { 
  LoginPage, 
  SignUpPage, 
  ForgotPasswordPage, 
  OtpVerifyPage, 
  ResetPasswordPage, 
  useAuth 
} from '../features/auth';
import { LandingPage } from '../features/landing/LandingPage';
import { DashboardPage } from '../features/dashboard/DashboardPage';
import Navbar from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';

import { PetLibrary, PetPassport, AddPetForm } from '../features/pets';
import { Toaster } from 'react-hot-toast';

export const AppRoutes: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  const isAuth = ['/login', '/signup', '/forgot-password', '/otp-verify', '/reset-password'].includes(location.pathname);
  const hideFooter = isAuth;

  return (
    <div className="flex flex-col min-h-screen">
      <Toaster position="top-right" />
      <Navbar />
      
      <main className="flex-grow pt-0">
        <Routes>
          {/* Auth Routes */}
          <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <LoginPage />} />
          <Route path="/signup" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <SignUpPage />} />
          <Route path="/forgot-password" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <ForgotPasswordPage />} />
          <Route path="/otp-verify" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <OtpVerifyPage />} />
          <Route path="/reset-password" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <ResetPasswordPage />} />

          {/* Dashboard */}
          <Route 
            path="/dashboard" 
            element={isAuthenticated ? <DashboardPage /> : <Navigate to="/login" replace />} 
          />

          {/* Pet Feature Routes */}
          <Route 
            path="/pets" 
            element={isAuthenticated ? <PetLibrary /> : <Navigate to="/login" replace />} 
          />
          <Route 
            path="/pets/add" 
            element={isAuthenticated ? <AddPetForm /> : <Navigate to="/login" replace />} 
          />
          <Route 
            path="/pets/:id" 
            element={isAuthenticated ? <PetPassport /> : <Navigate to="/login" replace />} 
          />

          {/* Public Landing */}
          <Route 
            path="/" 
            element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <LandingPage />} 
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {!hideFooter && <Footer />}
    </div>
  );
};

export default AppRoutes;
