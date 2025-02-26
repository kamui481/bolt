import React from 'react';
import { FiUser, FiServer, FiLock, FiKey, FiShield, FiSearch } from 'react-icons/fi';

function SecureFlow() {
  const flowSteps = [
    {
      icon: <FiUser />,
      title: "1. ユーザーアクセス",
      description: "ユーザーがアプリケーションにアクセスし、機能を利用",
      detail: "アプリケーションは処理の中で機密情報（認証キーなど）が必要だと判断"
    },
    {
      icon: <FiServer />,
      title: "2. アプリケーションリクエスト",
      description: "アプリケーションがParameter Storeに機密情報を要求",
      detail: "「このキーをください」というリクエストを発行"
    },
    {
      icon: <FiShield />,
      title: "3. IAM権限確認",
      description: "アプリケーションのアクセス権限を確認",
      detail: "IAMポリシーに基づき、このアプリケーションが情報を見る権利があるか確認"
    },
    {
      icon: <FiKey />,
      title: "4. KMSによる復号化",
      description: "Parameter StoreがKMSキーを使用して情報を復号",
      detail: "暗号化された機密情報をKMSキーで安全に復号化"
    },
    {
      icon: <FiLock />,
      title: "5. 安全な情報提供",
      description: "復号化された情報をアプリケーションに提供",
      detail: "認可されたアプリケーションのみが機密情報を受け取り可能"
    },
    {
      icon: <FiSearch />,
      title: "6. 操作記録",
      description: "すべての操作をCloudTrailで記録",
      detail: "アクセスログを保存し、監査や不正アクセスの追跡に活用"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">機密情報の利用フロー</h2>
      
      <div className="space-y-6">
        {flowSteps.map((step, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-full text-blue-600">
              {step.icon}
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
              </div>
              <p className="text-gray-700 mt-1">{step.description}</p>
              <p className="text-gray-600 text-sm mt-1">{step.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-blue-50 p-4 rounded-lg">
        <h3 className="font-semibold text-blue-900 mb-2">メリット</h3>
        <ul className="space-y-2">
          <li className="text-blue-800 flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            機密情報のソースコード埋め込みや漏洩リスクを低減
          </li>
          <li className="text-blue-800 flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            アクセス履歴の完全な追跡が可能
          </li>
          <li className="text-blue-800 flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            暗号鍵を組織の要件に合わせて管理・制御
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SecureFlow;