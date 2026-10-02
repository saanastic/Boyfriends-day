import React, { useState, useEffect } from "react";

// Vintage typewriter font import
const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Special+Elite&family=Monsieur+La+Doulaise&family=Courier+Prime:ital,wght@0,400;0,700;1,400&display=swap');
`;

const SCENES = [
  {
    id: 1,
    lines: [
      "Hey, Giraffe.",
      "You actually made it to the end.",
      "I hope you realise how much nonsense you just survived."
    ],
    baseSpeed: 70
  },
  {
    id: 2,
    lines: [
      "I'm still going to yap about Harry Potter while you live in your Stranger Things universe."
    ],
    baseSpeed: 75
  },
  {
    id: 3,
    lines: [
      "Bas ek vaat yaad rakhje…",
      "game te thay, game etli fights thay,",
      "pan mane aapdu OS hamesha joiye chhe.",
      "Forever. ♡",
      "LOVE YOU PEACOCK!!!",
    ],
    baseSpeed: 110 // Extra deliberate and emotional
  },
  {
    id: 4,
    lines: [
      '"ALWAYS" yours,',
      "Dobi. ♡"
    ],
    baseSpeed: 120 // Cinematic finale pace
  }
];

export default function SweetEnding({ onReplay }) {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [completedLines, setCompletedLines] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isSceneComplete, setIsSceneComplete] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [showDate, setShowDate] = useState(false);

  const scene = SCENES[currentSceneIndex];

  // Typewriter effect with dynamic random pauses
  useEffect(() => {
    let charIndex = 0;
    const targetLine = scene.lines[currentLineIndex];
    setIsTyping(true);
    setDisplayedText("");

    let timeoutId;

    const typeNextChar = () => {
      if (charIndex <= targetLine.length) {
        setDisplayedText(targetLine.slice(0, charIndex));
        
        const currentChar = targetLine[charIndex - 1];
        
        // Base delay for keypress
        let delay = scene.baseSpeed + Math.random() * 60;

        // Introduce deliberate random pauses on punctuation or occasionally mid-sentence
        if (currentChar === "," || currentChar === "…") {
          delay += 400 + Math.random() * 300; // Pause at punctuation
        } else if (currentChar === ".") {
          delay += 500 + Math.random() * 400; // Longer pause at periods
        } else if (Math.random() < 0.08) {
          delay += 250 + Math.random() * 350; // Random natural thinking hesitation
        }

        charIndex++;
        timeoutId = setTimeout(typeNextChar, delay);
      } else {
        setIsTyping(false);

        // Check if scene has remaining lines
        if (currentLineIndex < scene.lines.length - 1) {
          setTimeout(() => {
            setCompletedLines((prev) => [...prev, targetLine]);
            setCurrentLineIndex((prev) => prev + 1);
          }, 500);
        } else {
          setIsSceneComplete(true);
          if (scene.id === 4) {
            setTimeout(() => {
              setShowDate(true);
            }, 2200);
          }
        }
      }
    };

    typeNextChar();

    return () => clearTimeout(timeoutId);
  }, [currentSceneIndex, currentLineIndex]);

  // Instant skip for user click during active typing
  const handleSkipTyping = () => {
    if (!isTyping) return;
    const currentLine = scene.lines[currentLineIndex];
    setDisplayedText(currentLine);
    setIsTyping(false);

    if (currentLineIndex < scene.lines.length - 1) {
      setCompletedLines((prev) => [...prev, currentLine]);
      setCurrentLineIndex((prev) => prev + 1);
    } else {
      setIsSceneComplete(true);
      if (scene.id === 4) {
        setTimeout(() => {
          setShowDate(true);
        }, 2000);
      }
    }
  };

  const handleNextScene = () => {
    if (currentSceneIndex >= SCENES.length - 1) return;

    setIsFading(true);
    setTimeout(() => {
      setCompletedLines([]);
      setCurrentLineIndex(0);
      setDisplayedText("");
      setIsSceneComplete(false);
      setCurrentSceneIndex((prev) => prev + 1);
      setIsFading(false);
    }, 600);
  };

  return (
    <main
      onClick={isTyping ? handleSkipTyping : undefined}
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#f1e3ca] px-6 text-center text-[#432b20] select-none"
      style={{ fontFamily: '"Special Elite", "Courier Prime", monospace' }}
    >
      <style>{fontStyles}</style>

      {/* Subtle Vintage Paper Grid Texture */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(123, 30, 30, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(123, 30, 30, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px"
        }}
      />

      {/* Main Content Area */}
      <div
        className={`relative z-10 mx-auto flex max-w-2xl flex-col items-center justify-center transition-all duration-700 ease-in-out ${
          isFading ? "scale-95 opacity-0 blur-sm" : "scale-100 opacity-100 blur-none"
        }`}
      >
        {/* SCENE 1 */}
        {scene.id === 1 && (
          <div className="flex flex-col gap-4 py-6 text-xl md:text-2xl font-normal tracking-wider text-[#432b20]/90">
            {completedLines.map((line, idx) => (
              <p key={idx} className={idx === 0 ? "text-2xl md:text-3xl font-bold text-[#7b1e1e]" : ""}>
                {line}
              </p>
            ))}
            {isTyping && (
              <p className={currentLineIndex === 0 ? "text-2xl md:text-3xl font-bold text-[#7b1e1e]" : ""}>
                {displayedText}
                <span className="ml-1 inline-block animate-pulse font-bold text-[#7b1e1e]">█</span>
              </p>
            )}
          </div>
        )}

        {/* SCENE 2 */}
        {scene.id === 2 && (
          <div className="py-8 text-xl md:text-2xl font-normal leading-relaxed text-[#432b20] tracking-wide">
            <p>
              {isTyping ? displayedText : completedLines[0] || displayedText}
              {isTyping && <span className="ml-1 inline-block animate-pulse font-bold text-[#7b1e1e]">█</span>}
            </p>
          </div>
        )}

        {/* SCENE 3 */}
        {scene.id === 3 && (
          <div className="flex flex-col gap-5 py-6 text-xl md:text-2xl font-normal leading-relaxed text-[#432b20] tracking-wider">
            {completedLines.map((line, idx) => (
              <p
                key={idx}
                className={
                  idx === 0
                    ? "italic text-lg md:text-xl text-[#7b1e1e]/80"
                    : idx === 3
                    ? "mt-2 font-bold text-2xl md:text-3xl text-[#7b1e1e]"
                    : ""
                }
              >
                {line}
              </p>
            ))}
            {isTyping && (
              <p
                className={
                  currentLineIndex === 0
                    ? "italic text-lg md:text-xl text-[#7b1e1e]/80"
                    : currentLineIndex === 3
                    ? "mt-2 font-bold text-2xl md:text-3xl text-[#7b1e1e]"
                    : ""
                }
              >
                {displayedText}
                <span className="ml-1 inline-block animate-pulse font-bold text-[#7b1e1e]">█</span>
              </p>
            )}
          </div>
        )}

        {/* SCENE 4 */}
        {scene.id === 4 && (
          <div className="flex flex-col items-center justify-center gap-3 py-6">
            {(completedLines.length > 0 || currentLineIndex === 0) && (
              <p className="text-3xl md:text-5xl text-[#7b1e1e] tracking-widest uppercase">
                {currentLineIndex === 0 ? (
                  <>
                    {displayedText}
                    {isTyping && <span className="ml-1 inline-block animate-pulse font-bold text-[#7b1e1e]">█</span>}
                  </>
                ) : (
                  <>
                    <span className="font-bold underline decoration-[#7b1e1e]/40 underline-offset-8">
                      "ALWAYS"
                    </span>{" "}
                    yours,
                  </>
                )}
              </p>
            )}

            {(completedLines.length > 1 || currentLineIndex === 1) && (
              <p
                className="mt-4 text-5xl md:text-7xl text-[#7b1e1e]"
                style={{ fontFamily: '"Monsieur La Doulaise", cursive' }}
              >
                {currentLineIndex === 1 ? displayedText : completedLines[1]}
                {isTyping && <span className="ml-1 inline-block animate-pulse text-[#7b1e1e]">|</span>}
              </p>
            )}

            {/* Date stamp reference */}
            <div
              className={`mt-12 transition-all duration-1000 ease-out flex flex-col items-center gap-3 ${
                showDate ? "opacity-90 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <p className="text-xs md:text-sm font-mono tracking-[0.3em] uppercase text-[#7b1e1e]/70">
                21.04.2026 → ∞
              </p>

              {onReplay && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onReplay();
                  }}
                  className="mt-4 text-xs tracking-widest text-[#432b20]/50 hover:text-[#7b1e1e] underline transition-colors"
                >
                  [ REPLAY EXPERIENCE ]
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Navigation Button */}
      {isSceneComplete && scene.id < 4 && (
        <div className="absolute bottom-12 z-20">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNextScene();
            }}
            className="group flex items-center gap-2 border border-[#7b1e1e]/40 bg-[#f1e3ca] px-6 py-2.5 text-xs md:text-sm font-bold tracking-widest text-[#7b1e1e] shadow-sm transition-all hover:bg-[#7b1e1e] hover:text-[#f1e3ca]"
          >
            CLICK TO CONTINUE
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>
      )}
    </main>
  );
}