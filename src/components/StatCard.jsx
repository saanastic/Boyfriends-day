function StatCard({ number, text, delay }) {
  return (
    <div
      className="animate-[fadeUp_0.7s_ease-out_both] rounded-sm border border-[#a98a68]/40 bg-[#eee0c6]/75 p-4 text-center shadow-[0_8px_20px_rgba(60,35,20,0.12)] backdrop-blur-sm"
      style={{ animationDelay: delay }}
    >
      <p
        className="text-4xl text-[#7b1e1e] md:text-5xl"
        style={{
          fontFamily: '"Monsieur La Doulaise", cursive',
        }}
      >
        {number}
      </p>

      <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#765444] md:text-[10px]">
        {text}
      </p>
    </div>
  );
}

export default StatCard;