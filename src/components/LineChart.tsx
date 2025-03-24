'use client'

interface LineChartProps {
  data: number[]
  type: 'income' | 'expense'
}

export function LineChart({ data, type }: LineChartProps) {
  const maxValue = Math.max(...data)
  const minValue = Math.min(...data)
  const range = maxValue - minValue
  
  // Нормализация значений для отображения в пределах высоты графика
  const normalizedData = data.map(value => 
    ((value - minValue) / (range || 1)) * 100
  )
  
  // Создаем строку для path
  const pathData = normalizedData.map((value, index) => {
    const x = (index / (data.length - 1)) * 100
    const y = 100 - value // Инвертируем Y, так как SVG координаты идут сверху вниз
    return `${index === 0 ? 'M' : 'L'} ${x} ${y}`
  }).join(' ')

  return (
    <div className="w-full h-[300px] relative">
      {/* Y-axis labels */}
      <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-sm text-gray-500">
        <span>{maxValue}</span>
        <span>{Math.round((maxValue + minValue) / 2)}</span>
        <span>{minValue}</span>
      </div>
      
      {/* X-axis labels */}
      <div className="absolute bottom-0 left-[40px] right-0 flex justify-between text-sm text-gray-500">
        <span>1</span>
        <span>15</span>
        <span>30</span>
      </div>

      {/* График */}
      <svg 
        className="absolute left-[40px] right-0 top-0 h-[calc(100%-20px)]" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
      >
        {/* Вертикальные линии сетки */}
        <line x1="0" y1="0" x2="0" y2="100" stroke="#E5E7EB" strokeWidth="0.5" />
        <line x1="50" y1="0" x2="50" y2="100" stroke="#E5E7EB" strokeWidth="0.5" />
        <line x1="100" y1="0" x2="100" y2="100" stroke="#E5E7EB" strokeWidth="0.5" />
        
        {/* Горизонтальные линии сетки */}
        <line x1="0" y1="0" x2="100" y2="0" stroke="#E5E7EB" strokeWidth="0.5" />
        <line x1="0" y1="50" x2="100" y2="50" stroke="#E5E7EB" strokeWidth="0.5" />
        <line x1="0" y1="100" x2="100" y2="100" stroke="#E5E7EB" strokeWidth="0.5" />
        
        {/* Линия графика */}
        <path
          d={pathData}
          fill="none"
          stroke={type === 'income' ? '#22C55E' : '#EF4444'}
          strokeWidth="2"
        />
      </svg>
    </div>
  )
} 