import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, User, Check, AlertCircle, Ticket, Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthLayout } from './layouts/AuthLayout';
import { useAuth } from './context/AuthContext';

// Updated Schema
const signUpSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string(),
  saleCode: z.string().optional(),
  terms: z.boolean().refine(val => val === true, {
    message: "You must accept the terms and conditions",
  }),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type SignUpFormValues = z.infer<typeof signUpSchema>;

export const SignUpPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showSaleCode, setShowSaleCode] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [saleStatus, setSaleStatus] = useState<'idle' | 'valid' | 'invalid'>('idle');
  const [saleMessage, setSaleMessage] = useState('');
  const { signup } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
  });

  const currentSaleCode = watch('saleCode');

  const handleVerifySaleCode = async () => {
    if (!currentSaleCode) return;
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      if (['SLR-001', 'PNET'].includes(currentSaleCode.toUpperCase())) {
        setSaleStatus('valid');
        setSaleMessage('Consultant verified! High-priority support activated.');
      } else {
        setSaleStatus('invalid');
        setSaleMessage('Consultant code not found.');
      }
    }, 1200);
  };

  const onSubmit = async (data: SignUpFormValues) => {
    try {
      await signup(data.fullName, data.email);
      navigate('/otp-verify', { state: { email: data.email } });
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <AuthLayout>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-caramel font-semibold mb-2.5">
          <div className="w-5 h-[1px] bg-caramel" />
          Create Account
        </div>
        <h1 className="font-serif text-[clamp(28px,3vw,40px)] font-bold tracking-tight leading-[1.1] text-ink mb-2">
          Say <em className="text-caramel italic font-normal">hello!</em>
        </h1>
        <p className="text-sm text-muted font-light mb-9">
          Already have an account? <Link to="/login" className="text-caramel font-medium hover:underline">Log in →</Link>
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Full Name */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-ink uppercase tracking-widest leading-none block ml-1">Full Name</label>
            <div className="relative group">
              <input
                {...register('fullName')}
                placeholder="John Doe"
                className={`w-full p-3.5 border-[1.5px] rounded-2xl bg-white focus:outline-none transition-all font-sans text-sm shadow-sm ${errors.fullName ? 'border-red-500' : 'border-sand focus:border-caramel focus:ring-4 focus:ring-caramel/5'}`}
              />
              <User className="absolute right-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-muted group-focus-within:text-brown transition-colors" />
            </div>
            {errors.fullName && <p className="text-[11px] text-red-500 font-medium ml-1">{errors.fullName.message}</p>}
          </div>

          {/* Email */}
          <div className="space-y-1.5">
            <label className="text-xs font-medium text-ink uppercase tracking-widest leading-none block ml-1">Email</label>
            <div className="relative group">
              <input
                {...register('email')}
                type="email"
                placeholder="ten@email.com"
                className={`w-full p-3.5 border-[1.5px] rounded-2xl bg-white focus:outline-none transition-all font-sans text-sm shadow-sm ${errors.email ? 'border-red-500' : 'border-sand focus:border-caramel focus:ring-4 focus:ring-caramel/5'}`}
              />
              <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-muted group-focus-within:text-brown transition-colors" />
            </div>
            {errors.email && <p className="text-[11px] text-red-500 font-medium ml-1">{errors.email.message}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-ink uppercase tracking-widest leading-none block ml-1">Password</label>
              <div className="relative group">
                <input
                  {...register('password')}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className={`w-full p-3.5 border-[1.5px] rounded-2xl bg-white focus:outline-none transition-all font-sans text-sm shadow-sm ${errors.password ? 'border-red-500' : 'border-sand focus:border-caramel focus:ring-4 focus:ring-caramel/5'}`}
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-ink uppercase tracking-widest leading-none block ml-1">Confirm</label>
              <div className="relative group">
                <input
                  {...register('confirmPassword')}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className={`w-full p-3.5 border-[1.5px] rounded-2xl bg-white focus:outline-none transition-all font-sans text-sm shadow-sm ${errors.confirmPassword ? 'border-red-500' : 'border-sand'}`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-brown"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
          {(errors.password || errors.confirmPassword) && (
            <p className="text-[11px] text-red-500 font-medium ml-1">
              {errors.password?.message || errors.confirmPassword?.message}
            </p>
          )}

          {/* Consultant Code */}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setShowSaleCode(!showSaleCode)}
              className="text-xs text-caramel font-bold hover:underline underline-offset-4 flex items-center gap-2 transition-all opacity-80 hover:opacity-100"
            >
              <Ticket className="w-4 h-4" />
              Have a consultant code?
            </button>
            <AnimatePresence>
              {showSaleCode && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden mt-3"
                >
                  <div className="bg-white p-3.5 rounded-2xl border-2 border-dashed border-sand/60">
                    <div className="flex gap-2">
                      <input
                        {...register('saleCode')}
                        placeholder="SLR-123"
                        className="flex-1 bg-white border border-sand rounded-xl px-3 py-2 uppercase font-sans text-xs tracking-widest outline-none focus:border-caramel transition-all italic"
                      />
                      <button
                        type="button"
                        onClick={handleVerifySaleCode}
                        disabled={isVerifying || !currentSaleCode}
                        className="bg-forest text-white px-4 rounded-xl text-xs font-bold hover:bg-ink transition-all disabled:opacity-50 min-w-[70px]"
                      >
                        {isVerifying ? <div className="w-3.5 h-3.5 border-2 border-white/20 border-t-white rounded-full animate-spin mx-auto" /> : 'Apply'}
                      </button>
                    </div>
                    {saleStatus !== 'idle' && (
                      <div className={`flex items-center gap-1.5 mt-2.5 text-[10px] font-bold ${saleStatus === 'valid' ? 'text-forest' : 'text-red-500'}`}>
                        {saleStatus === 'valid' ? <Check className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                        {saleMessage}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Terms & Conditions Checkbox */}
          <div className="pt-2">
            <div className="flex items-start gap-3 group cursor-pointer">
              <div className="relative flex items-center mt-0.5">
                <input
                  {...register('terms')}
                  type="checkbox"
                  id="su-terms"
                  className="peer h-5 w-5 cursor-pointer appearance-none rounded-lg border-2 border-sand bg-white transition-all checked:border-forest checked:bg-forest hover:border-caramel focus:outline-none focus:ring-4 focus:ring-forest/5"
                />
                <Check className="absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition-opacity peer-checked:opacity-100 pointer-events-none" />
              </div>
              <label
                htmlFor="su-terms"
                className="text-[13px] text-muted leading-relaxed cursor-pointer select-none group-hover:text-ink transition-colors"
              >
                I agree to the <a href="#" className="text-caramel font-semibold hover:underline underline-offset-4">Terms of Service</a> and <a href="#" className="text-caramel font-semibold hover:underline underline-offset-4">Privacy Policy</a> of PNetAI.
              </label>
            </div>
            {errors.terms && <p className="text-[11px] text-red-500 font-medium ml-8 mt-1.5">{errors.terms.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-brown hover:bg-ink text-white p-4 rounded-xl font-sans text-[15px] font-medium transition-all shadow-lg shadow-brown/15 hover:shadow-ink/25 disabled:opacity-70 mt-4 flex items-center justify-center gap-2 group"
          >
            Create Account
            <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-ink/40 font-medium">
          Powered by PNetAI Pet Ecosystem
        </p>
      </motion.div>
    </AuthLayout>
  );
};

export default SignUpPage;
