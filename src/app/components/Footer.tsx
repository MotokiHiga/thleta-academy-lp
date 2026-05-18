import { Mail, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#002776] to-[#001a50] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🇧🇷</span>
              <div>
                <h3 className="text-2xl font-bold text-[#FEDD00]">
                  ATHLETA ACADEMY OKINAWA JAPAN
                </h3>
                <p className="text-sm text-gray-300">アスレタアカデミー沖縄</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              ブラジルが生んだ「本物のサッカー」を、沖縄から日本へ。<br />
              世界標準のブラジル式メソッドで、子どもたちの可能性を最大限に引き出します。
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/BrazilianSoccerClub/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FEDD00] hover:text-[#002776] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/brazilian.soccer.club.okinawa/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FEDD00] hover:text-[#002776] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg text-[#FEDD00]">クイックリンク</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-[#FEDD00] transition-colors">
                  スクールについて
                </a>
              </li>
              <li>
                <a href="#programs" className="text-gray-300 hover:text-[#FEDD00] transition-colors">
                  プログラム
                </a>
              </li>
              <li>
                <a href="#application-form" className="text-gray-300 hover:text-[#FEDD00] transition-colors">
                  無料体験申し込み
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FEDD00] transition-colors">
                  コーチ紹介
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#FEDD00] transition-colors">
                  アクセス
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-lg text-[#FEDD00]">お問い合わせ</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#FEDD00] flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@brazilian-soccer.jp</span>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-sm text-gray-300 mb-3">SNSでも情報発信中</p>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/BrazilianSoccerClub/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-[#1877F2] transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                  <span className="text-sm">Facebook</span>
                </a>
                <a
                  href="https://www.instagram.com/brazilian.soccer.club.okinawa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#E1306C] hover:to-[#F56040] transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="text-sm">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Banner */}
        <div className="bg-gradient-to-r from-[#009739]/20 via-[#FEDD00]/20 to-[#009739]/20 rounded-xl p-6 mb-8 border border-[#FEDD00]/30">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-[#FEDD00]">17年+</div>
              <div className="text-xs text-gray-300">指導実績</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#FEDD00]">60名+</div>
              <div className="text-xs text-gray-300">卒業生</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#FEDD00]">5名</div>
              <div className="text-xs text-gray-300">日本代表・プロ輩出</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#FEDD00]">98%</div>
              <div className="text-xs text-gray-300">保護者満足度</div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 ATHLETA ACADEMY OKINAWA JAPAN. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#FEDD00] transition-colors">
                プライバシーポリシー
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FEDD00] transition-colors">
                利用規約
              </a>
            </div>
          </div>
          <p className="text-center text-xs text-gray-500 mt-4">
            創設者：岩下ロベルト（Roberto Iwashita） | 沖縄県那覇市
          </p>
        </div>
      </div>
    </footer>
  );
}
