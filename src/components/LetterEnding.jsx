function LetterEnding({ onContinue }) {
  return (
    <div className="mt-14 flex flex-col items-center text-center">

      <p
        className="text-[#641f25]"
        style={{
          fontFamily: '"Monsieur La Doulaise", cursive',
          fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
        }}
      >
        Okay... that's enough emotional damage for now.
      </p>

      <button
        onClick={onContinue}
        className="group mt-6 cursor-pointer border-none bg-transparent p-2 text-[#641f25]"
        style={{
          fontFamily: '"Monsieur La Doulaise", cursive',
          fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
        }}
      >
        <span className="transition-all duration-300 group-hover:mr-2">
          there's more
        </span>

        <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
          →
        </span>
      </button>

    </div>
  );
}

export default LetterEnding;