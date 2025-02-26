import React from 'react';

function NetworkPurpose() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">1. 目的</h2>
      <div className="space-y-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">依頼の目的</h3>
          <ul className="list-disc list-inside space-y-2 text-blue-800">
            <li>OQL端末（セグメント100）から連携端末（セグメント200）にあるネットワークフォルダへのアクセスを実現</li>
            <li>セキュリティ確保のため、セグメント200からセグメント100への通信を遮断</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NetworkPurpose;