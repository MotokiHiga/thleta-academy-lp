import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { toast } from 'sonner';
import { CheckCircle2 } from 'lucide-react';
import { withLineBreaks } from '../lib/withLineBreaks';

export function ApplicationForm() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    email: '',
    phone: '',
    program: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Form validation
    if (!formData.parentName || !formData.childName || !formData.email || !formData.phone || !formData.program) {
      toast.error(t('applicationForm.toast.required'));
      return;
    }

    try {
      const response = await fetch('/api/send-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);

        // Google Analytics 4 コンバージョンイベント送信
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'generate_lead', {
            event_category: 'engagement',
            event_label: formData.program,
          });
        }

        toast.success(t('applicationForm.toast.success'));

        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            parentName: '',
            childName: '',
            childAge: '',
            email: '',
            phone: '',
            program: '',
            message: ''
          });
          setSubmitted(false);
        }, 3000);
      } else {
        toast.error(t('applicationForm.toast.error'));
      }
    } catch (error) {
      toast.error(t('applicationForm.toast.error'));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="application-form" className="py-20 bg-gradient-to-br from-[#009739] via-[#009739] to-[#002776]">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10 text-white">
            <div className="inline-block mb-4">
              <span className="text-6xl">🇧🇷</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t('applicationForm.title')}
            </h2>
            <p className="text-xl opacity-90">
              {withLineBreaks(t('applicationForm.subtitle'), 'md:hidden')}
            </p>
            <div className="mt-6 inline-block bg-[#FEDD00] text-[#002776] px-6 py-2 rounded-full font-semibold">
              {t('applicationForm.freeTrialBadge')}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-20 h-20 text-[#009739] mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-2 text-[#002776]">{t('applicationForm.submittedTitle')}</h3>
                <p className="text-gray-600">
                  {t('applicationForm.submittedText')}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="parentName" className="text-base mb-2 block">
                      {t('applicationForm.labels.parentName')} <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="parentName"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      placeholder={t('applicationForm.placeholders.parentName')}
                      required
                      className="h-12 border-2 focus:border-[#009739]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="childName" className="text-base mb-2 block">
                      {t('applicationForm.labels.childName')} <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="childName"
                      name="childName"
                      value={formData.childName}
                      onChange={handleChange}
                      placeholder={t('applicationForm.placeholders.childName')}
                      required
                      className="h-12 border-2 focus:border-[#009739]"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="childAge" className="text-base mb-2 block">
                    {t('applicationForm.labels.childAge')}
                  </Label>
                  <Input
                    id="childAge"
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleChange}
                    placeholder={t('applicationForm.placeholders.childAge')}
                    className="h-12 border-2 focus:border-[#009739]"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="text-base mb-2 block">
                      {t('applicationForm.labels.email')} <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@email.com"
                      required
                      className="h-12 border-2 focus:border-[#009739]"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-base mb-2 block">
                      {t('applicationForm.labels.phone')} <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="090-1234-5678"
                      required
                      className="h-12 border-2 focus:border-[#009739]"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="program" className="text-base mb-2 block">
                    {t('applicationForm.labels.program')} <span className="text-red-500">*</span>
                  </Label>
                  <select
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    required
                    className="w-full h-12 px-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#009739] focus:border-[#009739]"
                  >
                    <option value="">{t('applicationForm.options.placeholder')}</option>
                    <option value="preschool">{t('applicationForm.options.preschool')}</option>
                    <option value="elementary">{t('applicationForm.options.elementary')}</option>
                    <option value="middle-high">{t('applicationForm.options.middleHigh')}</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-base mb-2 block">
                    {t('applicationForm.labels.message')}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('applicationForm.placeholders.message')}
                    rows={4}
                    className="resize-none border-2 focus:border-[#009739]"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#FEDD00] hover:bg-[#FEDD00]/90 text-[#002776] text-lg py-6 font-bold"
                >
                  {t('common.ctaFreeTrial')}
                </Button>

                <div className="bg-gradient-to-r from-[#009739]/10 to-[#002776]/10 rounded-xl p-6 border-l-4 border-[#FEDD00]">
                  <h4 className="font-semibold text-[#002776] mb-3">{t('applicationForm.feeInfoTitle')}</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• {t('applicationForm.fees.enrollment')}</li>
                    <li>• {t('applicationForm.fees.annual')}</li>
                    <li>• {t('applicationForm.fees.insurance')}</li>
                    <li>• {t('applicationForm.fees.uniform')}</li>
                    <li className="pt-2 font-semibold text-[#009739]">{t('applicationForm.fees.siblingDiscount')}</li>
                  </ul>
                </div>

                <p className="text-sm text-gray-500 text-center">
                  {withLineBreaks(t('applicationForm.footnote'))}
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
