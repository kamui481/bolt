import React from 'react';

function ValidationSteps() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">5. 動作確認項目</h2>
      
      <div className="space-y-6">
        <div className="space-y-4">
          {[
            {
              title: 'ルートの有効性確認',
              command: 'ping 192.168.200.1',
              description: 'セグメント100の端末からセグメント200の端末へのPing疎通を確認'
            },
            {
              title: 'ネットワークフォルダのアクセス確認',
              command: '\\\\192.168.200.1\\SharedFolder',
              description: 'セグメント100の端末からネットワークフォルダへのアクセスを確認'
            },
            {
              title: 'セグメント200→100の通信遮断確認',
              command: 'ping 192.168.100.10',
              description: 'セグメント200の端末からセグメント100へのPingが失敗することを確認'
            }
          ].map((item, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <div className="bg-gray-800 text-white p-2 rounded font-mono mb-2">
                {item.command}
              </div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-4">セキュリティ監視設定</h3>
          <ul className="list-disc list-inside space-y-2 text-blue-800">
            <li>セグメント間通信のログを記録</li>
            <li>SMB通信（ポート445）の制限を定期確認</li>
            <li>不正アクセス試行の監視とアラート設定</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ValidationSteps;