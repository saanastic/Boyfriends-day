import React, { useEffect, useState, useRef } from "react";

// Fallback component if LetterEnding isn't available
const DefaultLetterEnding = ({ onContinue }) => (
  <div className="mt-8 flex flex-col items-center gap-4 text-center">
    <div className="text-2xl text-[#641f25] font-serif animate-bounce">
      Forever & Always ♡
    </div>
    {onContinue && (
      <button
        onClick={onContinue}
        className="rounded-full bg-[#641f25] px-6 py-2.5 text-lg text-white shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer"
      >
        Continue →
      </button>
    )}
  </div>
);

function Letter({ onContinue, LetterEndingComponent }) {
  const LetterEnding = LetterEndingComponent || DefaultLetterEnding;

  const letterText = `Congratulations. You have officially unlocked a handwritten-ish internet letter from you know who.(keep scrolling, I promise it won't be too long)
So… I was thinking about OS.
Which is honestly dangerous because once I start thinking about us, I remember everything — the cute things, the stupid things, the fights, the laughs, the random conversations, and all the moments where I look at you and think, yeah… this idiot is mine.
Two people who started off as just friends, with one Potterhead and one Stranger Things enthusiast, somehow ending up here, together since 21st April 2026.
Look at us now. Somewhere between all the yapping sessions, random conversations, Maggie dates, dahi bara dates, weird dates, not-so-weird dates, fights over approximately EVERYTHING, and your legendary life updates that are somehow always crazyyyyy, you became my favourite person to do absolutely nothing and everything with.
I love your eyes — like, genuinely, what are those things doing? Illegal levels of pretty.
And then there are your lips, your teeth, your face, your waist that I apparently have a personal appreciation for, and basically… yeah, technically I love the entire Girrafee package.
I love calling you Om Pari, even though I am fully aware that you are technically a strong gay Girrafee and not a fairy princess, but let me have this.
I love our US yapping sessions where one conversation somehow becomes seventeen different conversations and neither of us knows how we got there.
I love the way you care for me even when you're angry, the way you teach me something ten times when my brain has decided to leave the building, and the way you somehow turn into my personal life-lesson teacher without even trying.
You are genuinely the GOAT, the best Girrafee, and unfortunately for you, now you are stuck with me.
We've fought about so many things, and I'm pretty sure we've collected enough arguments to publish a whole series, but somehow we always find our way back to being idiots together.
Your obsession with saying “peak” is another phenomenon I have yet to scientifically understand, but I've accepted that this is just part of dating you.
And then there's you getting excited about sports — which is honestly so cute.
I love the little things, the big things, the ridiculous things, the things we probably won't remember years from now, and especially the things that somehow become our things.
From dahi bara to Maggie, from random updates to random arguments, from teaching me things to making me laugh when I don't expect it.
And before you get too comfortable, let me address the girl interaction department.
You KNOW I don't like it, you KNOW it gets on my nerves, and yet somehow you still manage to test my patience.
I am not saying you can't talk to girls, I am saying please remember who your girlfriend is before you start getting too friendly.
I trust you, I am watching. 👀
And I know I haven't been perfect either.
I've made my own mistakes, said things I shouldn't have, and we've both had our moments where we probably thought, what the hell are we even doing?
But we've learned, we've grown, we've forgiven, and somehow we keep choosing each other.
Because now it's not just you and me anymore — it's OS.
And whatever happens, however many silly fights we have, however much we annoy each other, it's OS now, and it will forever be OS. ♡
And if you ever forget how much I love you, just remember:
you are my favourite Girrafee, my life-lesson teacher, my professional yapper, my sports commentator, my Om Pari…
MY FIRST FUCKING LEGIT LOVE!
Make your family proud.`;

  const [displayedText, setDisplayedText] = useState("");
  const [isFinished, setIsFinished] = useState(false);
  const [isFastForward, setIsFastForward] = useState(false);
  const letterContainerRef = useRef(null);

  // TYPEWRITER EFFECT WITH RANDOM REALISTIC PAUSES
  useEffect(() => {
    if (isFinished) return;

    let index = displayedText.length;
    let timerId;

    const typeNextChar = () => {
      if (index < letterText.length) {
        index++;
        setDisplayedText(letterText.slice(0, index));

        const lastChar = letterText[index - 1];

        // Determine base speed
        let delay = isFastForward ? 4 : Math.floor(Math.random() * 35) + 25;

        // Add realistic pauses (Typewriter effect)
        if (!isFastForward) {
          // Pause on punctuation
          if ([".", ",", "!", "?", "\n"].includes(lastChar)) {
            delay += Math.floor(Math.random() * 400) + 200; // Pause 200ms - 600ms
          }
          // Random middle-of-text pause (simulating thinking / typewriter pause)
          else if (Math.random() < 0.05) {
            delay += Math.floor(Math.random() * 700) + 300; // Pause 300ms - 1000ms
          }
        }

        timerId = setTimeout(typeNextChar, delay);
      } else {
        setIsFinished(true);
      }
    };

    timerId = setTimeout(typeNextChar, isFastForward ? 4 : 30);

    return () => clearTimeout(timerId);
  }, [letterText, isFinished, isFastForward]);

  const handleSkipTyping = () => {
    setDisplayedText(letterText);
    setIsFinished(true);
    setTimeout(() => {
      letterContainerRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }, 50);
  };

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#8c2522] selection:bg-[#641f25] selection:text-white">
      {/* Dynamic Google Fonts Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bonheur+Royale&family=Cedarville+Cursive&family=Monsieur+La+Doulaise&family=Qwitcher+Grypen:wght@700&display=swap');
      `}</style>

      {/* NOTEBOOK LINES BACKGROUND */}
      <div
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent 0px, transparent 38px, #ffffff 39px, transparent 40px)",
          backgroundPosition: "0 15px",
        }}
      />

      {/* FLOATING SPOTIFY PLAYER - Scaled down size */}
      <div className="pointer-events-none absolute right-[-2%] top-[1%] z-30 w-28 rotate-[12deg] opacity-80 drop-shadow-xl sm:right-[2%] sm:top-[2%] sm:w-44 sm:rotate-[18deg] sm:opacity-90 md:w-52">
        <img
          src="/spotify.png"
          alt="Spotify Player"
          className="h-auto w-full object-contain"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>

      {/* FLOATING DOODLES */}
      <div className="pointer-events-none absolute left-[3%] top-[8%] rotate-[-12deg] text-3xl text-white/20 sm:left-[5%] sm:top-[12%] sm:text-5xl">
        ♡
      </div>
      <div className="pointer-events-none absolute left-[8%] top-[35%] rotate-[10deg] text-2xl text-white/15 sm:left-[10%] sm:top-[38%] sm:text-3xl">
        ✦
      </div>
      <div className="pointer-events-none absolute bottom-[15%] left-[4%] rotate-[-15deg] text-3xl text-white/20 sm:bottom-[18%] sm:left-[6%] sm:text-4xl">
        ♡
      </div>
      <div className="pointer-events-none absolute left-[45%] top-[4%] rotate-[14deg] text-3xl text-white/20 sm:top-[6%] sm:text-4xl">
        ♡
      </div>

      {/* MAIN LETTER CONTAINER */}
      <section className="relative z-10 flex min-h-screen w-full items-center justify-center px-3 py-10 sm:px-6 sm:py-16 md:py-24">
        <div className="relative w-full max-w-[760px]">
          {/* TAPE AT TOP */}
          <div className="absolute -top-4 left-1/2 z-30 h-8 w-28 -translate-x-1/2 rotate-[-2deg] border-x border-white/40 bg-[#e6d3ba]/80 shadow-md backdrop-blur-xs sm:-top-5 sm:h-10 sm:w-36" />

          {/* PAPER ARTICLE */}
          <article
            ref={letterContainerRef}
            className="relative rotate-[-0.5deg] rounded-sm border border-[#e8dac1] bg-[#fcf8ef] px-5 py-8 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] sm:px-12 sm:py-12 md:px-16 md:py-14"
          >
            {/* PAPER DOODLE */}
            <div className="absolute right-4 top-4 rotate-[12deg] select-none text-xl text-[#641f25]/40 sm:right-7 sm:top-7 sm:text-2xl">
              ♡
            </div>

            {/* DATE */}
            <div
              className="mb-4 text-right text-[#641f25]/70 sm:mb-8"
              style={{
                fontFamily: '"Monsieur La Doulaise", cursive',
                fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
              }}
            >
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>

            {/* GREETING */}
            <h1
              className="mb-4 text-[#641f25] drop-shadow-xs sm:mb-8"
              style={{
                fontFamily: '"Bonheur Royale", cursive',
                fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
                lineHeight: "1",
              }}
            >
              Dear Giraffe,
            </h1>

            {/* SUB-NOTE */}
            <p
              className="mb-4 rotate-[-1deg] text-[#641f25]/70 sm:mb-6"
              style={{
                fontFamily: '"Qwitcher Grypen", cursive',
                fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
              }}
            >
              okay... I have something to say ♡
            </p>

            {/* TYPING TEXT CONTENT */}
            <div
              className="whitespace-pre-line leading-relaxed text-[#4f2926]"
              style={{
                fontFamily: '"Cedarville Cursive", cursive',
                fontSize: "clamp(1.15rem, 2.2vw, 1.75rem)",
                lineHeight: "1.8",
              }}
            >
              {displayedText}
              {!isFinished && (
                <span className="ml-1 inline-block animate-pulse font-bold text-[#641f25]">
                  |
                </span>
              )}
            </div>

            {/* SKIP / FAST FORWARD CONTROLS */}
            {!isFinished && (
              <div className="mt-6 flex justify-end gap-3 text-xs sm:text-sm">
                <button
                  onClick={() => setIsFastForward(true)}
                  className="flex items-center gap-1.5 rounded-full border border-[#641f25]/30 bg-[#641f25]/5 px-3 py-1.5 font-medium text-[#641f25] shadow-xs backdrop-blur-xs transition-all hover:scale-105 hover:bg-[#641f25]/15 active:scale-95 cursor-pointer"
                >
                  <span> Fast Forward</span>
                </button>
                <button
                  onClick={handleSkipTyping}
                  className="flex items-center gap-1.5 rounded-full border border-[#641f25]/30 bg-[#641f25]/5 px-3 py-1.5 font-medium text-[#641f25] shadow-xs backdrop-blur-xs transition-all hover:scale-105 hover:bg-[#641f25]/15 active:scale-95 cursor-pointer"
                >
                  <span>Skip Typing</span>
                </button>
              </div>
            )}

            {/* SIGNATURE */}
            <div
              className={`mt-8 sm:mt-12 transition-all duration-1000 ${
                isFinished
                  ? "translate-y-0 opacity-100"
                  : "translate-y-3 opacity-0"
              }`}
            >
              <p
                className="text-[#641f25]"
                style={{
                  fontFamily: '"Cedarville Cursive", cursive',
                  fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                }}
              >
                Yours, Saanvi ♡
              </p>
            </div>

            {/* LETTER ENDING */}
            {isFinished && <LetterEnding onContinue={onContinue} />}
          </article>
        </div>
      </section>

      {/* FIXED GIRAFFE BOTTOM RIGHT */}
      <div className="pointer-events-none fixed bottom-0 right-1 z-40 w-32 rotate-[-2deg] opacity-90 drop-shadow-2xl sm:right-6 sm:w-48 sm:opacity-100 md:w-56">
        <img
          src="/giraffe.png"
          alt="Cute Giraffe"
          className="h-auto w-full object-contain"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>
    </main>
  );
}

export default Letter;