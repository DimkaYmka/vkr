'use client';

import { LineChart } from '@/components/LineChart'
import { cn } from '@/lib/utils'
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const mockData = {
  income: {
    data: [3000, 3500, 4000, 4100, 3800, 3600, 2500, 2800, 3800, 3700, 4000, 2200, 2500, 2800, 2200, 2500, 2800, 3000, 4200, 4300, 4000, 2500],
    average: {
      daily: 4000,
      current: 5500,
      weekly: 28000
    }
  },
  expenses: {
    data: [2800, 3200, 3800, 4200, 3900, 3400, 2600, 2900, 3600, 3500, 4000, 2400, 2300, 2600, 2100, 2400, 2700, 2800, 4000, 4100, 3800, 2400],
    average: {
      daily: 3167,
      current: 4000,
      weekly: 22000
    }
  },
  categories: [
    { name: 'Продукты', amount: -12500, percentage: 13, type: 'expense' },
    { name: 'Транспорт', amount: -8000, percentage: 8, type: 'expense' },
    { name: 'Кафе и рестораны', amount: -9500, percentage: 10, type: 'expense' },
    { name: 'Развлечения', amount: -7000, percentage: 7, type: 'expense' },
    { name: 'Аренда жилья', amount: -25000, percentage: 26, type: 'expense' },
    { name: 'Премия', amount: 30000, percentage: 25, type: 'income' },
    { name: 'Коммунальные услуги', amount: -6000, percentage: 6, type: 'expense' },
    { name: 'Здоровье', amount: -5000, percentage: 5, type: 'expense' },
    { name: 'Спорт и фитнес', amount: -3500, percentage: 4, type: 'expense' },
    { name: 'Зарплата', amount: 90000, percentage: 75, type: 'income' },
  ]
}

export default function ReportsPage() {
  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-gray-900">Отчёты</h1>
        <select className="hidden [@media(min-width:800px)]:block border border-gray-300 rounded-lg px-4 py-2 bg-white w-[100px]">
          <option>Этот месяц</option>
          <option>Прошлый месяц</option>
          <option>За год</option>
        </select>
        <button className="[@media(min-width:800px)]:hidden flex items-center justify-between px-4 py-2 bg-white rounded-lg border text-left w-[100px]">
          <span className="text-gray-900">Этот месяц</span>
          <ChevronDownIcon className="h-5 w-5 text-gray-500" />
        </button>
      </div>

      <div className="space-y-4">
        {/* Графики */}
        <div className="grid [@media(min-width:800px)]:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <h2 className="text-lg font-medium mb-4">Доходы</h2>
            <LineChart data={mockData.income.data} type="income" />
          </div>
          
          <div className="bg-white rounded-xl p-4 shadow-sm">
            <h2 className="text-lg font-medium mb-4">Расходы</h2>
            <LineChart data={mockData.expenses.data} type="expense" />
          </div>
        </div>

        {/* Средние значения */}
        <div className="grid [@media(min-width:800px)]:grid-cols-2 gap-4">
          <div className="bg-green-50 rounded-xl p-4">
            <h3 className="text-lg font-medium mb-4">Средний доход</h3>
            <div className="grid grid-cols-1 [@media(min-width:800px)]:grid-cols-3 gap-4">
              <div>
                <div className="text-sm text-gray-600">за день</div>
                <div className="text-xl font-medium text-green-500">{mockData.income.average.daily} ₽</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">за текущий день</div>
                <div className="text-xl font-medium text-green-500">{mockData.income.average.current} ₽</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">за текущую неделю</div>
                <div className="text-xl font-medium text-green-500">{mockData.income.average.weekly} ₽</div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-xl p-4">
            <h3 className="text-lg font-medium mb-4">Средняя сумма расходов</h3>
            <div className="grid grid-cols-1 [@media(min-width:800px)]:grid-cols-3 gap-4">
              <div>
                <div className="text-sm text-gray-600">за день</div>
                <div className="text-xl font-medium text-red-500">{mockData.expenses.average.daily} ₽</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">за текущий день</div>
                <div className="text-xl font-medium text-red-500">{mockData.expenses.average.current} ₽</div>
              </div>
              <div>
                <div className="text-sm text-gray-600">за текущую неделю</div>
                <div className="text-xl font-medium text-red-500">{mockData.expenses.average.weekly} ₽</div>
              </div>
            </div>
          </div>
        </div>

        {/* Категории */}
        <div className="grid [@media(min-width:800px)]:grid-cols-5 gap-4">
          {mockData.categories.map((category) => (
            <div key={category.name} className="bg-white rounded-xl p-4 shadow-sm">
              <h4 className="font-medium mb-2">{category.name}</h4>
              <div className="flex justify-between items-baseline [@media(min-width:800px)]:block">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Сумма</div>
                  <div className={cn(
                    "text-lg font-medium mb-2",
                    category.type === 'income' ? 'text-green-500' : 'text-red-500'
                  )}>
                    {category.type === 'income' ? '' : '−'}{Math.abs(category.amount)} ₽
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">
                    от общего {category.type === 'income' ? 'дохода' : 'расхода'}
                  </div>
                  <div className={cn(
                    "text-sm font-medium",
                    category.type === 'income' ? 'text-green-500' : 'text-red-500'
                  )}>
                    {category.percentage}%
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 