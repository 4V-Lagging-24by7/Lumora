import React, { useState } from 'react';
import { ChevronDown, Loader2, Sparkles } from 'lucide-react';

export default function App() {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [review, setReview] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const languages = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'python', label: 'Python' },
    { value: 'cpp', label: 'C++' },
    { value: 'java', label: 'Java' },
    { value: 'typescript', label: 'TypeScript' }
  ];

  const handleSubmit = async () => {
    if (!code.trim()) {
      setError('Please enter some code to review');
      return;
    }

    setIsLoading(true);
    setError('');
    setReview('');

    try {
      const response = await fetch('http://localhost:3000/api/ai/review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code, language })
      });

      if (!response.ok) {
        throw new Error('Backend error');
      }

      const data = await response.json();
      setReview(data.review || data);
    } catch (err) {
      setError('Failed to analyze code. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen w-full bg-black text-white flex flex-col overflow-hidden font-mono">
      {/* Header */}
      <header className="bg-zinc-950 border-b border-zinc-800 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 relative">
          <Sparkles className="w-6 h-6 text-pink-500 z-10" />

          {/* Moving glow */}
          <div className="absolute -inset-6 blur-2xl opacity-60 animate-glowMove bg-gradient-to-r from-pink-500 via-fuchsia-500 to-pink-500"></div>

          <h1 className="relative text-2xl font-bold tracking-tight text-pink-500 drop-shadow-[0_0_18px_#ec4899]">
            LUMORA
          </h1>
        </div>

        <div className="text-xs text-zinc-500 tracking-wider">
          Built by CHARVI SINGH
        </div>
      </header>

      {/* Main */}
      <div className="flex flex-1 h-full overflow-hidden">
        {/* Left */}
        <div className="w-1/2 h-full bg-zinc-950 border-r border-zinc-800 flex flex-col">
          <div className="p-4 border-b border-zinc-800">
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-48 bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 flex justify-between items-center"
              >
                <span className="text-sm text-zinc-300">
                  {languages.find(l => l.value === language)?.label}
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full mt-2 w-48 bg-zinc-900 border border-zinc-700 rounded-lg z-10">
                  {languages.map(lang => (
                    <button
                      key={lang.value}
                      onClick={() => {
                        setLanguage(lang.value);
                        setIsDropdownOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        language === lang.value
                          ? 'bg-pink-500 text-white'
                          : 'hover:bg-zinc-800 text-zinc-300'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex-1 p-6 overflow-auto">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="// Paste your code here..."
              className="w-full h-full bg-transparent text-xs resize-none outline-none placeholder-zinc-600"
              spellCheck={false}
            />
          </div>
        </div>

        {/* Right */}
        <div className="w-1/2 h-full bg-zinc-900 flex flex-col overflow-hidden">
          <div className="p-4 border-b border-zinc-800 text-zinc-400 uppercase text-sm">
            AI Code Review
          </div>

          <div className="flex-1 p-6 overflow-auto">
            {!review && !isLoading && !error && (
              <div className="h-full flex items-center justify-center text-zinc-600">
                Awaiting code submission...
              </div>
            )}

            {isLoading && (
              <div className="flex items-center gap-2 text-pink-500">
                <Loader2 className="animate-spin" />
                Analyzing your code...
              </div>
            )}

            {error && (
              <div className="bg-red-950 border border-red-800 p-4 text-red-200 text-sm">
                {error}
              </div>
            )}

            {review && (
              <pre className="text-xs text-pink-400 whitespace-pre-wrap animate-fadeIn">
                {review}
              </pre>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-zinc-950 border-t border-zinc-800 py-6 flex justify-center">
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="px-12 py-4 bg-pink-500 rounded-full font-semibold
                     shadow-[0_0_25px_#ec4899]
                     hover:shadow-[0_0_40px_#ec4899]
                     transition-all duration-300"
        >
          {isLoading ? 'Analyzing...' : 'Submit for Review'}
        </button>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }

        @keyframes glowMove {
          0% { transform: translateX(-40%); }
          50% { transform: translateX(40%); }
          100% { transform: translateX(-40%); }
        }
        .animate-glowMove {
          animation: glowMove 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
