import React from 'react';

function ProposalHeader() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        オンライン資格確認システム連携提案
      </h1>
      <div className="flex items-center space-x-4">
        <div className="bg-blue-100 px-4 py-2 rounded-full">
          <span className="text-blue-800 font-semibold">技術提案書</span>
        </div>
        <div className="text-gray-500">作成日: {new Date().toLocaleDateString('ja-JP')}</div>
      </div>
    </div>
  );
}

export default ProposalHeader;