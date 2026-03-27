import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { 
  LoginPage, 
  SignUpPage, 
  ForgotPasswordPage, 
  OtpVerifyPage, 
  ResetPasswordPage
} from '../features/auth';
import { LandingPage } from '../features/landing/LandingPage';
import { DashboardPage } from '../features/dashboard/DashboardPage';
import Navbar from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';

import { PetLibrary, PetPassport, AddPetForm } from '../features/pets';
import { PetProvider } from '../features/pets/context/PetProvider';
import { Toaster } from 'react-hot-toast';
import { ProtectedRoute, PublicRoute } from './guards';

export const AppRoutes: React.FC = () => {
  const location = useLocation();

  const isAuth = ['/login', '/signup', '/forgot-password', '/otp-verify', '/reset-password'].includes(location.pathname);
  const hideFooter = isAuth;

  return (
    <PetProvider>
        <div className="flex flex-col min-h-screen">
          <Toaster position="top-right" />
          <Navbar />
          
      
      <main className="flex-grow pt-0">
        <Routes>
          {/* Auth Routes */}
          <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
          <Route path="/signup" element={<PublicRoute><SignUpPage /></PublicRoute>} />
          <Route path="/forgot-password" element={<PublicRoute><ForgotPasswordPage /></PublicRoute>} />
          <Route path="/otp-verify" element={<PublicRoute><OtpVerifyPage /></PublicRoute>} />
          <Route path="/reset-password" element={<PublicRoute><ResetPasswordPage /></PublicRoute>} />

          {/* Dashboard */}
          <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />

          {/* Pet Feature Routes */}
          <Route path="/pets" element={<ProtectedRoute><PetLibrary /></ProtectedRoute>} />
          <Route path="/pets/add" element={<ProtectedRoute><AddPetForm /></ProtectedRoute>} />
          <Route path="/pets/edit/:id" element={<ProtectedRoute><AddPetForm /></ProtectedRoute>} />
          <Route path="/pets/:id" element={<ProtectedRoute><PetPassport /></ProtectedRoute>} />

          <Route path="/" element={<PublicRoute><LandingPage /></PublicRoute>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {!hideFooter && <Footer />}
      </div>
    </PetProvider>
  );
};

export default AppRoutes;
