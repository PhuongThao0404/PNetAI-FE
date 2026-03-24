import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, Check, AlertCircle, Ticket } from 'lucide-react';
import { Link } from 'react-router-dom';

// SignUp Schema with optional saleCode
const signUpSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  saleCode: z.string().optional(),
});

type SignUpFormValues = z.infer<typeof signUpSchema>;

const SignUpPage: React.FC = () => {
  const [showSaleCode, setShowSaleCode] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [saleStatus, setSaleStatus] = useState<'idle' | 'valid' | 'invalid'>('idle');
  const [saleMessage, setSaleMessage] = useState('');
  
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
    setSaleStatus('idle');
    
    // Simulating API call
    setTimeout(() => {
      setIsVerifying(false);
      if (currentSaleCode.toUpperCase() === 'PAW10' || currentSaleCode.toUpperCase() === 'PNETAI') {
        setSaleStatus('valid');
        setSaleMessage('Congrats! You will receive 10% off your first service.');
      } else {
        setSaleStatus('invalid');
        setSaleMessage('Sale code does not exist.');
      }
    }, 1500);
  };

  const onSubmit = async (data: SignUpFormValues) => {
    console.log('Registering user:', data);
    // Add registration logic here
  };

  return (
    <div className="min-h-screen flex selection:bg-caramel/20">
      {/* Left: Branding & Quote (60%) - Consistent with Login */}
      <div className="hidden lg:flex lg:w-[60%] relative overflow-hidden bg-ink">
        <img 
          src="/pet_showcase_2_prompt_a_high_end_editorial_photograph_of_a_shiba_inu_dog_standing_gracefully_in_a_minimalist_garden_with_autumn_leaves_warm_golden_hour_lighting_japanese_aesthetic_high_resolution_1774347272304.png" 
          alt="Premium Pet"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSBic2VEYXNlRnJlcXVlbmN5PSIwLjY1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIvPjwvc3ZnPg==')] opacity-[0.05] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
        
        <div className="absolute bottom-20 left-20 right-20 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-caramel font-serif italic text-xl mb-4 block tracking-wide">Join PNetAI Community</span>
            <h2 className="text-white font-serif italic text-4xl lg:text-5xl leading-tight max-w-lg">
              "Creating a world where every paw find its way home."
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Right: Register Form (40%) */}
      <div className="w-full lg:w-[40%] bg-warm flex items-center justify-center p-8 lg:p-16 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-[-5%] right-[-10%] w-72 h-72 bg-caramel/5 rounded-full blur-[100px]" />
        
        <motion.div 
          className="w-full max-w-md z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-serif italic font-extrabold text-[#2C2418] mb-3">
              Start your journey
            </h1>
            <p className="text-muted font-sans text-sm">
              Create an account to access premium pet services.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-widest text-ink/70 ml-1">
                Full Name
              </label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted group-focus-within:text-caramel transition-colors" />
                <input
                  {...register('fullName')}
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-white border border-forest/20 rounded-2xl py-3.5 pl-12 pr-4 outline-none focus:border-caramel focus:ring-4 focus:ring-caramel/5 transition-all font-sans text-sm"
                />
              </div>
              {errors.fullName && <p className="text-xs text-red-500 ml-1">{errors.fullName.message}</p>}
            </div>

            {/* Email */}
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
                  className="w-full bg-white border border-forest/20 rounded-2xl py-3.5 pl-12 pr-4 outline-none focus:border-caramel focus:ring-4 focus:ring-caramel/5 transition-all font-sans text-sm"
                />
              </div>
              {errors.email && <p className="text-xs text-red-500 ml-1">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-bold uppercase tracking-widest text-ink/70 ml-1">
                Password
              </label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted group-focus-within:text-caramel transition-colors" />
                <input
                  {...register('password')}
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-white border border-forest/20 rounded-2xl py-3.5 pl-12 pr-4 outline-none focus:border-caramel focus:ring-4 focus:ring-caramel/5 transition-all font-sans text-sm"
                />
              </div>
              {errors.password && <p className="text-xs text-red-500 ml-1">{errors.password.message}</p>}
            </div>

            {/* Sale Code Section */}
            <div className="py-2">
              <button
                type="button"
                onClick={() => setShowSaleCode(!showSaleCode)}
                className="text-xs text-caramel font-bold hover:underline underline-offset-4 flex items-center gap-2"
              >
                <Ticket className="w-4 h-4" />
                Have a referral code?
              </button>
              
              <AnimatePresence>
                {showSaleCode && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'circOut' }}
                    className="overflow-hidden mt-3"
                  >
                    <div className="bg-white/50 p-4 rounded-2xl border-2 border-dashed border-sand/60">
                      <div className="flex gap-2">
                        <input
                          {...register('saleCode')}
                          type="text"
                          placeholder="SALE10"
                          className="flex-1 bg-white border border-sand rounded-xl px-4 py-2 uppercase font-sans text-sm tracking-widest outline-none focus:border-caramel transition-all"
                        />
                        <button
                          type="button"
                          onClick={handleVerifySaleCode}
                          disabled={isVerifying || !currentSaleCode}
                          className="bg-forest text-white px-5 rounded-xl text-xs font-bold hover:bg-ink transition-all disabled:opacity-50 min-w-[80px]"
                        >
                          {isVerifying ? (
                            <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin mx-auto" />
                          ) : (
                            'Apply'
                          )}
                        </button>
                      </div>
                      
                      {/* Sale Code Feedback */}
                      {saleStatus !== 'idle' && (
                        <motion.div 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className={`flex items-center gap-1.5 mt-3 text-[11px] font-bold ${
                            saleStatus === 'valid' ? 'text-forest' : 'text-red-500'
                          }`}
                        >
                          {saleStatus === 'valid' ? <Check className="w-3.5 h-3.5" /> : <AlertCircle className="w-3.5 h-3.5" />}
                          {saleMessage}
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-forest text-white py-4 rounded-full font-bold text-sm hover:bg-ink hover:-translate-y-0.5 transition-all shadow-xl shadow-forest/20 disabled:opacity-70 mt-4 group"
            >
              Start Free Trial
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </form>

          {/* Footer Link */}
          <p className="mt-8 text-center text-sm text-muted">
            Already have an account?{' '}
            <Link to="/login" className="text-caramel font-bold hover:underline underline-offset-4">Sign in here</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SignUpPage;
export { SignUpPage };
