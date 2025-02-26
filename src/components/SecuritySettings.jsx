import React from 'react';

function SecuritySettings() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">4. ファイアウォール設定依頼</h2>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-900 mb-4">許可設定</h3>
            <ul className="space-y-2 text-green-800">
              <li>プロトコル：TCP</li>
              <li>ポート：445（SMB）</li>
              <li>送信元：192.168.100.0/24</li>
              <li>宛先：192.168.200.0/24</li>
              <li>アクション：許可</li>
            </ul>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-semibold text-red-900 mb-4">遮断設定</h3>
            <ul className="space-y-2 text-red-800">
              <li>プロトコル：すべて</li>
              <li>送信元：192.168.200.0/24</li>
              <li>宛先：192.168.100.0/24</li>
              <li>アクション：拒否</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">設定例（iptables）</h3>
          <div className="bg-gray-800 text-white p-4 rounded font-mono space-y-2">
            <p># セグメント100 → 200を許可（ポート445のみ）</p>
            <p>iptables -A FORWARD -s 192.168.100.0/24 -d 192.168.200.0/24 -p tcp --dport 445 -j ACCEPT</p>
            <p>&nbsp;</p>
            <p># セグメント200 → 100を遮断</p>
            <p>iptables -A FORWARD -s 192.168.200.0/24 -d 192.168.100.0/24 -j DROP</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecuritySettings;