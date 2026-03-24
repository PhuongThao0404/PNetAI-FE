import React, { useState } from 'react';
import Button from '../../../components/common/Button';
import { useAuth } from '../hooks/useAuth';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Email is required');
      return;
    }

    try {
      setError(null);
      setIsSubmitting(true);
      await login(email);
      console.log('Logged in successfully');
    } catch (err) {
      setError('Failed to sign in. Please check your credentials.');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md border border-slate-200 transition-all hover:shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-slate-800">Login to PNetAI</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="p-3 text-sm text-red-600 bg-red-50 rounded-md border border-red-200">
            {error}
          </div>
        )}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10 border px-3 transition-colors"
            placeholder="you@example.com"
            disabled={isSubmitting}
          />
        </div>
        <Button
          type="submit"
          className="w-full shadow-sm bg-accent-caramel"
          variant="primary"
          isLoading={isSubmitting}
        >
          Sign In
        </Button>
      </form>
    </div>
  );
};
