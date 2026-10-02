import React, { useState } from "react";

export default function RelationshipTerms({ onContinue }) {
  const [approved, setApproved] = useState(false);
  const [animStage, setAnimStage] = useState("idle"); // 'idle' | 'pressing' | 'stamped' | 'exiting'

  const terms = [
    { num: "01", title: "GOOD MORNING / GOOD NIGHT", desc: "Basic attendance is required." },
    { num: "02", title: "GIRL/BOY INTERACTION RULE", desc: "Keep boundaries clear and don't do things you know will hurt the other person." },
    { num: "03", title: "RANDOM UPDATES", desc: "Important, useless, and completely random updates are all welcome." },
    { num: "04", title: "ANNOYANCE RIGHTS", desc: "Both parties have the right to annoy each other for absolutely no reason." },
    { num: "05", title: "GUJARATI CLAUSE", desc: "Thodu gusse, thodu drama, pan saath hamesha." },
    { num: "06", title: "THE OS RULE", desc: "It is never just us. It is OS with us.", highlight: true },
    { num: "07", title: "THE STARING RULE", desc: "Looking at each other for no reason is completely legal." },
    { num: "08", title: "THE NICKNAME CLAUSE", desc: "Official names may be used, but stupid nicknames are strongly encouraged." },
    { num: "09", title: "THE “SEND ME A PIC” RULE", desc: "A completely random selfie may be requested at any time." },
    { num: "10", title: "THE “TELL ME EVERYTHING” RULE", desc: "If something interesting happens, the other person deserves the tea." }
  ];

  const handleApprove = () => {
    if (approved) return;
    setApproved(true);
    setAnimStage("pressing");

    setTimeout(() => setAnimStage("stamped"), 1200);
    setTimeout(() => setAnimStage("exiting"), 3200);
    setTimeout(() => {
      if (typeof onContinue === "function") onContinue();
    }, 4000);
  };

  return (
    <div
      style={{
        height: "100vh",
        maxHeight: "100vh",
        width: "100vw",
        backgroundColor: "#E8D8C2",
        color: "#3E2A24",
        fontFamily: 'Georgia, Cambria, "Times New Roman", serif',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "12px",
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
        opacity: animStage === "exiting" ? 0 : 1,
        transform: animStage === "exiting" ? "scale(0.98)" : "scale(1)",
        transition: "opacity 0.8s ease, transform 0.8s ease"
      }}
    >
      {/* Background Dimming Overlay on Approval */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "#3E2A24",
          opacity: animStage !== "idle" ? 0.35 : 0,
          pointerEvents: "none",
          transition: "opacity 0.6s ease",
          zIndex: 15
        }}
      />

      {/* Main Official Document Card */}
      <main
        style={{
          backgroundColor: "#F7F0E3",
          border: "1px solid #9A806B",
          boxShadow: "0 6px 24px rgba(62, 42, 36, 0.12)",
          width: "100%",
          maxWidth: "850px",
          height: "100%",
          maxHeight: "calc(100vh - 24px)",
          padding: "clamp(12px, 2vh, 24px) clamp(16px, 3vw, 36px)",
          borderRadius: "4px",
          position: "relative",
          zIndex: 10,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden"
        }}
      >
        {/* Document Header */}
        <header style={{ textAlign: "center", flexShrink: 0 }}>
          <p
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: "9px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#806C5D",
              margin: "0 0 2px 0"
            }}
          >
            OFFICIAL OS DOCUMENT
          </p>
          <h1
            style={{
              fontSize: "clamp(18px, 2.5vh, 26px)",
              letterSpacing: "0.08em",
              color: "#3E2A24",
              margin: "0 0 2px 0",
              fontWeight: 700,
              textTransform: "uppercase"
            }}
          >
            TERMS &amp; CONDITIONS
          </h1>
          <p
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: "#7B2635",
              textTransform: "uppercase",
              margin: "0 0 8px 0"
            }}
          >
            OFFICIAL OS RELATIONSHIP AGREEMENT
          </p>

          <div style={{ height: "1px", backgroundColor: "#9A806B", width: "100%", margin: "0 auto 8px auto", opacity: 0.5 }} />

          {/* Header Metadata */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: "9px",
              color: "#806C5D",
              fontWeight: 600,
              letterSpacing: "0.05em",
              marginBottom: "6px"
            }}
          >
            <div><span style={{ color: "#9A806B" }}>DOC NO.: </span><span style={{ color: "#3E2A24" }}>OS-210426</span></div>
            <div><span style={{ color: "#9A806B" }}>DATE: </span><span style={{ color: "#3E2A24" }}>21.04.2026</span></div>
            <div>
              <span style={{ color: "#9A806B" }}>STATUS: </span>
              <span style={{ color: approved ? "#7B2635" : "#3E2A24" }}>
                {approved ? "APPROVED ✓" : "PENDING APPROVAL"}
              </span>
            </div>
          </div>
        </header>

        {/* Short Introduction */}
        <section style={{ flexShrink: 0, marginBottom: "4px" }}>
          <p style={{ fontSize: "11px", lineHeight: "1.3", color: "#3E2A24", margin: "0 0 8px 0", fontStyle: "italic", textAlign: "center" }}>
            This document contains the terms and conditions mutually applicable to the parties involved in the OS relationship.
          </p>
        </section>

        {/* Fun Fact / Official Notice Box */}
        <section
          style={{
            flexShrink: 0,
            backgroundColor: "rgba(123, 38, 53, 0.04)",
            border: "1px dashed #9A806B",
            borderRadius: "3px",
            padding: "8px 14px",
            marginBottom: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px"
          }}
        >
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontSize: "9px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "#7B2635",
                margin: "0 0 2px 0",
                textTransform: "uppercase"
              }}
            >
               FUN FACT / LEGAL NOTICE
            </p>
            <p
              style={{
                fontSize: "11px",
                lineHeight: "1.35",
                color: "#3E2A24",
                margin: 0
              }}
            >
              By proceeding past this section, both parties acknowledge that 99% of future disagreements shall be resolved with food, stupid faces, or mandatory hugs. No court of law shall override this clause.
            </p>
          </div>

          {/* Official Stamp Badge */}
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              border: "1px dashed #7B2635",
              outline: "2px solid #7B2635",
              outlineOffset: "-3px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "#7B2635",
              transform: "rotate(-6deg)",
              opacity: 0.85,
              flexShrink: 0,
              userSelect: "none"
            }}
          >
            <span style={{ fontSize: "5px", fontWeight: "bold", letterSpacing: "0.05em", textTransform: "uppercase" }}>OFFICE OF</span>
            <span style={{ fontSize: "10px", fontWeight: "bold", lineHeight: 1 }}>OS</span>
            <span style={{ fontSize: "5px", letterSpacing: "0.04em" }}>21.04.26</span>
          </div>
        </section>

        {/* 2-Column Grid Layout for All 10 Clauses */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4px 16px",
            flexGrow: 1,
            alignContent: "center"
          }}
        >
          {terms.map((item) => (
            <article
              key={item.num}
              style={{
                padding: "3px 6px",
                backgroundColor: item.highlight ? "rgba(123, 38, 53, 0.05)" : "transparent",
                borderLeft: item.highlight ? "2px solid #7B2635" : "none",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "1px" }}>
                <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", fontWeight: 700, color: "#7B2635" }}>
                  {item.num}
                </span>
                <h2 style={{ fontSize: "11px", fontWeight: 700, color: item.highlight ? "#7B2635" : "#3E2A24", margin: 0, letterSpacing: "0.02em" }}>
                  {item.title}
                </h2>
              </div>
              <p style={{ fontSize: "10.5px", lineHeight: "1.25", color: "#3E2A24", margin: 0, paddingLeft: "16px" }}>
                {item.desc}
              </p>
            </article>
          ))}
        </section>

        {/* Bottom Document Form Area */}
        <footer
          style={{
            borderTop: "1px solid #9A806B",
            paddingTop: "8px",
            marginTop: "6px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexShrink: 0
          }}
        >
          {/* Left Metadata */}
          <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", color: "#806C5D", fontWeight: 600 }}>
            <div><span style={{ color: "#9A806B" }}>DATE: </span><span style={{ color: "#3E2A24" }}>21.04.2026</span></div>
            <div>
              <span style={{ color: "#9A806B" }}>STATUS: </span>
              <span style={{ color: approved ? "#7B2635" : "#3E2A24", fontWeight: 700 }}>
                {approved ? "APPROVED" : "PENDING APPROVAL"}
              </span>
            </div>
          </div>

          {/* Right Approval Box */}
          <div
            style={{
              border: "1px solid #9A806B",
              backgroundColor: "rgba(232, 216, 194, 0.3)",
              padding: "6px 16px",
              borderRadius: "2px",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              gap: "12px"
            }}
          >
            {!approved ? (
              <>
                <div style={{ textAlign: "left" }}>
                  <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "8px", fontWeight: 700, color: "#7B2635", margin: 0 }}>
                    APPROVAL REQUIRED
                  </p>
                  <p style={{ fontSize: "10px", color: "#3E2A24", margin: 0 }}>
                    Accept terms of agreement?
                  </p>
                </div>
                <button
                  onClick={handleApprove}
                  style={{
                    backgroundColor: "#7B2635",
                    color: "#F7F0E3",
                    border: "none",
                    padding: "6px 14px",
                    fontSize: "11px",
                    fontFamily: "system-ui, sans-serif",
                    fontWeight: 700,
                    borderRadius: "2px",
                    cursor: "pointer",
                    transition: "background-color 0.2s ease"
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#5d1c28")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#7B2635")}
                >
                   APPROVE
                </button>
              </>
            ) : (
              <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "10px", fontWeight: 700, color: "#7B2635", letterSpacing: "0.1em" }}>
                AGREEMENT APPROVED ✓
              </div>
            )}
          </div>
        </footer>
      </main>

      {/* Biometric Approval Overlay */}
      {approved && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 30,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none"
          }}
        >
          {/* SVG Biometric Fingerprint */}
          <div
            style={{
              width: "110px",
              height: "140px",
              transform:
                animStage === "pressing"
                  ? "scale(1.1) rotate(-3deg)"
                  : animStage === "stamped" || animStage === "exiting"
                  ? "scale(1) rotate(0deg)"
                  : "scale(0.8) rotate(-10deg)",
              opacity: animStage === "pressing" ? 0.85 : 1,
              transition: "transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.4s ease",
              animation: animStage === "stamped" ? "fingerprintWiggle 0.6s ease-in-out" : "none"
            }}
          >
            <svg viewBox="0 0 100 130" fill="none" stroke="#7B2635" strokeWidth="2.5" strokeLinecap="round">
              <path d="M 50,15 A 35,45 0 0 1 85,60 C 85,85 75,105 70,115" />
              <path d="M 50,25 A 25,35 0 0 1 75,60 C 75,80 68,98 62,110" />
              <path d="M 50,35 A 15,25 0 0 1 65,60 C 65,75 60,90 55,105" />
              <path d="M 50,45 A 5,15 0 0 1 55,60 C 55,70 52,80 48,95" />
              <path d="M 50,15 A 35,45 0 0 0 15,60 C 15,85 25,105 30,115" />
              <path d="M 50,25 A 25,35 0 0 0 25,60 C 25,80 32,98 38,110" />
              <path d="M 50,35 A 15,25 0 0 0 35,60 C 35,75 40,90 45,105" />
            </svg>
          </div>

          {/* Stamped Approval Text */}
          <div
            style={{
              marginTop: "12px",
              textAlign: "center",
              opacity: animStage === "stamped" || animStage === "exiting" ? 1 : 0,
              transform:
                animStage === "stamped" || animStage === "exiting"
                  ? "scale(1) rotate(-2deg)"
                  : "scale(0.8) rotate(0deg)",
              transition: "opacity 0.4s ease 0.2s, transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.2s"
            }}
          >
            <div
              style={{
                border: "3px solid #7B2635",
                color: "#7B2635",
                fontSize: "22px",
                fontWeight: 900,
                letterSpacing: "0.15em",
                padding: "4px 16px",
                borderRadius: "4px",
                textTransform: "uppercase",
                display: "inline-block",
                boxShadow: "0 4px 12px rgba(123, 38, 53, 0.15)",
                backgroundColor: "#F7F0E3"
              }}
            >
              APPROVED ✓
            </div>
            <p style={{ fontSize: "13px", fontWeight: 600, color: "#3E2A24", margin: "8px 0 2px 0" }}>
              You have officially accepted these terms.
            </p>
            <p style={{ fontSize: "10px", color: "#806C5D", margin: 0, fontStyle: "italic" }}>
              In your senses.
            </p>
          </div>
        </div>
      )}

      {/* Animation Style */}
      <style>{`
        @keyframes fingerprintWiggle {
          0% { transform: scale(1) rotate(0deg); }
          25% { transform: scale(1) rotate(-2deg); }
          50% { transform: scale(1) rotate(2deg); }
          75% { transform: scale(1) rotate(-1deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
      `}</style>
    </div>
  );
}