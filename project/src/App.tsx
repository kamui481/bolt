import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

interface TeamData {
  name: string;
  lastYearSales: number;
  currentYearSales: number;
}

function calculateScore(lastYearSales: number, currentYearSales: number): number {
  const growthRate = (currentYearSales - lastYearSales) / lastYearSales;
  const logSales = Math.log10(currentYearSales);
  return logSales + growthRate;
}

function App() {
  const [teams, setTeams] = useState<TeamData[]>([
    { name: 'Team A', lastYearSales: 90000000, currentYearSales: 100000000 },
    { name: 'Team B', lastYearSales: 3000000, currentYearSales: 5000000 }
  ]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY',
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-3 mb-8">
            <Calculator className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-800">売上スコア計算機</h1>
          </div>

          <div className="grid gap-8">
            {teams.map((team, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">{team.name}</h2>
                
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">
                        昨年売上
                      </label>
                      <input
                        type="number"
                        value={team.lastYearSales}
                        onChange={(e) => {
                          const newTeams = [...teams];
                          newTeams[index].lastYearSales = Number(e.target.value);
                          setTeams(newTeams);
                        }}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-600 mb-1">
                        今年売上
                      </label>
                      <input
                        type="number"
                        value={team.currentYearSales}
                        onChange={(e) => {
                          const newTeams = [...teams];
                          newTeams[index].currentYearSales = Number(e.target.value);
                          setTeams(newTeams);
                        }}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-md shadow-sm">
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <div className="text-sm text-gray-600">成長率</div>
                        <div className="text-lg font-semibold">
                          {(((team.currentYearSales - team.lastYearSales) / team.lastYearSales) * 100).toFixed(1)}%
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">売上の対数</div>
                        <div className="text-lg font-semibold">
                          {Math.log10(team.currentYearSales).toFixed(3)}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600">最終スコア</div>
                        <div className="text-lg font-semibold text-indigo-600">
                          {calculateScore(team.lastYearSales, team.currentYearSales).toFixed(3)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-indigo-50 rounded-lg">
            <h3 className="text-lg font-semibold text-indigo-900 mb-2">計算方法</h3>
            <p className="text-indigo-700">
              スコア = log₁₀(今年売上) + 前年比成長率
            </p>
            <p className="text-sm text-indigo-600 mt-2">
              この計算方法では、大きな売上を持つチームと小さな売上から伸ばしたチームを公平に評価できます。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;