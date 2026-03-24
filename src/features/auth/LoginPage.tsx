import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useAuth } from './hooks/useAuth';

// Validation Schema
const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      await login(data.email);
      // Logic after login (e.g., redirect) would go here
      console.log('Login successful', data);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="min-h-screen flex selection:bg-caramel/20">
      {/* Left: Image Section (60%) */}
      <div className="hidden lg:flex lg:w-[60%] relative overflow-hidden bg-ink">
        <img 
          src="/pet_showcase_2_prompt_a_high_end_editorial_photograph_of_a_shiba_inu_dog_standing_gracefully_in_a_minimalist_garden_with_autumn_leaves_warm_golden_hour_lighting_japanese_aesthetic_high_resolution_1774347272304.png" 
          alt="Premium Pet"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        {/* Noise Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSBic2VEYXNlRnJlcXVlbmN5PSIwLjY1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIvPjwvc3ZnPg==')] opacity-[0.05] pointer-events-none" />
        
        {/* Overlay Decoration */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
        
        <div className="absolute bottom-20 left-20 right-20 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-caramel font-serif italic text-xl mb-4 block">PNetAI Lifestyle</span>
            <h2 className="text-white font-serif italic text-4xl lg:text-5xl leading-tight max-w-lg">
              "Where love begins with the smallest things."
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Right: Form Section (40%) */}
      <div className="w-full lg:w-[40%] bg-warm flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-caramel/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-5%] left-[-5%] w-48 h-48 bg-forest/5 rounded-full blur-2xl" />

        <motion.div 
          className="w-full max-w-md z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl font-serif italic font-bold text-ink mb-3 group">
              Welcome back
              <span className="inline-block ml-2 group-hover:rotate-12 transition-transform">🐾</span>
            </h1>
            <p className="text-muted font-sans text-sm">
              Please log in to continue your pet care journey.
            </p>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button className="flex items-center justify-center gap-3 py-3 px-4 border border-sand rounded-full hover:bg-white hover:border-caramel transition-all group">
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <span className="text-xs font-bold uppercase tracking-wider text-muted">Google</span>
            </button>
            <button className="flex items-center justify-center gap-3 py-3 px-4 border border-sand rounded-full hover:bg-white hover:border-caramel transition-all group">
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              <span className="text-xs font-bold uppercase tracking-wider text-muted">Github</span>
            </button>
          </div>

          <div className="relative mb-8 text-center uppercase text-[10px] tracking-[0.2em] text-muted font-bold">
            <span className="bg-warm px-4 relative z-10">Or continue with email</span>
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-sand" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-widest text-ink/70 ml-1">
                Email Address
              </label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted group-focus-within:text-caramel transition-colors" />
                <input
                  {...register('email')}
                  type="email"
                  placeholder="name@example.com"
                  className={`w-full bg-white border ${errors.email ? 'border-red-300' : 'border-forest/20'} rounded-2xl py-3.5 pl-12 pr-4 outline-none focus:border-caramel focus:ring-4 focus:ring-caramel/5 transition-all font-sans text-sm`}
                />
              </div>
              {errors.email && (
                <p className="text-xs text-red-500 mt-1 ml-1">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center ml-1">
                <label className="text-[11px] font-bold uppercase tracking-widest text-ink/70">
                  Password
                </label>
                <a href="#" className="text-[11px] text-caramel font-bold hover:underline">Forgot password?</a>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted group-focus-within:text-caramel transition-colors" />
                <input
                  {...register('password')}
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className={`w-full bg-white border ${errors.password ? 'border-red-300' : 'border-forest/20'} rounded-2xl py-3.5 pl-12 pr-12 outline-none focus:border-caramel focus:ring-4 focus:ring-caramel/5 transition-all font-sans text-sm`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-caramel transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-xs text-red-500 mt-1 ml-1">{errors.password.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-forest text-white py-4 rounded-full font-bold text-sm hover:bg-ink hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-xl shadow-forest/20 disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
              ) : (
                'Log in now'
              )}
            </button>
          </form>

          {/* Footer */}
          <p className="mt-10 text-center text-[13px] text-muted font-sans">
            Don't have an account?{' '}
            <a href="#" className="text-caramel font-bold hover:underline underline-offset-4">Create new account</a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
export { LoginPage };
