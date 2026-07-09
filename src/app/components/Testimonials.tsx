import { Quote, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import testimonialImage1 from 'figma:asset/5e941ad08cf31515838aff62f3bb65b701d9026b.png';
import testimonialImage2 from 'figma:asset/e4e545e7bde463761b2f3434c4474cef82477897.png';
import testimonialImage3 from 'figma:asset/cc4fc004d84cd9231ec61a43c206675f46dcd897.png';

interface StatText {
  number: string;
  label: string;
}

interface TestimonialText {
  age: string;
  text: string;
}

export function Testimonials() {
  const { t } = useTranslation();

  const testimonials = [
    {
      id: '1',
      name: 'M.H',
      image: testimonialImage2,
      rating: 5,
    },
    {
      id: '2',
      name: 'R.H',
      image: testimonialImage3,
      rating: 5,
    },
  ];

  const stats = [
    { key: 'graduates', color: 'from-[#009739] to-[#009739]/80' },
    { key: 'experience', color: 'from-[#002776] to-[#002776]/80' },
    { key: 'national', color: 'from-[#FEDD00] to-[#FEDD00]/80' },
    { key: 'satisfaction', color: 'from-[#009739] to-[#002776]' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('testimonials.sectionTitle')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('testimonials.sectionSubtitle')}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          {stats.map((stat) => {
            const statText = t(`testimonials.stats.${stat.key}`, { returnObjects: true }) as StatText;
            return (
              <div key={stat.key} className={`text-center bg-gradient-to-br ${stat.color} text-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform`}>
                <div className="text-4xl font-bold mb-2">{statText.number}</div>
                <div className="text-sm">{statText.label}</div>
              </div>
            );
          })}
        </div>

        {/* Success Stories */}
        <div className="max-w-5xl mx-auto mb-16 bg-gradient-to-r from-[#009739]/10 via-[#FEDD00]/10 to-[#002776]/10 rounded-2xl p-8 border-2 border-[#FEDD00]">
          <h3 className="text-2xl font-bold mb-6 text-center text-[#002776]">
            {t('testimonials.achievementsTitle')}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#009739] rounded-full flex items-center justify-center text-white font-bold">
                  🇯🇵
                </div>
                <h4 className="font-bold text-lg">{t('testimonials.achievements.beachSoccer.title')}</h4>
              </div>
              <p className="text-sm text-gray-600">{t('testimonials.achievements.beachSoccer.description')}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#002776] rounded-full flex items-center justify-center text-white font-bold">
                  🌏
                </div>
                <h4 className="font-bold text-lg">{t('testimonials.achievements.overseasClub.title')}</h4>
              </div>
              <p className="text-sm text-gray-600">{t('testimonials.achievements.overseasClub.description')}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-[#FEDD00] rounded-full flex items-center justify-center text-[#002776] font-bold">
                  🎓
                </div>
                <h4 className="font-bold text-lg">{t('testimonials.achievements.overseasUniversity.title')}</h4>
              </div>
              <p className="text-sm text-gray-600">{t('testimonials.achievements.overseasUniversity.description')}</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-[#009739] to-[#002776] rounded-full flex items-center justify-center text-white font-bold">
                  ⚽
                </div>
                <h4 className="font-bold text-lg">{t('testimonials.achievements.topTeam.title')}</h4>
              </div>
              <p className="text-sm text-gray-600">{t('testimonials.achievements.topTeam.description')}</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => {
            const testimonialText = t(`testimonials.items.${testimonial.id}`, { returnObjects: true }) as TestimonialText;
            return (
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
                    {testimonialText.text}
                  </p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonialText.age}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
