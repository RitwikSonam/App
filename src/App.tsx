import React from 'react';
import { Bell, BellOff, RefreshCw, Quote } from 'lucide-react';
import { useCountdown } from './hooks/useCountdown';
import { useQuotes } from './hooks/useQuotes';
import { useNotification } from './hooks/useNotification';
import { ProgressSteps } from './components/ProgressSteps';
import { TimeCard } from './components/TimeCard';

export default function App() {
  const examDate = new Date('2025-05-04T00:00:00');
  const { days, hours, minutes, seconds } = useCountdown(examDate);
  const { quote, author, refreshQuote } = useQuotes();
  const { 
    isNotificationEnabled,
    toggleNotification,
    requestNotificationPermission 
  } = useNotification();

  const resetCountdown = () => {
    if (window.confirm('Are you sure you want to reset the countdown?')) {
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">NEET 2025 Countdown</h1>
          <p className="text-xl text-purple-200">Your journey to Neet AIIMS begins now</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <TimeCard label="Days" value={days} />
          <TimeCard label="Hours" value={hours} />
          <TimeCard label="Minutes" value={minutes} />
          <TimeCard label="Seconds" value={seconds} />
        </div>

        <div className="mb-12">
          <ProgressSteps />
        </div>

        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <Quote size={24} />
              Daily Motivation
            </h2>
            <button
              onClick={refreshQuote}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Refresh quote"
            >
              <RefreshCw size={20} />
            </button>
          </div>
          <blockquote className="text-lg mb-2">{quote}</blockquote>
          <cite className="text-purple-200">- {author}</cite>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={toggleNotification}
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
          >
            {isNotificationEnabled ? (
              <>
                <BellOff size={20} />
                Disable Notifications
              </>
            ) : (
              <>
                <Bell size={20} />
                Enable Notifications
              </>
            )}
          </button>

          <button
            onClick={resetCountdown}
            className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
          >
            <RefreshCw size={20} />
            Reset Countdown
          </button>
        </div>
      </div>
    </div>
  );
}