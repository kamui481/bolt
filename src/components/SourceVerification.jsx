import React from 'react';

function SourceVerification() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">送信元の確認手順</h2>
      
      <div className="space-y-8">
        {/* Step 1: Local Device IP Check */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            1. ローカルデバイス（PC）のIPアドレス確認
          </h3>
          <div className="bg-gray-50 p-4 rounded-lg space-y-4">
            <p className="text-gray-700">
              各デバイスのIPアドレスを確認して、送信元IPがどのデバイスから発生しているか特定します。
            </p>
            
            <div>
              <h4 className="font-semibold mb-2">Windows PCの場合：</h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>コマンドプロンプトを開く</li>
                <li>次のコマンドを実行：</li>
              </ol>
              <div className="bg-gray-800 text-white p-3 rounded-md my-2 font-mono">
                ipconfig
              </div>
              <p className="text-gray-600">
                出力結果から、「IPv4アドレス」を確認（例：192.168.100.10）
              </p>
            </div>
          </div>
        </div>

        {/* Step 2: Communication Log Check */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            2. 通信ログを利用した送信元の確認
          </h3>
          
          <div className="space-y-6">
            {/* Firewall Log Section */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-3">ファイアウォールログの確認</h4>
              <div className="space-y-3">
                <p className="text-blue-800">Windowsファイアウォールのログ有効化手順：</p>
                <ol className="list-decimal list-inside space-y-2 text-blue-800">
                  <li>「Windows Defender ファイアウォール」 > 「詳細設定」</li>
                  <li>「監視」 > 「ファイアウォールのログ」</li>
                  <li>ログファイル確認：C:\Windows\System32\LogFiles\Firewall\pfirewall.log</li>
                </ol>
              </div>
            </div>

            {/* Router Log Section */}
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-3">ルーターログの確認</h4>
              <ol className="list-decimal list-inside space-y-2 text-green-800">
                <li>ルーター管理画面にログイン</li>
                <li>「アクセスログ」や「通信ログ」を確認</li>
              </ol>
              <div className="mt-3 p-3 bg-white rounded-md">
                <p className="text-gray-700 font-mono">
                  例：<br />
                  送信元：192.168.100.10<br />
                  宛先：192.168.200.1<br />
                  ポート：445
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions After Verification */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            送信元確認後のアクション
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Routing Settings */}
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-900 mb-3">ルーティング設定</h4>
              <p className="text-yellow-800 mb-2">送信元IPアドレスをルートに追加：</p>
              <div className="bg-gray-800 text-white p-3 rounded-md font-mono text-sm">
                ip route add 192.168.200.0/24 via 192.168.100.1
              </div>
            </div>

            {/* Firewall Settings */}
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-900 mb-3">ファイアウォール設定</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-purple-800 mb-2">許可ルール：</p>
                  <div className="bg-gray-800 text-white p-2 rounded-md font-mono text-sm">
                    iptables -A FORWARD -s 192.168.100.10 -d 192.168.200.0/24 -p tcp --dport 445 -j ACCEPT
                  </div>
                </div>
                <div>
                  <p className="text-purple-800 mb-2">拒否ルール：</p>
                  <div className="bg-gray-800 text-white p-2 rounded-md font-mono text-sm">
                    iptables -A FORWARD -s 192.168.200.0/24 -d 192.168.100.10 -j DROP
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SourceVerification;