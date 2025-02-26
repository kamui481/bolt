import React from 'react';

function Purpose() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">目的</h2>
      <div className="prose max-w-none">
        <p className="text-gray-700 leading-relaxed">
          外部端末（iPadなど）から、オンライン資格確認端末と連携したPCが提供する共有フォルダに
          安全かつ継続的にアクセスできる環境を構築します。本提案では、WiFi接続を用いて共有フォルダを
          作成し、その後オンライン資格確認端末のLAN接続に切り替えることで、共有フォルダへのアクセスを
          維持する方法について説明します。
        </p>
      </div>
    </div>
  );
}

export default Purpose;