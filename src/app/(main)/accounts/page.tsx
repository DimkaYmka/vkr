'use client';

interface Account {
  id: string;
  name: string;
  type: string;
  balance: number;
  icon: string;
  isDebt?: boolean;
  isNegative?: boolean;
}

const accounts: Account[] = [
  {
    id: '1',
    name: 'Основной счёт',
    type: 'Обычный',
    balance: 10500,
    icon: '🏠'
  },
  {
    id: '2',
    name: 'Карточный счёт',
    type: 'Обычный',
    balance: 8200,
    icon: '💳'
  },
  {
    id: '3',
    name: 'Сбережения',
    type: 'Накопительный',
    balance: 50000,
    icon: '💰'
  },
  {
    id: '4',
    name: 'Фонд путешествий',
    type: 'Накопительный счёт',
    balance: 30000,
    icon: '✈️'
  },
  {
    id: '5',
    name: 'Автокредит',
    type: 'Долговой; я должен',
    balance: -200000,
    icon: '⚠️',
    isDebt: true,
    isNegative: true
  },
  {
    id: '6',
    name: 'Ипотека',
    type: 'Долговой; я должен',
    balance: -1500000,
    icon: '😰',
    isDebt: true,
    isNegative: true
  },
  {
    id: '7',
    name: 'Займ Доброславу',
    type: 'Долговой; мне должны',
    balance: 15000,
    icon: '💌',
    isDebt: true
  },
  {
    id: '8',
    name: 'Инвест',
    type: 'Долговой; мне должны',
    balance: 100000,
    icon: '💼',
    isDebt: true
  }
];

export default function AccountsPage() {
  const totalBalance = accounts.reduce((sum, account) => sum + account.balance, 0);

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Счета</h1>
        <div className="text-right">
          <div className="text-sm text-gray-500">Общая сумма всех счётов</div>
          <div className="text-2xl font-semibold text-red-500">
            {totalBalance.toLocaleString('ru-RU')} ₽
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {accounts.map((account) => (
          <div
            key={account.id}
            className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">{account.icon}</span>
                  <h3 className="font-medium text-gray-900">{account.name}</h3>
                </div>
                <p className="text-sm text-gray-500 mt-1">{account.type}</p>
              </div>
            </div>
            <div className={`mt-2 text-lg font-semibold ${
              account.isNegative ? 'text-red-500' : 
              account.isDebt ? 'text-blue-500' : 
              'text-green-500'
            }`}>
              {account.isNegative ? '− ' : ''}{Math.abs(account.balance).toLocaleString('ru-RU')} ₽
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 