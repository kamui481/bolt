import React from 'react';

function Mission() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 relative overflow-hidden">
      <div className="relative z-10">
        <h2 className="text-2xl font-bold mb-4">01.私たちについて</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-3xl font-bold mb-2">MISSION</h3>
            <p className="text-xl">
              生成AI技術を活用し、<br />
              企業の業務効率化と<br />
              イノベーションを促進する。
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-2">VISION</h3>
            <p className="text-xl">
              AI技術の力で、<br />
              すべての企業に<br />
              革新をもたらす。
            </p>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/80 -z-10"></div>
      <img
        src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000"
        alt="City skyline"
        className="absolute inset-0 w-full h-full object-cover -z-20"
      />
    </div>
  );
}