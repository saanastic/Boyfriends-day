import React, { useState } from "react";

function Envelope({ onOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const handleClick = () => {
    if (isOpen) return;

    setIsOpen(true);

    setTimeout(() => {
      setIsFading(true);
    }, 1300);

    setTimeout(() => {
      if (onOpen) {
        onOpen();
      }
    }, 1900);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex h-screen w-screen items-center justify-center overflow-hidden bg-[#f7f3ed] transition-all duration-700 ease-out ${
        isFading
          ? "pointer-events-none scale-105 opacity-0"
          : "scale-100 opacity-100"
      }`}
    >
      <div
        className={`absolute top-[8%] left-1/2 z-50 -translate-x-1/2 text-center transition-all duration-500 ${
          isOpen
            ? "-translate-y-5 opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      >
        <p
          className="m-0 text-[#7b1e1e]"
          style={{
            fontFamily: '"Monsieur La Doulaise", cursive',
            fontSize: "clamp(6rem, 3.5vw, 3.5rem)",
            letterSpacing: "0.03em",
            textShadow:
              "0 1px 0 rgba(255,255,255,0.7), 0 3px 10px rgba(80,35,20,0.12)",
          }}
        >
          Click-to-open
        </p>
      </div>

      <button
        type="button"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        aria-label="Open envelope"
        className="relative flex h-full w-full cursor-pointer items-center justify-center border-none bg-transparent p-0 outline-none"
      >
        <div
          className={`absolute inset-0 z-10 flex items-center justify-center transition-transform duration-[1050ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isOpen ? "translate-y-[75vh]" : "translate-y-0"
          }`}
        >
          <img
            src="/envelope-bottom.png"
            alt=""
            draggable="false"
            className="block w-[70vw] max-w-[650px] object-contain select-none"
          />
        </div>

        <div
          className={`absolute inset-0 z-20 flex items-center justify-center transition-transform duration-[1050ms] delay-[180ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isOpen ? "-translate-y-[75vh]" : "translate-y-0"
          }`}
        >
          <img
            src="/envelope-top.png"
            alt=""
            draggable="false"
            className="block w-[70vw] max-w-[650px] object-contain select-none"
          />
        </div>
      </button>
    </div>
  );
}

export default Envelope;