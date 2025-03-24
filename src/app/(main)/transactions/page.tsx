'use client';

import { ChevronDownIcon } from '@heroicons/react/20/solid';

interface Operation {
  id: string;
  date: string;
  account: string;
  category: string;
  comment: string;
  amount: number;
}

const operations: Operation[] = [
  {
    id: '1',
    date: '1 ноября 2024',
    account: 'Основной счёт',
    category: 'Продукты',
    comment: 'Закупка на неделю в супермаркете',
    amount: -3500
  },
  {
    id: '2',
    date: '3 ноября 2024',
    account: 'Основной счёт',
    category: 'Транспорт',
    comment: 'Заправка автомобиля',
    amount: -2000
  },
  {
    id: '3',
    date: '4 ноября 2024',
    account: 'Основной счёт',
    category: 'Кафе и рестораны',
    comment: 'Вечер с друзьями в кафе',
    amount: -1500
  },
  {
    id: '4',
    date: '5 ноября 2024',
    account: 'Основной счёт',
    category: 'Зарплата',
    comment: 'Ежемесячная выплата за работу',
    amount: 40000
  },
  {
    id: '5',
    date: '6 ноября 2024',
    account: 'Основной счёт',
    category: 'Развлечения',
    comment: 'Билеты на концерт',
    amount: -2300
  },
  {
    id: '6',
    date: '7 ноября 2024',
    account: 'Основной счёт',
    category: 'Одежда и обувь',
    comment: 'Новые кроссовки для тренировок',
    amount: -1200
  },
  {
    id: '7',
    date: '9 ноября 2024',
    account: 'Основной счёт',
    category: 'Коммунальные услуги',
    comment: 'Оплата электричества',
    amount: -800
  },
  {
    id: '8',
    date: '12 ноября 2024',
    account: 'Основной счёт',
    category: 'Подарки',
    comment: 'День рождения друга',
    amount: -1500
  },
  {
    id: '9',
    date: '13 ноября 2024',
    account: 'Основной счёт',
    category: 'Здоровье и фитнес',
    comment: 'Абонемент на месяц в спортзал',
    amount: -3000
  },
  {
    id: '10',
    date: '14 ноября 2024',
    account: 'Основной счёт',
    category: 'Премия',
    comment: 'Премия за успешное завершение проекта',
    amount: 8500
  },
  {
    id: '11',
    date: '16 ноября 2024',
    account: 'Основной счёт',
    category: 'Развлечения',
    comment: 'Билет в кино',
    amount: -500
  },
  {
    id: '12',
    date: '18 ноября 2024',
    account: 'Основной счёт',
    category: 'Продажа вещей',
    comment: 'Продажа ненужной техники',
    amount: 2000
  },
  {
    id: '13',
    date: '19 ноября 2024',
    account: 'Основной счёт',
    category: 'Коммунальные услуги',
    comment: 'Оплата газа и воды',
    amount: -4000
  },
  {
    id: '14',
    date: '20 ноября 2024',
    account: 'Основной счёт',
    category: 'Здоровье и фитнес',
    comment: 'Покупка витаминов и спортивного питания',
    amount: -3000
  }
];

export default function OperationsPage() {
  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-gray-900">Операции</h1>
        <select className="hidden [@media(min-width:800px)]:block border border-gray-300 rounded-lg px-4 py-2 bg-white w-[120px]">
          <option>Этот месяц</option>
          <option>Прошлый месяц</option>
          <option>За год</option>
        </select>
        <button className="[@media(min-width:800px)]:hidden flex items-center justify-between px-4 py-2 bg-white rounded-lg border text-left w-[120px]">
          <span className="text-gray-900">Этот месяц</span>
          <ChevronDownIcon className="h-5 w-5 text-gray-500" />
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="divide-y divide-gray-200">
          <div className="hidden [@media(min-width:800px)]:grid [@media(min-width:800px)]:grid-cols-[140px_140px_160px_1fr_140px] [@media(min-width:800px)]:gap-4 [@media(min-width:800px)]:px-6 [@media(min-width:800px)]:py-3 bg-gray-50">
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Дата</div>
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Счёт</div>
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Категория</div>
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Комментарий</div>
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wider text-right">Сумма</div>
          </div>
          {operations.map((operation) => (
            <div key={operation.id} className="hover:bg-gray-50 cursor-pointer">
              <div className="[@media(min-width:800px)]:hidden p-4">
                <div className="text-sm text-gray-600 mb-1">{operation.date}</div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-gray-900">{operation.category}</h3>
                    <p className="text-sm text-gray-500">{operation.comment}</p>
                  </div>
                  <div className="text-right">
                    <div className={`font-medium ${operation.amount > 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {operation.amount > 0 ? '' : '− '}
                      {Math.abs(operation.amount).toLocaleString('ru-RU')} ₽
                    </div>
                    <div className="text-sm text-gray-500">{operation.account}</div>
                  </div>
                </div>
              </div>
              <div className="hidden [@media(min-width:800px)]:grid [@media(min-width:800px)]:grid-cols-[140px_140px_160px_1fr_140px] [@media(min-width:800px)]:gap-4 [@media(min-width:800px)]:px-6 [@media(min-width:800px)]:py-4 [@media(min-width:800px)]:items-center h-[60px]">
                <div className="text-sm text-gray-900 truncate">{operation.date}</div>
                <div className="text-sm text-gray-900 truncate">{operation.account}</div>
                <div className="text-sm text-gray-900 truncate">{operation.category}</div>
                <div className="text-sm text-gray-900 truncate">{operation.comment}</div>
                <div className={`text-sm font-medium text-right whitespace-nowrap ${
                  operation.amount > 0 ? 'text-green-500' : 'text-red-500'
                }`}>
                  {operation.amount > 0 ? '' : '− '}
                  {Math.abs(operation.amount).toLocaleString('ru-RU')} ₽
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 