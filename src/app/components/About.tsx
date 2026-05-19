import { Target, TrendingUp, Users, Heart } from 'lucide-react';

export function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Problem Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              このような<span className="text-[#009739]">お悩み</span>はありませんか？
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className="p-6 bg-gray-50 rounded-xl border-l-4 border-[#009739]">
                <div className="text-4xl mb-4">😟</div>
                <p className="text-lg">もっと上手くなりたいけど、どう練習していいかわからない</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl border-l-4 border-[#FEDD00]">
                <div className="text-4xl mb-4">😔</div>
                <p className="text-lg">チームでレギュラーに選ばれない</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl border-l-4 border-[#002776]">
                <div className="text-4xl mb-4">😰</div>
                <p className="text-lg">基礎技術をしっかり学びたい</p>
              </div>
            </div>
          </div>

          {/* Solution Section */}
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-[#009739] to-[#002776] text-white rounded-full text-lg font-semibold mb-6">
              アスレタアカデミーなら解決できます！
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
              世界標準のブラジル式メソッドで、<br />
              技術・戦術・メンタル・規律を一体的に鍛えます。
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#009739]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-[#009739]" />
              </div>
              <h3 className="font-bold text-lg mb-2">個別指導</h3>
              <p className="text-gray-600">一人ひとりに合わせた丁寧な指導</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FEDD00]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-[#002776]" />
              </div>
              <h3 className="font-bold text-lg mb-2">確実な成長</h3>
              <p className="text-gray-600">ブラジル式メソッドによる着実な上達</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#002776]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#002776]" />
              </div>
              <h3 className="font-bold text-lg mb-2">プロの指導</h3>
              <p className="text-gray-600">元プロ選手による本格指導</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#009739]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-[#009739]" />
              </div>
              <h3 className="font-bold text-lg mb-2">楽しく学ぶ</h3>
              <p className="text-gray-600">サッカーを愛する心を育てる</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
