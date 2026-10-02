import { useState } from "react";

function DoYouLoveMe({ onContinue }) {
  const [answered, setAnswered] = useState(false);
  const [noPosition, setNoPosition] = useState({
    top: "58%",
    left: "58%",
  });

  const moveNoButton = () => {
    const positions = [
      { top: "30%", left: "65%" },
      { top: "70%", left: "25%" },
      { top: "35%", left: "25%" },
      { top: "72%", left: "68%" },
      { top: "48%", left: "78%" },
    ];

    const next = positions[Math.floor(Math.random() * positions.length)];
    setNoPosition(next);
  };

  const handleYes = () => {
    setAnswered(true);
  };

  return (
    <main className="relative h-screen w-full overflow-hidden bg-[#f1e3ca] text-[#432b20]">
      {/* Inline Keyframe Animations */}
      <style>{`
        @keyframes customWiggle {
          0%, 100% { transform: rotate(-10deg); }
          50% { transform: rotate(10deg); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(6deg); }
        }
        .animate-wiggle {
          animation: customWiggle 2.2s ease-in-out infinite;
        }
        .animate-float {
          animation: floatSlow 3.8s ease-in-out infinite;
        }
      `}</style>

      {/* BACKGROUND GRID */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(123,30,30,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(123,30,30,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />

      {/* SCATTERED STICKERS (MIX OF BIG & SMALL) */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* BIG: Biting Cats (Top Left) */}
        <img
          src="/biting_cats.png"
          alt="Biting cats sticker"
          className="animate-wiggle absolute -left-2 top-[3%] h-32 w-32 -rotate-12 object-contain drop-shadow-md md:h-48 md:w-48"
        />

        {/* SMALL: Pink Lily Accent (Top Left Near Header) */}
        <img
          src="/pink_lily.png"
          alt="Pink lily sticker"
          className="animate-float absolute left-[22%] top-[8%] h-12 w-12 rotate-12 opacity-80 object-contain drop-shadow-sm md:h-16 md:w-16"
          style={{ animationDelay: "0.5s" }}
        />

        {/* MEDIUM: Smiling Dog (Top Right Header) */}
        <img
          src="/smiling_dog.jpg"
          alt="Smiling dog sticker"
          className="animate-float absolute right-[20%] top-[4%] h-20 w-20 rotate-6 rounded-full object-contain drop-shadow-md md:h-28 md:w-28"
          style={{ animationDelay: "1s" }}
        />

        {/* BIG: Piggy with Bows (Top Right Corner) */}
        <img
          src="/piggy_bows.png"
          alt="Piggy with bows sticker"
          className="animate-wiggle absolute -right-3 top-[5%] h-36 w-36 rotate-12 object-contain drop-shadow-md md:h-52 md:w-52"
          style={{ animationDelay: "0.8s" }}
        />

        {/* SMALL: Teddy Bear Accent (Mid-Left Upper) */}
        <img
          src="/teddy_bear.png"
          alt="Teddy bear sticker"
          className="animate-float absolute left-[5%] top-[30%] h-16 w-16 -rotate-6 object-contain drop-shadow-sm md:h-20 md:w-20"
          style={{ animationDelay: "1.2s" }}
        />

        {/* BIG: Pink Lily (Mid-Left Lower) */}
        <img
          src="/pink_lily.png"
          alt="Pink lily sticker"
          className="animate-wiggle absolute -left-4 top-[55%] h-28 w-28 rotate-45 object-contain drop-shadow-md md:h-40 md:w-40"
          style={{ animationDelay: "0.3s" }}
        />

        {/* BIG: Dragging Kitten (Mid-Right) */}
        <img
          src="/dragging_kitten.jpg"
          alt="Dragging kitten sticker"
          className="animate-wiggle absolute -right-2 top-[40%] h-36 w-36 -rotate-6 rounded-2xl object-contain drop-shadow-md md:h-48 md:w-48"
          style={{ animationDelay: "1.5s" }}
        />

        {/* SMALL: Shy Finger-Pointing Cat Accent (Mid-Right Lower) */}
        <img
          src="/shy_cat.png"
          alt="Shy cat sticker"
          className="animate-float absolute right-[22%] top-[65%] h-14 w-14 rotate-12 opacity-85 object-contain drop-shadow-sm md:h-20 md:w-20"
          style={{ animationDelay: "0.7s" }}
        />

        {/* BIG: Teddy Bear (Bottom Left) */}
        <img
          src="/teddy_bear.png"
          alt="Teddy bear sticker"
          className="animate-float absolute bottom-[2%] left-[3%] h-32 w-32 rotate-12 object-contain drop-shadow-md md:h-44 md:w-44"
          style={{ animationDelay: "0.2s" }}
        />

        {/* SMALL: Smiling Dog Accent (Bottom Center) */}
        <img
          src="/smiling_dog.jpg"
          alt="Smiling dog sticker"
          className="animate-wiggle absolute bottom-[4%] left-[45%] h-12 w-12 -rotate-12 rounded-full object-contain opacity-75 drop-shadow-sm md:h-16 md:w-16"
          style={{ animationDelay: "1.4s" }}
        />

        {/* BIG: Shy Finger-Pointing Cat (Bottom Right) */}
        <img
          src="/shy_cat.png"
          alt="Shy cat sticker"
          className="animate-wiggle absolute -right-3 bottom-[2%] h-32 w-32 -rotate-12 object-contain drop-shadow-md md:h-44 md:w-44"
          style={{ animationDelay: "1.1s" }}
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
        {!answered ? (
          <>
            <p
              className="text-6xl text-[#7b1e1e] md:text-8xl"
              style={{
                fontFamily: '"Monsieur La Doulaise", cursive',
              }}
            >
              do you love me?
            </p>

            <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#765444]">
              choose wisely.
            </p>

            {/* CENTER FEATURED HEART CAT STICKER */}
            <div className="my-6 flex items-center justify-center">
              <img
                src="/kitty_heart_paws.jpg"
                alt="Cute cat making heart paws"
                className="animate-wiggle h-36 w-36 object-contain drop-shadow-lg md:h-48 md:w-48"
              />
            </div>

            <div className="relative mt-4 h-32 w-full max-w-xl">
              {/* YES */}
              <button
                type="button"
                onClick={handleYes}
                className="absolute left-[28%] top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-sm border border-[#7b1e1e]/30 bg-[#7b1e1e] px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f7f0df] shadow-[0_8px_20px_rgba(123,30,30,0.2)] transition hover:scale-105"
              >
                YES ♡
              </button>

              {/* NO */}
              <button
                type="button"
                onMouseEnter={moveNoButton}
                onTouchStart={moveNoButton}
                onClick={moveNoButton}
                className="absolute -translate-x-1/2 -translate-y-1/2 rounded-sm border border-[#a98a68]/50 bg-[#eee0c6] px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#765444] shadow-sm transition-all duration-300"
                style={{
                  top: noPosition.top,
                  left: noPosition.left,
                }}
              >
                NO
              </button>
            </div>
          </>
        ) : (
          <>
            <p
              className="text-6xl text-[#7b1e1e] md:text-8xl"
              style={{
                fontFamily: '"Monsieur La Doulaise", cursive',
              }}
            >
              good answer.
            </p>

            <div className="my-6 flex items-center justify-center">
              <img
                src="/kitty_heart_paws.jpg"
                alt="Cute cat making heart paws"
                className="animate-wiggle h-40 w-40 object-contain drop-shadow-lg md:h-52 md:w-52"
              />
            </div>

            <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#765444]">
              I was hoping you'd say that ♡
            </p>

            <button
              type="button"
              onClick={onContinue}
              className="mt-6 cursor-pointer border-0 bg-transparent text-[9px] font-bold uppercase tracking-[0.2em] text-[#7b1e1e] transition hover:translate-x-1"
            >
              continue →
            </button>
          </>
        )}
      </div>
    </main>
  );
}

export default DoYouLoveMe;