import React from 'react';

function ConfigurationRequest() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">3. ルーティング設定依頼</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-4">静的ルートの追加</h3>
          <div className="bg-gray-50 p-4 rounded-lg space-y-4">
            <div>
              <h4 className="font-semibold mb-2">ルートの内容</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>宛先ネットワーク：192.168.200.0/24（セグメント200）</li>
                <li>送信元ネットワーク：192.168.100.0/24（セグメント100）</li>
                <li>ゲートウェイ：192.168.100.1</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">設定例（Ciscoルーター）</h4>
              <div className="bg-gray-800 text-white p-4 rounded font-mono">
                ip route 192.168.200.0 255.255.255.0 192.168.100.1
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg">
          <h4 className="font-semibold text-yellow-900 mb-2">注意点</h4>
          <ul className="list-disc list-inside space-y-2 text-yellow-800">
            <li>逆方向通信（200 → 100）は設定しないでください</li>
            <li>Pingおよび SMB通信の検証ができる状態にしてください</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ConfigurationRequest;