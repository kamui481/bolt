import React from 'react';

function MarketAnalysis() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">市場分析 MARKET ANALYSIS</h2>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">AIテック市場の成長と需要</h3>
        <p className="text-gray-600">
          AIテック市場は急速に成長しており、特に生成AI技術への注目が高まっています。企業の業務効率化やデジタルトランスフォーメーションの需要が増加し、AI研修やAIを活用したソリューション開発のニーズが拡大しています。
        </p>
        <div className="mt-4">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
            alt="Modern office buildings"
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
        <div className="mt-4">
          <h4 className="font-semibold">同業他社の分析</h4>
          <p className="text-gray-600">
            AIテック市場には、大手IT企業から新興のスタートアップまで、多様なプレイヤーが参入しています。
          </p>
        </div>
      </div>
    </div>
  );
}