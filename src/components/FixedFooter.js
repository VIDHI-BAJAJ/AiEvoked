import { useState, useEffect } from 'react';
import { Clock, Zap, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const FixedFooter = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isVisible) return;

    const calculateTimeLeft = () => {
      // Get current time in Eastern Time (or any US timezone)
      const nowInET = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' });
      const now = new Date(nowInET);

      // Set midnight in Eastern Time
      const midnightET = new Date(now);
      midnightET.setHours(24, 0, 0, 0); // next midnight ET

      const difference = midnightET.getTime() - now.getTime();

      if (difference <= 0) {
        // If already past midnight, set to 0
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ hours, minutes, seconds });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [isVisible]);

  const formatTime = (num) => String(num).padStart(2, '0');

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-[#1a0b2e] via-[#2d1b4e] to-[#1a0b2e] border-t-2 border-[#7E22CE] shadow-[0_-4px_20px_rgba(126,34,206,0.3)]">
      <div className="container mx-auto px-4 py-3 sm:py-4 relative">
        {/* Close button - only visible on mobile */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 sm:hidden text-gray-300 hover:text-white transition-colors"
          aria-label="Close offer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          {/* Left - Message */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden sm:flex items-center justify-center w-10 h-10 bg-[#7E22CE]/20 rounded-full animate-pulse">
              <Zap className="w-5 h-5 text-[#7E22CE]" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-white font-bold text-sm sm:text-base">
                Book Your Free 14-Day Pilot Now!
              </h3>
              {/* <p className="text-gray-300 text-xs sm:text-sm">
                🔥 Limited time discount - Offer expires at midnight ET
              </p> */}
            </div>
          </div>

          {/* Center - Timer */}
          <div className="flex items-center gap-2 sm:gap-3 bg-black/40 px-4 py-2 rounded-lg border border-[#7E22CE]/50">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#7E22CE] animate-pulse" />
            <div className="flex items-center gap-1">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-[#7E22CE] tabular-nums">
                  {formatTime(timeLeft.hours)}
                </div>
                <div className="text-[10px] text-gray-400 uppercase">Hours</div>
              </div>
              <span className="text-[#7E22CE] font-bold text-xl sm:text-2xl mx-1">:</span>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-[#7E22CE] tabular-nums">
                  {formatTime(timeLeft.minutes)}
                </div>
                <div className="text-[10px] text-gray-400 uppercase">Mins</div>
              </div>
              <span className="text-[#7E22CE] font-bold text-xl sm:text-2xl mx-1">:</span>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-[#7E22CE] tabular-nums">
                  {formatTime(timeLeft.seconds)}
                </div>
                <div className="text-[10px] text-gray-400 uppercase">Secs</div>
              </div>
            </div>
          </div>

          {/* Right - CTA Button */}
          <Link
            to="/contact"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-medium transition-colors inline-block text-center whitespace-nowrap"
          >
            Book a 15-min pilot
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FixedFooter;