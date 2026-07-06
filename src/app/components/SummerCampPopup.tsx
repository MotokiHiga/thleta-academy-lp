import { useState, useEffect } from "react";

export default function SummerCampPopup() {
  const [open, setOpen] = useState(false);

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
        className="relative max-w-md w-full rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          className="absolute top-2 right-2 z-10 w-9 h-9 rounded-full bg-black/60 text-white text-xl leading-none"
          aria-label="閉じる"
        >
          ×
        </button>
        <a href="#contact" onClick={close}>
          <img
            src="/summer-camp.jpg"
            alt="サマーキャンプ2026のお知らせ"
            className="w-full h-auto"
          />
        </a>
      </div>
    </div>
  );
}
