'use client';

import { Fragment } from 'react';
import { Disclosure } from '@headlessui/react';
import { 
  Bars3Icon, 
  XMarkIcon, 
  CreditCardIcon,
  Square2StackIcon,
  ArrowsRightLeftIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuthStore } from '@/lib/store';

const navigation = [
  { name: 'Счета', href: '/accounts', icon: CreditCardIcon },
  { name: 'Категории', href: '/categories', icon: Square2StackIcon },
  { name: 'Операции', href: '/transactions', icon: ArrowsRightLeftIcon },
  { name: 'Отчёты', href: '/reports', icon: ChartBarIcon },
];

export default function Navigation() {
  const pathname = usePathname();
  const user = useAuthStore((state) => state.user);

  return (
    <Disclosure as="nav" className="bg-white">
      {({ open, close }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                    <Image
                      src="/images/logo.svg"
                      alt="Logo"
                      width={32}
                      height={32}
                      className="h-8 w-auto"
                    />
                </div>
              </div>
              <div className="hidden sm:flex sm:items-center sm:space-x-8">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                        pathname === item.href
                          ? 'text-indigo-600'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      <Icon className="h-5 w-5 mr-2" />
                      {item.name}
                    </Link>
                  );
                })}
                <Link
                  href="/profile"
                  className="flex rounded-full bg-white text-sm focus:outline-none"
                >
                  <span className="sr-only">Перейти в профиль</span>
                  <div className="h-8 w-8 rounded-full bg-indigo-100 overflow-hidden">
                    <Image
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.avatarSeed || 'Felix'}`}
                      alt="User avatar"
                      width={32}
                      height={32}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </Link>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Открыть главное меню</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => close()}
                    className={`flex items-center py-2 pl-3 pr-4 text-base font-medium ${
                      pathname === item.href
                        ? 'text-indigo-600 bg-indigo-50'
                        : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                    }`}
                  >
                    <Icon className="h-5 w-5 mr-3" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
            <div className="border-t border-gray-200 pb-3 pt-4">
              <Link
                href="/profile"
                onClick={() => close()}
                className="flex items-center px-4 hover:bg-gray-50"
              >
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-indigo-100 overflow-hidden">
                    <Image
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.avatarSeed || 'Felix'}`}
                      alt="User avatar"
                      width={32}
                      height={32}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">
                    {user ? `${user.firstName} ${user.lastName}` : 'Пользователь'}
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    {user?.email || 'user@example.com'}
                  </div>
                </div>
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
} 