import React from 'react';
import { FiLock, FiKey, FiShield, FiClipboard } from 'react-icons/fi';

function SimpleExplanation() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">機密情報管理の仕組み - 簡単な説明</h2>

      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold text-blue-900 mb-4">たとえるなら...</h3>
        <p className="text-blue-800 text-lg leading-relaxed">
          この仕組みは、「とても安全な金庫システム」のようなものです。
          大切な情報（パスワードやAPIキーなど）を、特別な金庫で保管し、
          必要な人だけが必要なときに取り出せるようにしています。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-center space-x-3 mb-4">
            <FiLock className="w-6 h-6 text-indigo-600" />
            <h4 className="text-lg font-semibold">金庫（Parameter Store）</h4>
          </div>
          <p className="text-gray-700 leading-relaxed">
            大切な情報を保管する特別な金庫です。
            この金庫の中身は暗号化されているので、
            鍵を持っていない人には中身が見えません。
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-center space-x-3 mb-4">
            <FiKey className="w-6 h-6 text-indigo-600" />
            <h4 className="text-lg font-semibold">鍵（KMS）</h4>
          </div>
          <p className="text-gray-700 leading-relaxed">
            金庫を開けるための特別な鍵です。
            この鍵は組織で管理され、
            勝手に複製することはできません。
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-center space-x-3 mb-4">
            <FiShield className="w-6 h-6 text-indigo-600" />
            <h4 className="text-lg font-semibold">入室許可証（IAM）</h4>
          </div>
          <p className="text-gray-700 leading-relaxed">
            誰が金庫室に入れるか、
            どの金庫を開けられるかを
            管理する許可証システムです。
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex items-center space-x-3 mb-4">
            <FiClipboard className="w-6 h-6 text-indigo-600" />
            <h4 className="text-lg font-semibold">記録簿（CloudTrail）</h4>
          </div>
          <p className="text-gray-700 leading-relaxed">
            誰がいつ金庫を開けたか、
            何を取り出したかを
            すべて記録する台帳です。
          </p>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-green-900 mb-4">この仕組みのメリット</h3>
        <ul className="space-y-3">
          <li className="flex items-start text-green-800">
            <span className="text-green-500 mr-2">•</span>
            大切な情報が外部に漏れる心配がありません
          </li>
          <li className="flex items-start text-green-800">
            <span className="text-green-500 mr-2">•</span>
            必要な人だけが必要な情報を取り出せます
          </li>
          <li className="flex items-start text-green-800">
            <span className="text-green-500 mr-2">•</span>
            誰が何を取り出したか、すべて記録が残ります
          </li>
          <li className="flex items-start text-green-800">
            <span className="text-green-500 mr-2">•</span>
            金庫の鍵は組織で厳重に管理できます
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SimpleExplanation;