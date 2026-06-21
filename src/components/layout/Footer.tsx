import { TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="glass rounded-none border-none border-t border-white/10 mt-auto bg-black bg-opacity-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          <div className="flex flex-col space-y-4 items-center pl-4 md:items-start text-center md:text-left">
            <Link to="/" className="flex items-center space-x-2 shrink-0 justify-center md:justify-start">
              <div className="w-10 h-10 bg-gradient-to-tr from-[#FFD700] to-[#00BFFF] rounded-lg flex items-center justify-center font-bold text-black">QT</div>
              <span className="font-display font-black text-2xl tracking-tighter uppercase text-white">Quake<span className="accent-blue">Trade</span></span>
            </Link>
            <p className="text-sm text-gray-400 max-w-sm">
              Master the Markets with Precision. High-quality Quotex trading signals, expert market analysis, and a professional trading community.
            </p>
          </div>

          <div className="flex flex-col space-y-6 items-center md:items-end w-full">
            <h4 className="font-display font-semibold text-lg text-white">Community</h4>
            <div className="flex space-x-6">
              <a
                href="https://t.me/Tradeqauke/4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-blue transition-colors flex items-center space-x-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.686c.223-.195-.054-.285-.346-.09l-6.4 4.024-2.76-.86c-.6-.185-.61-.6.125-.89l10.736-4.138c.498-.18.94.116.78.895z" />
                </svg>
                <span className="font-medium">Telegram</span>
              </a>
              <a
                href="https://www.instagram.com/tradequake4k?igsh=MTZjZ285aXp5cnd0Ng%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors flex items-center space-x-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="bg-brand-blue/5 border border-brand-blue/20 rounded-lg p-6 mb-8">
            <p className="text-xs text-brand-blue/70 leading-relaxed text-justify">
              <strong className="text-brand-blue">DISCLAIMER:</strong> Trading involves substantial risk and may not be suitable for all traders. Past performance does not guarantee future results. Quake Trade provides educational content and market insights only and does not guarantee profits.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} Quake Trade. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
