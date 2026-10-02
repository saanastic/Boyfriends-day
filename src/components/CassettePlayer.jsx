import { useEffect, useRef, useState } from "react";

function CassettePlayer({ memory, onClose }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const updateProgress = () => {
      if (!audio.duration) return;
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration);
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    audio
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));

    return () => {
      audio.pause();
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [memory]);

  const togglePlay = () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;

    const newTime = (e.target.value / 100) * duration;
    audio.currentTime = newTime;
    setProgress(e.target.value);
  };

  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds) || !timeInSeconds) return "0:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[#432b20]/45 px-5 backdrop-blur-[5px]">
      {/* Close Button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute right-6 top-5 z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#765444]/30 bg-[#f1e3ca] text-2xl text-[#432b20] shadow-lg transition hover:scale-105"
      >
        ×
      </button>

      {/* Main Container */}
      <div className="w-full max-w-[800px] overflow-hidden rounded-2xl border border-[#a98a68]/40 bg-[#eee0c6] p-6 shadow-[0_20px_60px_rgba(45,25,15,0.35)] md:p-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          
          {/* Album Cover */}
          <div className="w-full shrink-0 md:w-[300px]">
            <div className="aspect-square overflow-hidden rounded-xl bg-[#f7f0df] shadow-md border border-[#a98a68]/20">
              <img
                src={memory.image}
                alt={memory.caption}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Player Info & Controls */}
          <div className="flex flex-1 flex-col justify-between">
            {/* Header & Title */}
            <div>
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#8b6651]">
                  PLAYING FROM PLAYLIST
                </p>
                <button
                  type="button"
                  onClick={() => setIsLiked(!isLiked)}
                  className="text-[#7b1e1e] hover:scale-110 transition-transform"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={isLiked ? "#7b1e1e" : "none"}
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-6 w-6"
                  >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </button>
              </div>

              {/* Bold Sans-serif Spotify Style Title */}
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#432b20] md:text-4xl">
                {memory.songName}
              </h2>

              <p className="mt-1 text-sm font-medium text-[#806352]">
                our little soundtrack ♡
              </p>
            </div>

            {/* Progress Scrubber */}
            <div className="mt-6">
              <div className="group relative flex items-center">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={handleSeek}
                  className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-[#c8ad8c] accent-[#7b1e1e] focus:outline-none"
                />
              </div>

              <div className="mt-1.5 flex justify-between text-xs font-semibold text-[#806352]/80">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Spotify Player Control Row */}
            <div className="mt-4 flex items-center justify-between px-2">
              {/* Shuffle */}
              <button
                type="button"
                className="text-[#806352] hover:text-[#432b20] transition"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5" />
                </svg>
              </button>

              {/* Previous */}
              <button
                type="button"
                className="text-[#806352] hover:text-[#432b20] transition"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
                </svg>
              </button>

              {/* Play/Pause Button */}
              <button
                type="button"
                onClick={togglePlay}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-[#7b1e1e] text-white shadow-md transition hover:scale-105 active:scale-95"
              >
                {isPlaying ? (
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>

              {/* Next */}
              <button
                type="button"
                className="text-[#806352] hover:text-[#432b20] transition"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                </svg>
              </button>

              {/* Repeat */}
              <button
                type="button"
                className="text-[#806352] hover:text-[#432b20] transition"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M17 1l4 4-4 4" />
                  <path d="M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4" />
                  <path d="M21 13v2a4 4 0 0 1-4 4H3" />
                </svg>
              </button>
            </div>

            {/* Footer / Caption Card */}
            <div className="mt-6 border-t border-[#b99d7c]/40 pt-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#7b1e1e]">
                MEMORY {String(memory.id).padStart(2, "0")}
              </p>
              <p className="mt-1 text-xs text-[#806352]">
                {memory.caption}
              </p>
            </div>
          </div>

        </div>
      </div>

      <audio ref={audioRef} src={memory.song} preload="auto" />
    </div>
  );
}

export default CassettePlayer;