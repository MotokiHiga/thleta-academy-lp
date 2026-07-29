import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { SUMMER_CLINIC_FORM_URL } from "../lib/links";

export default function SummerCampPopup() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    // セッション中(タブを閉じるまで)は1回だけ表示
    if (!sessionStorage.getItem("summerCampSeen")) {
      const timer = setTimeout(() => setOpen(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const close = () => {
    sessionStorage.setItem("summerCampSeen", "1");
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={close}
    >
      <div
        className="relative max-w-md w-full rounded-2xl overflow-hidden shadow-2xl bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          className="absolute top-2 right-2 z-10 w-9 h-9 rounded-full bg-black/60 text-white text-xl leading-none"
          aria-label={t('summerClinic.closeAria')}
        >
          ×
        </button>
        <a
          href={SUMMER_CLINIC_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
        >
          <img
            src="/summer-camp.jpg"
            alt={t('summerClinic.popupImageAlt')}
            className="w-full h-auto"
          />
        </a>
        <div className="p-4">
          <a
            href={SUMMER_CLINIC_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="block w-full text-center rounded-full bg-[#FEDD00] text-[#002776] font-bold py-3 hover:bg-[#FEDD00]/90 transition-colors"
          >
            {t('summerClinic.applyButton')}
          </a>
          <p className="text-xs text-gray-500 text-center mt-2">
            {t('summerClinic.externalFormNote')}
          </p>
        </div>
      </div>
    </div>
  );
}
