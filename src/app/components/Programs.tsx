import { GraduationCap, Target, Check } from 'lucide-react';
import { Button } from './ui/button';

export function Programs() {
  const programs = [
    {
      id: 'elementary',
      icon: GraduationCap,
      name: 'Elementary',
      subtitle: '小学生クラス',
      description: '技術の基礎をしっかり学び、試合で活きるプレーを身につけます。',
      age: '小学1年生〜6年生',
      frequency: '週1回（¥6,500 - ¥7,000）/ 週2回（¥9,000 - ¥10,000）',
      price: '¥6,500 - ¥10,000',
      features: [
        'ブラジル式基礎技術',
        '戦術理解とポジショニング',
        '試合形式のトレーニング',
        '定期的なスキルチェック'
      ],
      color: 'green',
      recommended: true
    },
    {
      id: 'middle-high',
      icon: Target,
      name: 'Middle / High',
      subtitle: '中学生・高校生クラス',
      description: 'より高いレベルを目指す選手のための実践的なトレーニングプログラム。',
      age: '中学生・高校生',
      frequency: '週1回（¥8,000 - ¥9,000）/ 週2回（¥10,000 - ¥12,000）',
      price: '¥8,000 - ¥12,000',
      features: [
        'プロレベルの技術指導',
        '戦術分析とゲーム理解',
        'フィジカル強化プログラム',
        '進路相談・サポート'
      ],
      color: 'yellow'
    }
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-[#002776]',
      border: 'border-[#002776]',
      text: 'text-[#002776]',
      hover: 'hover:bg-[#002776]/90',
      light: 'bg-[#002776]/10'
    },
    green: {
      bg: 'bg-[#009739]',
      border: 'border-[#009739]',
      text: 'text-[#009739]',
      hover: 'hover:bg-[#009739]/90',
      light: 'bg-[#009739]/10'
    },
    yellow: {
      bg: 'bg-[#FEDD00]',
      border: 'border-[#FEDD00]',
      text: 'text-[#002776]',
      hover: 'hover:bg-[#FEDD00]/90',
      light: 'bg-[#FEDD00]/20'
    }
  };

  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            プログラム紹介
          </h2>
          <p className="text-xl text-gray-600">
            年齢とレベルに合わせて選べるクラス
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {programs.map((program) => {
            const Icon = program.icon;
            const colors = colorClasses[program.color as keyof typeof colorClasses];
            
            return (
              <div 
                key={program.id}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden border-2 ${colors.border} transition-transform hover:scale-105`}
              >
                {program.recommended && (
                  <div className={`absolute top-4 right-4 ${colors.bg} text-white px-3 py-1 rounded-full text-sm font-semibold z-10`}>
                    人気No.1
                  </div>
                )}
                
                <div className={`${colors.bg} ${program.color === 'yellow' ? 'text-[#002776]' : 'text-white'} p-6`}>
                  <Icon className="w-12 h-12 mb-4" />
                  <h3 className="text-3xl font-bold mb-2">{program.name}</h3>
                  <p className="text-lg opacity-90">{program.subtitle}</p>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 mb-6 leading-relaxed min-h-[60px]">
                    {program.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-semibold text-gray-700">対象：</span>
                      <span className="text-gray-600">{program.age}</span>
                    </div>
                    <div className="flex items-start gap-2 text-sm">
                      <span className="font-semibold text-gray-700 flex-shrink-0">頻度：</span>
                      <span className="text-gray-600">{program.frequency}</span>
                    </div>
                    <div className={`text-2xl font-bold ${colors.text} mt-4`}>
                      {program.price}
                    </div>
                  </div>

                  <div className="border-t pt-6 mb-6">
                    <h4 className="font-semibold mb-3 text-gray-800">特徴</h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    className={`w-full ${colors.bg} ${colors.hover} ${program.color === 'yellow' ? 'text-[#002776]' : 'text-white'}`}
                    onClick={scrollToForm}
                  >
                    無料体験を申し込む
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Details */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-200">
          <h3 className="text-2xl font-bold mb-8 text-center">料金体系</h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Initial Fees */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#009739]">初期費用（Initial Fees）</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                  <span className="text-gray-700">入会金（Enrollment Fee）</span>
                  <span className="font-bold text-[#002776]">¥6,000</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                  <span className="text-gray-700">年会費（Annual Fee）</span>
                  <span className="font-bold text-[#002776]">¥5,500</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                  <span className="text-gray-700">保険（Insurance）</span>
                  <span className="font-bold text-[#002776]">¥1,500</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg border">
                  <span className="text-gray-700">ユニフォーム（Uniform Kit）</span>
                  <span className="font-bold text-[#002776]">¥8,000</span>
                </div>
              </div>
            </div>

            {/* Options & Discounts */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#009739]">オプション・割引</h4>
              <div className="space-y-3">
                <div className="p-4 bg-gradient-to-r from-[#FEDD00]/20 to-transparent rounded-lg border border-[#FEDD00]">
                  <h5 className="font-semibold text-[#002776] mb-2">🎉 兄弟割引</h5>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 2人目：<strong>10% OFF</strong></li>
                    <li>• 3人目：<strong>20% OFF</strong></li>
                  </ul>
                </div>
                <div className="p-4 bg-gradient-to-r from-[#009739]/10 to-transparent rounded-lg border border-[#009739]">
                  <h5 className="font-semibold text-[#002776] mb-2">✨ 無料体験</h5>
                  <p className="text-sm text-gray-700">初回体験レッスン<strong>無料</strong></p>
                </div>
                <div className="p-4 bg-gradient-to-r from-[#002776]/10 to-transparent rounded-lg border border-[#002776]">
                  <h5 className="font-semibold text-[#002776] mb-2">🔄 振替制度</h5>
                  <p className="text-sm text-gray-700">荒天・行事時の振替可能</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-6 border-t">
            <p className="text-sm text-gray-600">
              ※ 料金は税込表示です<br />
              ※ 詳しい料金プランについては、無料体験時にご説明いたします
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
