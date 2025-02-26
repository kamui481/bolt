import React from 'react';
import { FiShield, FiLink, FiTrendingUp } from 'react-icons/fi';

function Benefits() {
  const benefits = [
    {
      icon: <FiLink className="w-6 h-6" />,
      title: '継続的なアクセスの確保',
      description: 'WiFi接続時に設定した共有フォルダに、LAN接続後も外部端末がアクセス可能です。'
    },
    {
      icon: <FiTrendingUp className="w-6 h-6" />,
      title: 'システム間の連携強化',
      description: 'オンライン資格確認端末のLAN環境に接続することで、資格確認業務を効率化。'
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: 'セキュリティの確保',
      description: '共有フォルダへのアクセスはユーザー名とパスワードで制限されており、不正アクセスを防止します。'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">期待されるメリット</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="p-4 border rounded-lg">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-100 p-2 rounded-full">
                {benefit.icon}
              </div>
              <h3 className="font-semibold text-gray-800">{benefit.title}</h3>
            </div>
            <p className="text-gray-600 text-sm">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Benefits;