'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUserStore } from '@/store/user';
import Link from 'next/link';

export default function RegisterPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  
  const router = useRouter();
  const register = useUserStore((state: { register: (firstName: string, lastName: string, email: string, password: string) => Promise<void> }) => state.register);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Пароли не совпадают');
      return;
    }

    try {
      await register(firstName, lastName, email, password);
      router.push('/');
    } catch {
      setError('Ошибка при регистрации');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-green-100 to-yellow-100">
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="w-full [@media(min-width:800px)]:shadow-xl [@media(min-width:800px)]:bg-white [@media(min-width:800px)]:rounded-2xl max-w-md p-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-8">Регистрация</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Имя
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Ярополк"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Фамилия
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Иванов"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Email адрес
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

            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Повторите пароль
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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

            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded-lg py-3 font-medium hover:bg-blue-600 transition-colors"
            >
              Зарегистрироваться
            </button>
          </form>

          <div className="mt-8 text-center">
            <span className="text-gray-600">Уже зарегистрированы? </span>
            <Link 
              href="/login"
              className="text-blue-500 hover:text-blue-600 font-medium"
            >
              Войти в аккаунт
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 