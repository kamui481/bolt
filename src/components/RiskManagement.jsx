import React from 'react';

function RiskManagement() {
  const risks = [
    {
      title: '経済変動',
      description: '不況時には消費者の購買力が低下し、売上に影響を与える可能性がある。'
    },
    {
      title: '競合他社の影響',
      description: '同業他社の新規参入や価格競争が激化で、市場シェアの減少や価格競争による利益率の低下が起こる可能性がある。'
    },
    {
      title: '自然災害',
      description: '地震や災害などの自然災害により、店舗や設備が被害を受けるリスクがある。'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">リスク管理 RISK MANAGEMENT</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-4">外部要因と内部リスクの分析</h3>
          {risks.map((risk, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-100 rounded-lg">
              <h4 className="font-semibold">{risk.title}</h4>
              <p className="text-gray-600">{risk.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}