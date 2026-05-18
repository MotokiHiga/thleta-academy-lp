import { Award, Trophy, Star, GraduationCap } from 'lucide-react';
import coachImage from 'figma:asset/970f07eae7cf8b1a34f0f83d6ad5ee3d6533e276.png';

export function CoachProfile() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#009739] to-[#FEDD00] text-[#002776] rounded-full text-lg font-semibold mb-4">
              🇧🇷 ブラジルが生んだ「本物のサッカー」を、沖縄から日本へ
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              指導者プロフィール
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Coach Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FEDD00]">
                <img 
                  src={coachImage}
                  alt="Roberto Iwashita"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#009739] to-[#002776] text-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">17+</div>
                <div className="text-sm">年の指導経験</div>
              </div>
            </div>

            {/* Coach Info */}
            <div>
              <div className="mb-6">
                <h3 className="text-3xl font-bold mb-2">岩下ロベルト</h3>
                <p className="text-xl text-[#009739] font-semibold">Roberto Iwashita</p>
                <p className="text-lg text-gray-600 mt-1">Brazilian Soccer Club 創設者 / ヘッドコーチ</p>
              </div>

              <div className="bg-gradient-to-r from-[#009739]/10 to-[#002776]/10 p-6 rounded-xl mb-6 border-l-4 border-[#FEDD00]">
                <p className="text-lg font-semibold text-gray-800 italic">
                  「子どもたちを、本当に強い選手に育てたい」<br />
                  <span className="text-base font-normal">——そのひと言が、すべての出発点です。</span>
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <p className="text-gray-700 leading-relaxed">
                  ブラジル・サンパウロ出身のサッカー指導者。10代のころから<strong>ヴァスコ・ダ・ガマ（ブラジル）</strong>や<strong>FC東京の前身「東京ガスFC」</strong>でプレーした本格的なサッカーキャリアを持ち、引退後はその経験をまるごと"指導"へと注ぎ込んできました。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  2008年、沖縄に「<strong>Brazilian Soccer Club</strong>」を創設。以来17年以上にわたり、ブラジル式の育成メソッドを日本で実践し続けています。
                </p>
              </div>
            </div>
          </div>

          {/* Achievements Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">
              <span className="text-[#009739]">実績が証明する、</span>育成力
            </h3>
            <p className="text-center text-gray-700 mb-8">
              ロベルトコーチのもとで育った選手は<strong className="text-[#009739] text-xl">60名以上</strong>。<br />
              その多くが、より高いステージへと羽ばたいています。
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-[#009739]/5 to-transparent rounded-xl">
                <div className="w-10 h-10 bg-[#009739] rounded-full flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">🇯🇵 ビーチサッカー</h4>
                  <p className="text-xs text-gray-600">日本代表への選手輩出</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-[#002776]/5 to-transparent rounded-xl">
                <div className="w-10 h-10 bg-[#002776] rounded-full flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">🌏 海外プロクラブ</h4>
                  <p className="text-xs text-gray-600">海外プロクラブへの進出</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-[#FEDD00]/20 to-transparent rounded-xl">
                <div className="w-10 h-10 bg-[#FEDD00] rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-[#002776]" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">🎓 海外大学</h4>
                  <p className="text-xs text-gray-600">サッカー奨学金での進学</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-[#009739]/5 to-transparent rounded-xl">
                <div className="w-10 h-10 bg-gradient-to-r from-[#009739] to-[#002776] rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">⚽ 強豪チーム</h4>
                  <p className="text-xs text-gray-600">国内外アカデミーへ昇格</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-[#009739]/10 via-[#FEDD00]/10 to-[#002776]/10 rounded-xl text-center">
              <p className="text-gray-800 leading-relaxed italic">
                「<strong>勝つだけのサッカー</strong>」ではなく、<strong>選手の人生を豊かにするサッカー</strong>を教える<br />
                ——それがブラジリアンサッカークラブのスタイルです。
              </p>
            </div>
          </div>

          {/* Licenses Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">
              世界標準の<span className="text-[#009739]">指導ライセンス</span>
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-20 text-[#009739] font-bold text-center">2021年</div>
                <div className="flex-1">
                  <h4 className="font-semibold">CBF（ブラジルサッカー連盟）B級ライセンス</h4>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-20 text-[#009739] font-bold text-center">2020年</div>
                <div className="flex-1">
                  <h4 className="font-semibold">CBFアカデミーコース修了</h4>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-20 text-[#009739] font-bold text-center">2015年</div>
                <div className="flex-1">
                  <h4 className="font-semibold">FIFAビーチサッカー コーチングコース修了</h4>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-20 text-[#009739] font-bold text-center">2008年〜</div>
                <div className="flex-1">
                  <h4 className="font-semibold">サンパウロ州公認指導者（SITREFESP）</h4>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#FEDD00]/20 to-[#009739]/10 rounded-xl border-2 border-[#FEDD00]">
                <div className="w-20 text-[#002776] font-bold text-center">2026年</div>
                <div className="flex-1">
                  <h4 className="font-semibold">CBF A級ライセンス取得予定</h4>
                </div>
              </div>
            </div>

            <p className="text-center text-gray-600 mt-6">
              ブラジル本国の連盟ライセンスを持ち、<br />
              常に世界レベルの知識と技術をアップデートし続けています。
            </p>
          </div>

          {/* Philosophy */}
          <div className="bg-gradient-to-br from-[#009739] to-[#002776] text-white rounded-2xl shadow-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold mb-6 text-center text-[#FEDD00]">指導理念</h3>
            <div className="text-center mb-6">
              <p className="text-3xl font-bold mb-2">"Creating Players for Great Success"</p>
              <p className="text-xl">——偉大な成功を掴む選手を育てる。</p>
            </div>
            <p className="text-lg text-center mb-8">
              <strong>技術・戦術・メンタル・規律</strong>。<br />
              この4つを一体的に鍛える「ブラジル式メソッド」で、<br />
              子どもたちを自信を持って世界で戦える人間へと育てます。
            </p>

            {/* Coach Message */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="font-semibold mb-3 text-[#FEDD00]">ロベルトコーチからひと言</h4>
              <p className="leading-relaxed">
                「サッカーは、上手くなるだけのスポーツではありません。仲間を信頼すること、困難に立ち向かうこと、あきらめないこと——そういった力を、ピッチの上で本気になって学ぶ場所をつくりたいのです。ブラジルで私が学んだすべてを、ここ沖縄から、日本の子どもたちへ届けたいと思っています。」
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}