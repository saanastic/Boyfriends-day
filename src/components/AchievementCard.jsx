function AchievementCard({ icon, title, description, delay }) {
  return (
    <div
      className="animate-[fadeUp_0.7s_ease-out_both] rounded-sm border border-[#a98a68]/50 bg-[#eee0c6]/90 p-5 text-center shadow-[0_10px_25px_rgba(60,35,20,0.15)]"
      style={{ animationDelay: delay }}
    >
      <div className="text-3xl">{icon}</div>

      <p
        className="mt-3 text-3xl text-[#7b1e1e]"
        style={{
          fontFamily: '"Monsieur La Doulaise", cursive',
        }}
      >
        {title}
      </p>

      <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#765444]">
        {description}
      </p>

      <div className="mt-4 text-[8px] font-bold uppercase tracking-[0.2em] text-[#7b1e1e]">
        ✓ achievement unlocked
      </div>
    </div>
  );
}

export default AchievementCard;