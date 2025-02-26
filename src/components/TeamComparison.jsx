import React from 'react';

function TeamComparison() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        チーム規模の異なる売上評価の比較分析
      </h2>

      {/* Scenario Setup */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">前提シナリオ</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">チームA（大規模）</h4>
            <ul className="space-y-2 text-blue-800">
              <li>昨年売上: 9,000万円</li>
              <li>今年売上: 1億円</li>
              <li>絶対成長: +1,000万円</li>
              <li>前年比成長率: 11.1%</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 mb-2">チームB（小規模）</h4>
            <ul className="space-y-2 text-green-800">
              <li>昨年売上: 300万円</li>
              <li>今年売上: 500万円</li>
              <li>絶対成長: +200万円</li>
              <li>前年比成長率: 66.7%</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Hybrid Evaluation */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          1. 成長率 × 絶対成長のハイブリッド評価
        </h3>
        <div className="bg-gray-50 p-6 rounded-lg space-y-4">
          <div>
            <h4 className="font-semibold mb-2">標準化後の値</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-medium">チームA:</p>
                <ul className="list-disc list-inside pl-4">
                  <li>成長率: 0</li>
                  <li>絶対成長: 1</li>
                </ul>
              </div>
              <div>
                <p className="font-medium">チームB:</p>
                <ul className="list-disc list-inside pl-4">
                  <li>成長率: 1</li>
                  <li>絶対成長: 0</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">加重平均の結果</h4>
            <div className="space-y-2">
              <div className="bg-purple-50 p-3 rounded">
                <p className="font-medium text-purple-900">成長率重視 (0.7:0.3)</p>
                <p>チームA: 0.3 / チームB: 0.7</p>
              </div>
              <div className="bg-indigo-50 p-3 rounded">
                <p className="font-medium text-indigo-900">絶対成長重視 (0.3:0.7)</p>
                <p>チームA: 0.7 / チームB: 0.3</p>
              </div>
              <div className="bg-blue-50 p-3 rounded">
                <p className="font-medium text-blue-900">五分五分 (0.5:0.5)</p>
                <p>チームA: 0.5 / チームB: 0.5</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logarithmic Scale */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          2. ログスケールによる規模差の圧縮
        </h3>
        <div className="bg-gray-50 p-6 rounded-lg space-y-4">
          <div>
            <h4 className="font-semibold mb-2">対数変換後の値</h4>
            <ul className="space-y-2">
              <li>チームA: log₁₀(1億) ≈ 8</li>
              <li>チームB: log₁₀(500万) ≈ 6.7</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">ログ＋成長率の組み合わせ</h4>
            <div className="bg-yellow-50 p-3 rounded">
              <p className="font-medium text-yellow-900">log(売上) + 成長率</p>
              <ul className="space-y-1">
                <li>チームA: 8.111</li>
                <li>チームB: 7.367</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Profit Rate × Scale */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          3. 利益率 × 規模の評価
        </h3>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">チームA</h4>
              <ul className="space-y-1">
                <li>売上: 1億円</li>
                <li>利益率: 15%</li>
                <li>√売上 ≈ 10,000</li>
                <li className="font-medium">スコア: 1,500</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">チームB</h4>
              <ul className="space-y-1">
                <li>売上: 500万円</li>
                <li>利益率: 50%</li>
                <li>√売上 ≈ 2,236</li>
                <li className="font-medium">スコア: 1,118</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">まとめ</h3>
        <div className="bg-gray-50 p-6 rounded-lg">
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>
                <strong>ハイブリッド評価:</strong> 成長率と絶対成長を組み合わせることで、
                規模の異なるチーム間でより公平な比較が可能
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>
                <strong>ログ変換:</strong> 大きな規模差を対数的に圧縮し、
                より比較しやすい数値に変換
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>
                <strong>利益率×規模:</strong> 効率性と規模のバランスを取り、
                両方のチームの特徴を適切に評価
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TeamComparison;