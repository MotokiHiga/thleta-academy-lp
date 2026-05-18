import { Quote, Star } from 'lucide-react';
import testimonialImage1 from 'figma:asset/5e941ad08cf31515838aff62f3bb65b701d9026b.png';
import testimonialImage2 from 'figma:asset/e4e545e7bde463761b2f3434c4474cef82477897.png';
import testimonialImage3 from 'figma:asset/cc4fc004d84cd9231ec61a43c206675f46dcd897.png';

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'M.H',
      age: '小学6年生の保護者',
      image: testimonialImage2,
      text: '入会して1年、息子のプレーが見違えるように上達しました。ブラジル式の指導は楽しみながら技術が身につくので、毎週のレッスンを心待ちにしています。',
      rating: 5
    },
    {
      id: 2,
      name: 'R.H',
      age: '中学2年生の保護者',
      image: testimonialImage3,
      text: 'タイへの遠征などサッカーだけに留まらず、人として貴重な体験を得ています。将来は海外でプレーすることを夢見ています。ロベルトコーチの指導のおかげで、技術だけでなくメンタル面も成長しました。',
      rating: 5
    }
  ];

  const stats = [
    { number: '60+', label: '卒業生実績', color: 'from-[#009739] to-[#009739]/80' },
    { number: '17年', label: '指導実績', color: 'from-[#002776] to-[#002776]/80' },
    { number: '5名', label: '日本代表・プロ輩出', color: 'from-[#FEDD00] to-[#FEDD00]/80' },
    { number: '98%', label: '保護者満足度', color: 'from-[#009739] to-[#002776]' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            実績・卒業生の声
          </h2>
          <p className="text-xl text-gray-600">
            60名以上の子どもたちが成長し、世界へ羽ばたいています
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          {stats.map((stat, idx) => (
            <div key={idx} className={`text-center bg-gradient-to-br ${stat.color} text-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform`}>
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Success Stories */}
        <div className="max-w-5xl mx-auto mb-16 bg-gradient-to-r from-[#009739]/10 via-[#FEDD00]/10 to-[#002776]/10 rounded-2xl p-8 border-2 border-[#FEDD00]">
          <h3 className="text-2xl font-bold mb-6 text-center text-[#002776]">
            🏆 主な輩出実績
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#009739] rounded-full flex items-center justify-center text-white font-bold">
                  🇯🇵
                </div>
                <h4 className="font-bold text-lg">ビーチサッカー日本代表</h4>
              </div>
              <p className="text-sm text-gray-600">複数名の選手が日本代表として国際大会で活躍</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#002776] rounded-full flex items-center justify-center text-white font-bold">
                  🌏
                </div>
                <h4 className="font-bold text-lg">海外プロクラブへの進出</h4>
              </div>
              <p className="text-sm text-gray-600">ヨーロッパ・南米のプロクラブで活躍する選手を輩出</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#FEDD00] rounded-full flex items-center justify-center text-[#002776] font-bold">
                  🎓
                </div>
                <h4 className="font-bold text-lg">海外大学サッカー奨学金</h4>
              </div>
              <p className="text-sm text-gray-600">アメリカ・ヨーロッパの大学にサッカー奨学金で進学</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#009739] to-[#002776] rounded-full flex items-center justify-center text-white font-bold">
                  ⚽
                </div>
                <h4 className="font-bold text-lg">強豪アカデミー昇格</h4>
              </div>
              <p className="text-sm text-gray-600">国内外のハイレベルアカデミー・強豪チームへ</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-100 hover:border-[#FEDD00] transition-colors">
              <div className="aspect-video relative">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-[#009739] to-[#002776] text-white p-3 rounded-full">
                  <Quote className="w-6 h-6" />
                </div>
              </div>
              <div className="p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FEDD00] text-[#FEDD00]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.age}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}