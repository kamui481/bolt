import React from 'react';
import { FiUsers, FiServer, FiLock, FiKey, FiShield, FiSearch } from 'react-icons/fi';

function ComponentRoles() {
  const roles = [
    {
      icon: <FiUsers />,
      title: "ユーザー / サービス",
      description: "システムの利用者や外部連携サービス",
      details: [
        {
          subtitle: "利用者",
          points: [
            "システムの直接的な利用者（従業員など）",
            "外部から連携する他のサービス",
            "アプリケーションへのリクエスト発行者"
          ]
        },
        {
          subtitle: "主な要求",
          points: [
            "アプリケーションへのログイン",
            "データの登録・取得",
            "各種機能の利用"
          ]
        }
      ]
    },
    {
      icon: <FiServer />,
      title: "アプリケーション（EC2など）",
      description: "ユーザーリクエストを処理するサーバー",
      details: [
        {
          subtitle: "主な機能",
          points: [
            "Webサーバーとしての機能提供",
            "バッチ処理の実行",
            "ユーザーリクエストの処理"
          ]
        },
        {
          subtitle: "機密情報の必要性",
          points: [
            "外部API認証トークンの利用",
            "データベース接続パスワード",
            "セキュアな設定値の取得"
          ]
        }
      ]
    },
    {
      icon: <FiLock />,
      title: "Parameter Store",
      description: "機密情報の安全な保管庫",
      details: [
        {
          subtitle: "主要機能",
          points: [
            "パスワード・APIキーの安全な保管",
            "暗号化された状態での情報管理",
            "アクセス制御された情報提供"
          ]
        },
        {
          subtitle: "アクセス方法",
          points: [
            "APIを通じたパラメータ取得",
            "IAMによる権限確認",
            "KMSによる復号化"
          ]
        }
      ]
    },
    {
      icon: <FiKey />,
      title: "KMS: Customer Managed Key",
      description: "暗号化キーの管理システム",
      details: [
        {
          subtitle: "主な役割",
          points: [
            "Parameter Store内の情報の暗号化",
            "認可されたリクエストの復号化",
            "キーの安全な管理とローテーション"
          ]
        },
        {
          subtitle: "カスタマー管理の利点",
          points: [
            "組織独自のキー管理",
            "詳細な使用制御",
            "柔軟なアクセスポリシー設定"
          ]
        }
      ]
    },
    {
      icon: <FiShield />,
      title: "IAM Roles & Policies",
      description: "アクセス権限の管理システム",
      details: [
        {
          subtitle: "ロール（Roles）",
          points: [
            "アプリケーション/ユーザーの役割定義",
            "権限のグループ化",
            "アクセス範囲の制御"
          ]
        },
        {
          subtitle: "ポリシー（Policies）",
          points: [
            "具体的な許可/拒否ルール",
            "リソースごとのアクセス制御",
            "詳細な権限設定"
          ]
        }
      ]
    },
    {
      icon: <FiSearch />,
      title: "CloudTrail",
      description: "操作ログの記録システム",
      details: [
        {
          subtitle: "記録内容",
          points: [
            "Parameter Storeへのアクセス記録",
            "KMSキーの使用履歴",
            "IAM権限の変更履歴"
          ]
        },
        {
          subtitle: "活用方法",
          points: [
            "セキュリティ監査",
            "不正アクセスの検知",
            "操作ミスの追跡"
          ]
        }
      ]
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">コンポーネントの役割詳細</h2>
      
      <div className="space-y-8">
        {roles.map((role, index) => (
          <div key={index} className="border-l-4 border-blue-500 pl-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                {role.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{role.title}</h3>
                <p className="text-gray-600">{role.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {role.details.map((detail, detailIndex) => (
                <div key={detailIndex} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">{detail.subtitle}</h4>
                  <ul className="space-y-2">
                    {detail.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="text-gray-700 flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ComponentRoles;