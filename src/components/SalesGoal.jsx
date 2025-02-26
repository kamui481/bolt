import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

function SalesGoal() {
  const data = [
    { name: 'AI研修', value: 50 },
    { name: '受託開発', value: 30 },
    { name: '画像製作', value: 20 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">売上販売目標 SALES GOAL</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">年間売上目標</h3>
          <div className="text-3xl font-bold">1億円</div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">成長目標</h3>
          <div>
            <p>AI研修受講者数</p>
            <p className="text-xl font-bold">1年間で200%増加</p>
          </div>
          <div className="mt-2">
            <p>SNSフォロワー数</p>
            <p className="text-xl font-bold">1年間で300%増加</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">サービス比率</h3>
        <div className="flex items-center justify-center">
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              cx={100}
              cy={100}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>
    </div>
  );
}