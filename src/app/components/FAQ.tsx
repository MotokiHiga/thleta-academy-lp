import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

export function FAQ() {
  const faqs = [
    {
      id: 'faq1',
      question: '初心者でも参加できますか？',
      answer: 'はい、もちろんです！Preschoolクラス、Elementaryクラスは初心者の方を対象としており、基礎から丁寧に指導します。サッカーが初めてのお子様でも安心してご参加いただけます。'
    },
    {
      id: 'faq2',
      question: '体験レッスンは無料ですか？',
      answer: '初回の体験レッスンは完全無料です。実際のレッスンに参加していただき、ブラジル式の指導方法や雰囲気をご確認いただけます。体験レッスンは随時受け付けておりますので、お気軽にお申し込みください。'
    },
    {
      id: 'faq3',
      question: 'ブラジル式メソッドとは何ですか？',
      answer: 'ブラジル式メソッドとは、技術・戦術・メンタル・規律の4つを一体的に鍛える指導法です。単なる技術習得だけでなく、サッカーを通じて人間として成長し、自信を持って世界で戦える選手を育てることを目的としています。'
    },
    {
      id: 'faq4',
      question: '兄弟割引はありますか？',
      answer: 'はい、兄弟割引制度がございます。2人目は10%割引、3人目は20%割引となります。ご家族で一緒にサッカーを楽しんでいただけるよう、お得な料金設定をご用意しています。'
    },
    {
      id: 'faq5',
      question: '雨天時のレッスンはどうなりますか？',
      answer: '荒天時は安全を最優先し、レッスンを中止する場合がございます。その場合は振替制度がございますので、別の日程でレッスンを受講いただけます。振替可能日については、事前にご案内いたします。'
    },
    {
      id: 'faq6',
      question: '入会時に必要なものは何ですか？',
      answer: '運動できる服装、サッカーシューズ（スパイクまたはトレーニングシューズ）、飲み物、タオルをご用意ください。ユニフォームキット（¥8,000）は入会時にご購入いただきます。サッカーボールはスクールで貸し出しも可能です。'
    },
    {
      id: 'faq7',
      question: '月の途中からでも入会できますか？',
      answer: 'はい、いつでもご入会いただけます。月の途中からの入会の場合は、料金を日割り計算させていただきますので、ご安心ください。'
    },
    {
      id: 'faq8',
      question: '進路相談やサポートはありますか？',
      answer: 'はい、特にMiddle/Highクラスでは、進路相談やサポートを行っています。海外プロクラブ、海外大学サッカー奨学金、国内強豪チームへの進路など、それぞれの目標に合わせたアドバイスを提供しています。'
    },
    {
      id: 'faq9',
      question: '保護者の見学は可能ですか？',
      answer: 'はい、保護者の方の見学は大歓迎です。お子様の成長を間近でご覧いただけます。また、定期的に保護者面談も実施しており、お子様の成長や課題について共有させていただいています。'
    },
    {
      id: 'faq10',
      question: 'どのような実績がありますか？',
      answer: '17年以上の指導実績があり、60名以上の卒業生を輩出しています。その中には、ビーチサッカー日本代表、海外プロクラブ所属選手、海外大学サッカー奨学金での進学者など、多くの選手が高いレベルで活躍しています。'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              よくある質問
            </h2>
            <p className="text-xl text-gray-600">
              お客様からよくいただくご質問にお答えします
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="bg-gradient-to-r from-gray-50 to-white rounded-lg px-6 border border-gray-200 hover:border-[#FEDD00] transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-lg pr-4 text-[#002776]">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
