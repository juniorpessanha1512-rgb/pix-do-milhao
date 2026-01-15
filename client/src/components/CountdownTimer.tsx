/**
 * CountdownTimer Component - Pix do Milhão Clone
 * Design: Yellow boxes with countdown numbers
 */

import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate?: Date;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  // Default to next 21:00 if no target date provided
  const getDefaultTarget = () => {
    const now = new Date();
    const target = new Date(now);
    target.setHours(21, 0, 0, 0);
    if (now >= target) {
      target.setDate(target.getDate() + 1);
    }
    return target;
  };

  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = targetDate || getDefaultTarget();

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ hours, minutes, seconds });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="flex flex-col items-center py-6">
      <p className="text-gray-700 font-semibold mb-3 text-lg">PRÓXIMO SORTEIO EM:</p>
      <div className="flex items-center gap-2">
        <div className="flex flex-col items-center">
          <div className="bg-[#FFD700] rounded-lg px-4 py-3 min-w-[70px] shadow-md">
            <span className="text-3xl md:text-4xl font-black text-gray-900 font-mono">
              {formatNumber(timeLeft.hours)}
            </span>
          </div>
          <span className="text-[#E31E24] font-bold text-xs mt-1 uppercase">Horas</span>
        </div>
        
        <span className="text-3xl font-black text-gray-400">:</span>
        
        <div className="flex flex-col items-center">
          <div className="bg-[#FFD700] rounded-lg px-4 py-3 min-w-[70px] shadow-md">
            <span className="text-3xl md:text-4xl font-black text-gray-900 font-mono">
              {formatNumber(timeLeft.minutes)}
            </span>
          </div>
          <span className="text-[#E31E24] font-bold text-xs mt-1 uppercase">Minutos</span>
        </div>
        
        <span className="text-3xl font-black text-gray-400">:</span>
        
        <div className="flex flex-col items-center">
          <div className="bg-[#FFD700] rounded-lg px-4 py-3 min-w-[70px] shadow-md animate-pulse-scale">
            <span className="text-3xl md:text-4xl font-black text-gray-900 font-mono">
              {formatNumber(timeLeft.seconds)}
            </span>
          </div>
          <span className="text-[#E31E24] font-bold text-xs mt-1 uppercase">Segundos</span>
        </div>
      </div>
      <p className="text-gray-500 text-sm mt-3">
        {new Date().toLocaleDateString("pt-BR")} às 21:00
      </p>
    </div>
  );
}
