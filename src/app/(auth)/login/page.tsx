'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/store/user';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const login = useUserStore(state => state.login);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Пожалуйста, заполните все поля');
      return;
    }

    try {
      await login(email, password);
      router.replace('/transactions');
    } catch {
      setError('Неверный email или пароль');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-green-100 to-yellow-100">
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="w-full [@media(min-width:800px)]:shadow-xl [@media(min-width:800px)]:bg-white [@media(min-width:800px)]:rounded-2xl max-w-md p-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-8">Вход в аккаунт</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Email или логин
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="ivanov@yandex.ru"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Пароль
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="******"
                required
              />
            </div>

            {error && (
              <div className="text-red-500 text-sm">
                {error}
              </div>
            )}

            <div className="flex justify-end">
              <Link 
                href="/forgot-password"
                className="text-sm text-blue-500 hover:text-blue-600"
              >
                Забыли пароль?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded-lg py-3 font-medium hover:bg-blue-600 transition-colors"
            >
              Войти
            </button>
          </form>

          <div className="mt-8 text-center">
            <span className="text-gray-600">Нет аккаунта? </span>
            <Link 
              href="/register"
              className="text-blue-500 hover:text-blue-600 font-medium"
            >
              Зарегистрироваться
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
