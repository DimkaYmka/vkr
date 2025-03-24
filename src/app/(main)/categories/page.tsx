'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const mockCategories = [
  { id: '1', name: 'Продукты', type: 'expense', description: 'Покупки в супермаркетах и продуктовых магазинах' },
  { id: '2', name: 'Транспорт', type: 'expense', description: 'Общественный транспорт, такси, бензин' },
  { id: '3', name: 'Развлечения', type: 'expense', description: 'Кино, театры, концерты и другие развлечения' },
  { id: '4', name: 'Зарплата', type: 'income', description: 'Ежемесячная заработная плата' },
  { id: '5', name: 'Фриланс', type: 'income', description: 'Доходы от подработок и фриланса' },
  { id: '6', name: 'Кафе и рестораны', type: 'expense', description: 'Питание вне дома' },
  { id: '7', name: 'Здоровье', type: 'expense', description: 'Лекарства, врачи, медицинские услуги' },
  { id: '8', name: 'Подарки', type: 'expense', description: 'Подарки друзьям и близким' },
];

export default function CategoriesPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedType, setSelectedType] = useState('all');
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  const filteredCategories = mockCategories.filter(category => {
    if (selectedType === 'all') return true;
    return category.type === selectedType;
  });

  return (
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-gray-900">Категории</h1>
        <div className="hidden [@media(min-width:800px)]:flex items-center gap-4">
          <select 
            className="border border-gray-300 rounded-lg px-4 py-2 bg-white w-[120px]"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="all">Все типы</option>
            <option value="income">Доходы</option>
            <option value="expense">Расходы</option>
          </select>
          <select 
            className="border border-gray-300 rounded-lg px-4 py-2 bg-white w-[120px]"
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
          >
            <option value="month">Этот месяц</option>
            <option value="year">Этот год</option>
            <option value="all">За всё время</option>
          </select>
        </div>
      </div>

      <div className="[@media(min-width:800px)]:hidden space-y-2 mb-4">
        <button className="w-full flex items-center justify-between px-4 py-2 bg-white rounded-lg border text-left">
          <span className="text-gray-900">Все типы</span>
          <ChevronDownIcon className="h-5 w-5 text-gray-500" />
        </button>
        <button className="w-full flex items-center justify-between px-4 py-2 bg-white rounded-lg border text-left">
          <span className="text-gray-900">Этот месяц</span>
          <ChevronDownIcon className="h-5 w-5 text-gray-500" />
        </button>
      </div>

      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className={cn(
            "px-4 py-2 rounded-lg font-medium",
            isEditing ? "bg-gray-200 text-gray-900" : "bg-blue-500 text-white"
          )}
        >
          {isEditing ? "Готово" : "Режим редактирования"}
        </button>
        {isEditing && (
          <button className="px-4 py-2 text-gray-500 font-medium">
            Отмена
          </button>
        )}
      </div>

      <div className="grid [@media(min-width:800px)]:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredCategories.map((category) => (
          <div
            key={category.id}
            className={cn(
              "bg-white rounded-xl p-4 shadow-sm",
              "flex [@media(min-width:800px)]:block items-center justify-between",
              isEditing && "cursor-pointer hover:bg-gray-50"
            )}
          >
            <div>
              <h3 className="font-medium text-gray-900">{category.name}</h3>
              <p className="text-sm text-gray-500 [@media(min-width:800px)]:mt-1">{category.description}</p>
            </div>
            <div className={cn(
              "text-sm font-medium",
              category.type === 'income' ? 'text-green-500' : 'text-red-500'
            )}>
              {category.type === 'income' ? 'Доход' : 'Расход'}
            </div>
          </div>
        ))}
        {isEditing && (
          <button className="flex items-center justify-center h-[120px] rounded-xl border-2 border-dashed border-gray-300 text-gray-500 hover:border-gray-400 hover:text-gray-600">
            <span className="font-medium">Добавить категорию</span>
          </button>
        )}
      </div>
    </div>
  );
} 