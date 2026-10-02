import { useState } from "react";

function Home({ onRevealLetter }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);

    setTimeout(() => {
      if (onRevealLetter) {
        onRevealLetter();
      }
    }, 500);
  };

  return (
    <main
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-repeat p-6"
      style={{
        backgroundImage: "url('/home-bg.png')",
        backgroundSize: "50% auto",
        backgroundPosition: "top left",
      }}
    >
      {/* MAIN INTERACTIVE CARD */}
      <section
        onClick={handleClick}
        className={`relative z-10 flex cursor-pointer items-center justify-center transition-all duration-500 ${
          isClicked ? "scale-105 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        {/* CARD CONTAINER */}
        <div className="relative flex aspect-[1.4/1] w-[650px] max-w-[90vw] flex-col items-center justify-center rounded-sm bg-[#f3ede0] p-8 shadow-[0_0_50px_-12px_rgba(0,0,0,0.35)]">
          
          {/* INNER RED STROKE (ABSOLUTE INSET FOR PERFECT EQUAL MARGINS) */}
          <div className="pointer-events-none absolute inset-6 border border-[#8b2323]/80 sm:inset-8" />

          {/* CARD TEXT CONTENT */}
          <div className="z-10 flex flex-col items-center justify-center text-center">
            <h1
              className="mb-1 text-center font-normal text-[#8b2323]"
              style={{
                fontFamily: '"Qwitcher Grypen", cursive',
                fontSize: "clamp(2rem, 5vw, 3.8rem)",
                lineHeight: "1.15",
              }}
            >
              Happy Boyfriend's Day
            </h1>

            <p
              className="mt-2 text-center text-[#2b2b2b]"
              style={{
                fontFamily: '"Aptos", "Segoe UI", sans-serif',
                fontSize: "clamp(0.85rem, 1.4vw, 1.1rem)",
                letterSpacing: "0.02em",
              }}
            >
              click again to reveal &lt;3
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}

export default Home;