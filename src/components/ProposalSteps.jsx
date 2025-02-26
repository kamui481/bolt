import React from 'react';
import { FiWifi, FiServer, FiCheck } from 'react-icons/fi';

function ProposalSteps() {
  const steps = [
    {
      title: 'WiFi接続状態でのネットワークフォルダ作成',
      icon: <FiWifi className="w-6 h-6" />,
      content: [
        'PCをWiFiに接続し、IPアドレス（例：192.168.x.x）を確認',
        'ネットワークフォルダを作成し、認証設定を実施',
        '外部端末での接続テストと確認',
      ],
      status: '共有フォルダがWiFi上で正常に動作'
    },
    {
      title: 'WiFiを切断し、LAN接続に切り替え',
      icon: <FiServer className="w-6 h-6" />,
      content: [
        'PCのWiFi接続を切断',
        'オンライン資格確認端末のLAN環境に接続',
        'IPアドレスの維持確認（静的IP設定推奨）'
      ],
      status: 'LAN接続での継続的なアクセスを確保'
    },
    {
      title: '外部端末からのアクセス維持',
      icon: <FiCheck className="w-6 h-6" />,
      content: [
        'IPアドレスの継続性を確認',
        '外部端末からの接続テスト実施',
        'システム全体の動作確認'
      ],
      status: '安定した接続環境の確立'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">提案手順</h2>
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="border-l-4 border-blue-500 pl-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-100 p-2 rounded-full">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {index + 1}. {step.title}
              </h3>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              {step.content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <div className="bg-gray-50 p-3 rounded-md">
              <p className="text-sm font-medium text-gray-600">状態: {step.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProposalSteps;