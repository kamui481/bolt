import React from 'react';
import { FiLock, FiKey, FiDatabase, FiShield, FiSearch } from 'react-icons/fi';

function SecureManagement() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">機密情報の安全な管理</h2>

      {/* Overview Section */}
      <div className="mb-8">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-900 mb-3">概要</h3>
          <p className="text-blue-800">
            アプリケーションが必要とする機密情報（パスワード・秘密鍵など）を
            安全に保管・取得・監査するための統合システム
          </p>
        </div>
      </div>

      {/* Main Components */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center space-x-2 mb-3">
            <FiLock className="w-6 h-6 text-indigo-600" />
            <h4 className="font-semibold">保管</h4>
          </div>
          <p className="text-gray-700">Parameter Store（クラウド金庫）で機密情報を一元管理</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center space-x-2 mb-3">
            <FiKey className="w-6 h-6 text-indigo-600" />
            <h4 className="font-semibold">暗号化</h4>
          </div>
          <p className="text-gray-700">KMS（カスタマー管理鍵）による強力な暗号化保護</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center space-x-2 mb-3">
            <FiShield className="w-6 h-6 text-indigo-600" />
            <h4 className="font-semibold">アクセス制御</h4>
          </div>
          <p className="text-gray-700">IAM Roles & Policiesによる厳密な権限管理</p>
        </div>
      </div>

      {/* Process Flow */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">機密情報アクセスフロー</h3>
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <span className="font-bold">1</span>
              </div>
              <div>
                <h5 className="font-semibold">アプリケーションからのリクエスト</h5>
                <p className="text-gray-600">EC2などのアプリケーションが機密情報を要求</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <span className="font-bold">2</span>
              </div>
              <div>
                <h5 className="font-semibold">権限確認</h5>
                <p className="text-gray-600">IAMポリシーに基づきアクセス権を確認</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <span className="font-bold">3</span>
              </div>
              <div>
                <h5 className="font-semibold">復号化と提供</h5>
                <p className="text-gray-600">KMSで復号化し、認可されたアプリケーションに提供</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">主な使用例</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-3">
              <FiDatabase className="w-5 h-5 text-green-600" />
              <h4 className="font-semibold text-green-800">データベース接続</h4>
            </div>
            <p className="text-green-700">データベースへの接続に必要なパスワードの安全な取得</p>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-3">
              <FiKey className="w-5 h-5 text-purple-600" />
              <h4 className="font-semibold text-purple-800">API認証</h4>
            </div>
            <p className="text-purple-700">外部APIを呼び出すための認証キーの安全な管理</p>
          </div>
        </div>
      </div>

      {/* Audit Trail */}
      <div>
        <h3 className="text-xl font-semibold mb-4">監査とトレーサビリティ</h3>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <div className="flex items-center space-x-2 mb-3">
            <FiSearch className="w-6 h-6 text-yellow-600" />
            <h4 className="font-semibold text-yellow-800">CloudTrailによる完全な監査ログ</h4>
          </div>
          <ul className="list-disc list-inside space-y-2 text-yellow-700">
            <li>機密情報へのアクセス記録</li>
            <li>鍵の使用履歴</li>
            <li>不正アクセスの追跡</li>
            <li>操作ミスの特定</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SecureManagement;