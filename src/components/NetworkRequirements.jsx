import React from 'react';

function NetworkRequirements() {
  const segments = [
    {
      name: 'セグメント100',
      range: '192.168.100.0/24',
      role: 'OQL端末や内部システムが所属'
    },
    {
      name: 'セグメント200',
      range: '192.168.200.0/24',
      role: '連携端末（ネットワークフォルダのホスト）が所属'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">2. ネットワーク要件</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-4">ネットワーク構成</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">セグメント</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">IPレンジ</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">役割</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {segments.map((segment, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{segment.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{segment.range}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{segment.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">通信要件</h3>
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">通信許可</h4>
              <p className="text-green-800">セグメント100 → セグメント200：ポート445（SMB通信）</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-red-900 mb-2">通信遮断</h4>
              <p className="text-red-800">セグメント200 → セグメント100：すべての通信</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NetworkRequirements;