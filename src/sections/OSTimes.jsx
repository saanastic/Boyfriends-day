import React, { useState } from "react";

import frontPhoto from "../assets/newspaper/front.jpg";
import video1 from "../assets/newspaper/video1.mp4";
import video2 from "../assets/newspaper/video2.mp4";
import video3 from "../assets/newspaper/video3.mp4";
import memory1 from "../assets/newspaper/memory1.jpg";
import memory2 from "../assets/newspaper/memory2.jpg";
import memory3 from "../assets/newspaper/memory3.jpg";

const memoryPhotos = [memory1, memory2, memory3];

/**
 * THE OS TIMES
 * Relationship Newspaper Section
 * Created for Saanvi & Om
 */
export default function OSTimes({ onContinue }) {
  const [pollVoted, setPollVoted] = useState(null);

  const marketData = [
    {
      indicator: "LOVE",
      value: "↑ RISING",
      status: "positive",
      detail: "All-time High",
    },
    {
      indicator: "YAPPING",
      value: "↑↑ EXTREMELY RISING",
      status: "critical",
      detail: "24/7 Supply",
    },
    {
      indicator: "JEALOUSY",
      value: "↑ ACTIVE",
      status: "warning",
      detail: "Volatile",
    },
    {
      indicator: "BRAINCELLS",
      value: "↓ DECLINING",
      status: "negative",
      detail: "Shared (1 Left)",
    },
    {
      indicator: "PATIENCE",
      value: "↓ UNDER PRESSURE",
      status: "warning",
      detail: "Low Reserves",
    },
    {
      indicator: "ATTACHMENT",
      value: "↑↑ CRITICAL",
      status: "critical",
      detail: "Irreversible",
    },
    {
      indicator: "'FINE.' TEXTS",
      value: "↑ OUT OF CONTROL",
      status: "warning",
      detail: "High Risk",
    },
    {
      indicator: "SEPARATION",
      value: "MARKET CLOSED",
      status: "closed",
      detail: "Not Trading",
    },
  ];

  const classifiedsData = [
    {
      category: "FOUND",
      title: "One Extremely Tall Boyfriend",
      body: "Claimed exclusively by Saanvi. Return policy: Strictly NOT accepted.",
      contact: "Ref #: OS-2026",
    },
    {
      category: "WANTED",
      title: "Non-Jealous Girlfriend",
      body: "Search abandoned. Subject is happily obsessed and highly territorial.",
      contact: "Status: IMPOSSIBLE",
    },
    {
      category: "FOR SALE",
      title: "Boyfriend 'Free Time'",
      body: "Sold out indefinitely. All available hours booked for yapping & hugs.",
      contact: "Non-refundable",
    },
    {
      category: "EMERGENCY",
      title: "Immediate Hug Delivery",
      body: "High demand. Immediate dispatch required to recipient: Om Patel.",
      contact: "Call: Saanvi Direct",
    },
  ];

  const timelineEvents = [
    {
      era: "THE BEGINNING",
      date: "Circa 2025/2026",
      title: "Two Planets Collide",
      text: "Initial contact established. Mutual exchange of banter and mild annoyance.",
    },
    {
      era: "THE FRIEND ERA",
      date: "Early Stage",
      title: "'We are strictly just friends'",
      text: "They insisted to everyone that nothing suspicious was going on. Investigators remained completely unconvinced.",
    },
    {
      era: "THE SUSPICIOUS ERA",
      date: "Mid Stage",
      title: "Unexplained Yapping Hours",
      text: "Late night calls recorded. Eyewitnesses noticed abnormal levels of smiling at text messages.",
    },
    {
      era: "THE OFFICIAL DATE",
      date: "21 APRIL 2026",
      title: "THE BREAKING POINT",
      text: "Friendship defense completely collapsed. Saanvi and Om officially became OS.",
    },
    {
      era: "PRESENT DAY",
      date: "Right Now",
      title: "Unstoppable Force Meets Tall Object",
      text: "Still annoying each other. Still yapping 24/7. Still laughing at zero-IQ jokes. Still choosing each other every single day.",
    },
  ];

  const emotionalStories = [
    {
      tag: "MEMOIR #01",
      title: "The Friendship That Sneaked Up On Us",
      text: "We didn't just fall in love all at once; we stumbled into it day by day, laugh by laugh, until going back was completely unimaginable.",
    },
    {
      tag: "MEMOIR #02",
      title: "The Art of Endless Yapping",
      text: "Who knew two people could talk about absolutely nothing for four hours straight and still feel like they ran out of time?",
    },
    {
      tag: "MEMOIR #03",
      title: "Through Arguments & Warm Hugs",
      text: "Even when we're annoying, drama-loving, or stubborn, ending the day without each other has never been an option.",
    },
  ];

  return (
    <div className="os-wrapper">
      <style>{`
        .os-wrapper {
          --os-bg: #f5eedc;
          --os-bg-card: #ebdcb9;
          --os-text: #1c1a17;
          --os-text-muted: #5c5549;
          --os-wine: #721c24;
          --os-gold: #9c6f28;
          --os-border: #2c2823;

          --os-font-serif: "Georgia", "Times New Roman", serif;
          --os-font-headline: "Impact", "Arial Black", "Playfair Display", serif;
          --os-font-hand: "Comic Sans MS", "Courier New", cursive;

          background-color: var(--os-bg);
          color: var(--os-text);
          font-family: var(--os-font-serif);
          padding: 14px 10px;
          line-height: 1.5;
          box-sizing: border-box;
          position: relative;
          overflow-x: hidden;
          min-height: 100vh;
        }

        .os-wrapper * {
          box-sizing: border-box;
        }

        .os-container {
          max-width: 1150px;
          margin: 0 auto;
          background-color: #f7f1e1;
          border: 1px solid var(--os-border);
          padding: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
          position: relative;
        }

        .os-hr-double {
          border: none;
          border-top: 3px double var(--os-border);
          margin: 12px 0;
        }

        .os-hr-thin {
          border: none;
          border-top: 1px solid var(--os-border);
          margin: 10px 0;
        }

        .os-stamp {
          display: inline-block;
          border: 2px dashed var(--os-wine);
          color: var(--os-wine);
          font-weight: bold;
          font-size: 0.7rem;
          padding: 3px 8px;
          text-transform: uppercase;
          letter-spacing: 1px;
          transform: rotate(-3deg);
          margin: 3px;
          user-select: none;
        }

        .os-stamp.gold {
          border-color: var(--os-gold);
          color: var(--os-gold);
          transform: rotate(2deg);
        }

        /* ==============================
           MASTHEAD
        ============================== */

        .os-masthead {
          text-align: center;
          margin-bottom: 14px;
        }

        .os-masthead-meta {
          display: flex;
          justify-content: space-between;
          gap: 8px;
          font-size: 0.68rem;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          border-bottom: 1px solid var(--os-border);
          padding-bottom: 4px;
        }

        .os-masthead-title {
          font-family: var(--os-font-headline);
          font-size: clamp(2.5rem, 8vw, 5.5rem);
          text-transform: uppercase;
          letter-spacing: 2px;
          line-height: 0.9;
          margin: 8px 0;
          color: var(--os-text);
          text-shadow: 1px 1px 0px rgba(0,0,0,0.1);
        }

        .os-masthead-tagline {
          font-style: italic;
          font-size: 0.9rem;
          margin-bottom: 6px;
          color: var(--os-text-muted);
        }

        .os-nav-strip {
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          font-size: 0.68rem;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          padding: 5px 0;
          border-top: 1px solid var(--os-border);
          border-bottom: 2px solid var(--os-border);
        }

        .os-nav-item {
          cursor: pointer;
          color: var(--os-wine);
        }

        .os-nav-item:hover {
          text-decoration: underline;
        }

        /* ==============================
           FRONT PAGE LAYOUT
        ============================== */

        .os-grid-3 {
          display: grid;
          grid-template-columns: 1.55fr 0.95fr 0.95fr;
          gap: 14px;
          align-items: start;
        }

        .os-front-column {
          min-width: 0;
        }

        .os-front-breaking {
          margin-top: 10px;
          background: var(--os-bg-card);
          padding: 10px 12px;
          border: 1px solid var(--os-border);
        }

        .os-front-breaking h3 {
          margin: 4px 0;
        }

        .os-front-breaking p {
          margin: 6px 0 0 0 !important;
        }

        .os-front-photo .os-media-box {
          margin-bottom: 8px;
        }

        .os-front-photo .os-ad-box {
          margin: 8px 0;
        }

        .os-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
          align-items: start;
        }

        .os-grid-equal-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .os-chronology-market {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 22px;
          align-items: start;
        }

        /* ==============================
           ARTICLES
        ============================== */

        .os-article {
          margin-bottom: 18px;
        }

        .os-headline-main {
          font-size: clamp(1.7rem, 4vw, 2.7rem);
          font-weight: 900;
          line-height: 1.05;
          margin-top: 0;
          margin-bottom: 6px;
          text-transform: uppercase;
          color: var(--os-text);
        }

        .os-subheadline {
          font-size: 1rem;
          font-style: italic;
          color: var(--os-wine);
          margin-bottom: 9px;
          font-weight: 600;
        }

        .os-byline {
          font-size: 0.68rem;
          text-transform: uppercase;
          color: var(--os-text-muted);
          margin-bottom: 10px;
          font-weight: bold;
          letter-spacing: 0.5px;
        }

        .os-article p {
          margin-bottom: 9px;
          text-align: justify;
          font-size: 0.88rem;
        }

        .os-article p::first-letter {
          font-size: 2rem;
          float: left;
          line-height: 0.8;
          padding-right: 5px;
          padding-top: 2px;
          font-weight: bold;
          color: var(--os-wine);
        }

        /* ==============================
           SECTION HEADERS
        ============================== */

        .os-section-header {
          border-top: 2px solid var(--os-border);
          border-bottom: 1px solid var(--os-border);
          padding: 4px 0;
          margin: 22px 0 12px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
        }

        .os-section-title {
          font-size: 1.15rem;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          margin: 0;
          color: var(--os-text);
        }

        /* ==============================
           MEDIA
        ============================== */

        .os-media-box {
          border: 1px solid var(--os-border);
          padding: 5px;
          background-color: #fff;
          margin-bottom: 12px;
          position: relative;
        }

        .os-media-caption {
          font-size: 0.72rem;
          font-style: italic;
          color: var(--os-text-muted);
          margin-top: 5px;
          text-align: center;
        }

        /* ==============================
           BREAKING NEWS
        ============================== */

        .os-breaking-box {
          background: var(--os-bg-card);
          padding: 10px;
          border: 1px solid var(--os-border);
        }

        /* ==============================
           TIMELINE
        ============================== */

        .os-timeline {
          border-left: 2px dashed var(--os-border);
          padding-left: 18px;
          margin: 12px 0 10px 8px;
        }

        .os-timeline-item {
          position: relative;
          margin-bottom: 17px;
        }

        .os-timeline-item::before {
          content: "";
          position: absolute;
          left: -24px;
          top: 4px;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--os-wine);
        }

        .os-timeline-era {
          font-size: 0.68rem;
          font-weight: bold;
          color: var(--os-wine);
          text-transform: uppercase;
        }

        .os-timeline-title {
          font-size: 1rem;
          font-weight: bold;
          margin: 2px 0;
        }

        /* ==============================
           INTERVIEW
        ============================== */

        .os-interview-box {
          background-color: var(--os-bg-card);
          padding: 15px;
          border: 1px solid var(--os-border);
          margin: 10px 0;
        }

        .os-qa {
          margin-bottom: 10px;
        }

        .os-q {
          font-weight: bold;
          color: var(--os-wine);
          font-size: 0.76rem;
          text-transform: uppercase;
        }

        .os-a {
          font-style: italic;
          margin-left: 8px;
          font-size: 0.88rem;
        }

        .os-pull-quote {
          font-size: 1.15rem;
          font-weight: bold;
          text-align: center;
          color: var(--os-wine);
          border-top: 1px solid var(--os-border);
          border-bottom: 1px solid var(--os-border);
          padding: 12px 5px;
          margin: 15px 0;
          font-style: italic;
        }

        /* ==============================
           MARKET REPORT
        ============================== */

        .os-market-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.76rem;
        }

        .os-market-table th,
        .os-market-table td {
          border-bottom: 1px solid var(--os-border);
          padding: 5px 4px;
          text-align: left;
          vertical-align: top;
        }

        .os-market-table th {
          text-transform: uppercase;
          font-size: 0.65rem;
        }

        .os-status-positive {
          color: green;
          font-weight: bold;
        }

        .os-status-critical {
          color: var(--os-wine);
          font-weight: bold;
        }

        .os-status-warning {
          color: var(--os-gold);
          font-weight: bold;
        }

        .os-status-negative {
          color: darkred;
          font-weight: bold;
        }

        .os-status-closed {
          color: var(--os-text-muted);
          font-weight: bold;
        }

        /* ==============================
           PROFILE
        ============================== */

        .os-profile-card {
          border: 1px solid var(--os-border);
          padding: 14px;
          background-color: #fff;
        }

        .os-profile-list {
          list-style: none;
          padding: 0;
          margin: 0;
          font-size: 0.85rem;
        }

        .os-profile-list li {
          padding: 4px 0;
          border-bottom: 1px dotted #ccc;
        }

        .os-profile-list strong {
          text-transform: uppercase;
          font-size: 0.72rem;
          color: var(--os-text-muted);
        }

        /* ==============================
           NAZAR
        ============================== */

        .os-nazar-box {
          border: 2px solid var(--os-wine);
          background: #fdf6e7;
          padding: 14px;
          text-align: center;
          margin: 0;
        }

        .os-nazar-title {
          font-family: var(--os-font-headline);
          font-size: 1.4rem;
          color: var(--os-wine);
          margin-bottom: 6px;
        }

        /* ==============================
           EASTER EGGS
        ============================== */

        .os-easter-box {
          border: 1px dashed var(--os-border);
          padding: 10px;
          background: rgba(0,0,0,0.02);
          font-size: 0.8rem;
          margin-bottom: 10px;
        }

        .os-easter-header {
          font-weight: bold;
          text-transform: uppercase;
          font-size: 0.7rem;
          color: var(--os-gold);
          letter-spacing: 1px;
          margin-bottom: 4px;
        }

        /* ==============================
           CLASSIFIEDS
        ============================== */

        .os-classified-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .os-classified-item {
          border: 1px solid var(--os-border);
          padding: 9px;
          background: #faf6ed;
          font-size: 0.75rem;
        }

        .os-classified-cat {
          font-weight: bold;
          background: var(--os-border);
          color: #fff;
          padding: 1px 5px;
          display: inline-block;
          font-size: 0.6rem;
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        /* ==============================
           ADS
        ============================== */

        .os-ad-box {
          border: 2px dashed var(--os-border);
          padding: 9px;
          text-align: center;
          margin: 10px 0;
          background-color: #fff8e7;
        }

        .os-ad-title {
          font-weight: bold;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* ==============================
           POLL
        ============================== */

        .os-poll-box {
          border: 1px solid var(--os-border);
          padding: 10px;
          margin: 0 0 10px 0;
          background-color: #fff;
        }

        .os-poll-btn {
          display: block;
          width: 100%;
          text-align: left;
          background: var(--os-bg);
          border: 1px solid var(--os-border);
          padding: 6px 8px;
          margin: 4px 0;
          font-size: 0.72rem;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
        }

        .os-poll-btn:hover {
          background: var(--os-bg-card);
          transform: translateX(2px);
        }

        /* ==============================
           FINAL
        ============================== */

        .os-final-section {
          margin-top: 35px;
          text-align: center;
          padding: 30px 15px;
          background: linear-gradient(
            180deg,
            rgba(247,241,225,0) 0%,
            rgba(235,220,185,0.5) 100%
          );
        }

        .os-final-headline {
          font-family: var(--os-font-headline);
          font-size: clamp(2rem, 6vw, 4rem);
          color: var(--os-wine);
          text-transform: uppercase;
          margin: 12px 0;
          letter-spacing: 2px;
        }

        .os-final-date {
          font-size: 1.3rem;
          font-weight: bold;
          letter-spacing: 3px;
          margin: 16px 0;
        }

        .os-signature {
          font-family: var(--os-font-hand);
          font-size: 1.7rem;
          color: var(--os-wine);
          margin-top: 8px;
        }

        .os-continue-btn {
          margin-top: 28px;
          padding: 12px 25px;
          background: var(--os-wine);
          color: #f7f1e1;
          border: 1px solid var(--os-border);
          font-family: var(--os-font-serif);
          font-size: 0.72rem;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 2px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .os-continue-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 12px rgba(0,0,0,0.2);
        }

        /* ==============================
           MOBILE
        ============================== */

        @media (max-width: 900px) {
          .os-grid-3,
          .os-grid-2,
          .os-grid-equal-3,
          .os-chronology-market {
            grid-template-columns: 1fr;
          }

          .os-grid-3 {
            gap: 10px;
          }

          .os-container {
            padding: 14px;
          }

          .os-classified-grid {
            grid-template-columns: 1fr;
          }

          .os-masthead-meta {
            flex-wrap: wrap;
            justify-content: center;
          }
        }

        @media (max-width: 600px) {
          .os-wrapper {
            padding: 5px;
          }

          .os-container {
            padding: 10px;
          }

          .os-masthead-title {
            font-size: 3rem;
          }

          .os-market-table {
            font-size: 0.68rem;
          }

          .os-market-table th,
          .os-market-table td {
            padding: 4px 2px;
          }
        }
      `}</style>

      <div className="os-container">

        {/* ==================================================
            1. NEWSPAPER MASTHEAD
        ================================================== */}

        <header className="os-masthead">

          <div className="os-masthead-meta">
            <span>Special Relationship Edition</span>
            <span>Vol. 01</span>
            <span>28 September 2026</span>
            <span>Price ₹0.00</span>
          </div>

          <h1 className="os-masthead-title">
            The OS Times
          </h1>

          <div className="os-masthead-tagline">
            “All the news that’s fit to fall in love with”
          </div>

          <nav className="os-nav-strip">
            <span className="os-nav-item">Local</span>
            •
            <span className="os-nav-item">Relationships</span>
            •
            <span className="os-nav-item">Entertainment</span>
            •
            <span className="os-nav-item">Classifieds</span>
            •
            <span className="os-nav-item">Special Report</span>
          </nav>

        </header>


        {/* ==================================================
            2. FRONT PAGE
        ================================================== */}

        <section>

          <div className="os-grid-3">

            {/* MAIN STORY */}

            <article className="os-article os-front-column">

              <span className="os-stamp">
                Exclusive Report
              </span>

              <h2 className="os-headline-main">
                A Girl Accidentally Fell In Love With A Tall Guy
              </h2>

              <div className="os-subheadline">
                Sources confirm she has absolutely no plans of recovering.
              </div>

              <div className="os-byline">
                By Relationship Desk Correspondent | Saanvi
              </div>

              <p>
                What began as innocent friendship somehow escalated
                into a full-time, high-level emotional attachment.
                Witnesses report that two individuals, who previously
                claimed they were "just chilling," have failed
                completely at maintaining normal boundaries.
              </p>

              <p>
                Investigative journalists have confirmed that Saanvi
                showed symptoms of extreme attachment early on,
                including smiling continuously at phone screens,
                laughing at zero-IQ jokes, and making excuses to yap
                for hours without a break.
              </p>


              {/* BREAKING NEWS */}

              <div className="os-front-breaking">

                <span className="os-stamp gold">
                  Breaking News
                </span>

                <h3
                  style={{
                    fontSize: "1.25rem",
                    textTransform: "uppercase",
                  }}
                >
                  They’re Official.
                </h3>

                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "0.75rem",
                    color: "var(--os-wine)",
                  }}
                >
                  KEY DATE: 21 APRIL 2026
                </div>

                <p style={{ fontSize: "0.8rem" }}>
                  After months of suspiciously close friendship,
                  authorities finally confirmed what everyone already
                  knew. The pair officially surrendered to mutual
                  affection on April 21, 2026.
                </p>

              </div>

            </article>


            {/* PHOTO */}

            <div className="os-article os-front-column os-front-photo">

              <div className="os-media-box">

                <img
                  src={frontPhoto}
                  alt="OS newspaper front page memory"
                  style={{
                    width: "100%",
                    height: "175px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                <div className="os-media-caption">
                  ARCHIVE FOOTAGE — EVIDENCE #001
                  <br />
                  "Subject displays suspicious levels of happiness
                  around to-be-girlfriend."
                </div>

              </div>


              

            </div>


            {/* QUICK HIGHLIGHTS */}

            <div className="os-front-column">

              <div className="os-poll-box">

                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    marginBottom: "5px",
                  }}
                >
                  📊 Reader Opinion Poll
                </div>

                <div
                  style={{
                    fontSize: "0.78rem",
                    marginBottom: "7px",
                  }}
                >
                  Who is the bigger yapper in this relationship?
                </div>

                <button
                  className="os-poll-btn"
                  onClick={() => setPollVoted("Om")}
                >
                  A) Om Patel (100% indisputable)
                  {pollVoted === "Om" && " ✓"}
                </button>

                <button
                  className="os-poll-btn"
                  onClick={() => setPollVoted("Saanvi")}
                >
                  B) Saanvi (Only when excited)
                  {pollVoted === "Saanvi" && " ✓"}
                </button>

                {pollVoted && (
                  <div
                    style={{
                      fontSize: "0.65rem",
                      color: "var(--os-wine)",
                      marginTop: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    Vote Recorded! Result: Both yap continuously.
                  </div>
                )}

              </div>


              <div className="os-easter-box">

                <div className="os-easter-header">
                  ⚡ Hogwarts Correspondent
                </div>

                <div>
                  "Local wizard confirms: It was always him.
                  Patronus compatibility registered at dangerously
                  high levels."
                </div>

              </div>


              <div className="os-easter-box">

                <div className="os-easter-header">
                   Hawkins Correspondent
                </div>

                <div>
                  "Strange things continue to happen between two
                  suspiciously attached people. Status: Strangely
                  in love."
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ==================================================
            4. EXCLUSIVE VIDEO EVIDENCE #001
        ================================================== */}

        <div className="os-section-header">

          <h3 className="os-section-title">
            Video Evidence File #001
          </h3>

          <span className="os-stamp">
            CLASSIFIED
          </span>

        </div>


        <div className="os-grid-2">

          <div className="os-media-box">

            <video
              controls
              playsInline
              preload="metadata"
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                display: "block",
              }}
            >
              <source src={video1} type="video/mp4" />
              Your browser does not support video playback.
            </video>

            <div className="os-media-caption">
              EVIDENCE RECORDING #01 —
              Recovered from personal cloud archives.
            </div>

          </div>


          <div>

            <h4
              style={{
                margin: "0 0 8px 0",
                fontSize: "1.1rem",
                textTransform: "uppercase",
              }}
            >
              Investigative Summary
            </h4>

            <p>
              Video tape recovered by senior editors confirms that
              these two individuals are incapable of behaving normally
              around each other. Excessive laughing, silly facial
              expressions, and unprovoked affection were recorded
              during initial observation.
            </p>

            <span className="os-stamp gold">
              FACT CHECKED: QUESTIONABLY
            </span>

          </div>

        </div>


        {/* ==================================================
            5. CHRONOLOGY + MARKET REPORT
        ================================================== */}

        <div className="os-chronology-market">

          {/* CHRONOLOGY */}

          <div>

            <div className="os-section-header">

              <h3 className="os-section-title">
                How It All Happened — Chronology
              </h3>

              <span
                style={{
                  fontSize: "0.7rem",
                  fontWeight: "bold",
                }}
              >
                SPECIAL EDITORIAL
              </span>

            </div>


            <div className="os-timeline">

              {timelineEvents.map((evt, idx) => (

                <div
                  className="os-timeline-item"
                  key={idx}
                >

                  <div className="os-timeline-era">
                    {evt.era} — {evt.date}
                  </div>

                  <div className="os-timeline-title">
                    {evt.title}
                  </div>

                  <div style={{ fontSize: "0.82rem" }}>
                    {evt.text}
                  </div>

                </div>

              ))}

            </div>

          </div>


          {/* MARKET REPORT */}

          <div>

            <div className="os-section-header">

              <h3 className="os-section-title">
                Relationship Market Report
              </h3>

            </div>

            <p
              style={{
                fontSize: "0.76rem",
                fontStyle: "italic",
                marginTop: 0,
              }}
            >
              Daily financial overview of emotional investments
              & stock indices:
            </p>


            <table className="os-market-table">

              <thead>

                <tr>
                  <th>INDICATOR</th>
                  <th>TREND</th>
                  <th>ANALYST NOTE</th>
                </tr>

              </thead>

              <tbody>

                {marketData.map((item, i) => (

                  <tr key={i}>

                    <td>
                      <strong>
                        {item.indicator}
                      </strong>
                    </td>

                    <td
                      className={`os-status-${item.status}`}
                    >
                      {item.value}
                    </td>

                    <td>
                      {item.detail}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>


            <div
              style={{
                fontSize: "0.65rem",
                marginTop: "8px",
                fontStyle: "italic",
                textAlign: "right",
              }}
            >
              *Scientific accuracy: Questionable.
              Disclaimer: Non-negotiable attachment.
            </div>


            <div
              className="os-ad-box"
              style={{
                marginTop: "12px",
              }}
            >

              <div className="os-ad-title">
                Emergency Hug Delivery
              </div>

              <div
                style={{
                  fontSize: "0.7rem",
                  marginTop: "4px",
                }}
              >
                Available 24/7. Priority service reserved
                for Om Patel.
              </div>

            </div>

          </div>

        </div>


        {/* ==================================================
            6. EXCLUSIVE INTERVIEW
        ================================================== */}

     


        {/* ==================================================
            8. HUMAN INTEREST STORY
        ================================================== */}

        <div className="os-section-header">

          <h3 className="os-section-title">
            Human Interest — Subject Profile
          </h3>

        </div>


        <div className="os-grid-2">

          <div className="os-profile-card">

            <span className="os-stamp">
              SUBJECT IS TAKEN
            </span>

            <h3
              style={{
                margin: "8px 0 5px 0",
                fontSize: "1.3rem",
                textTransform: "uppercase",
              }}
            >
              Om Patel — AKA: Giraffe 
            </h3>

            <ul className="os-profile-list">

              <li>
                <strong>Known For:</strong>{" "}
                Excessive height, non-stop yapping,
                stealing Saanvi's attention
              </li>

              <li>
                <strong>Height Status:</strong>{" "}
                Unnecessarily tall
              </li>

              <li>
                <strong>Brain Cells Remaining:</strong>{" "}
                Under active investigation
              </li>

              <li>
                <strong>Girlfriend Attachment Level:</strong>{" "}
                Extreme / Irreversible
              </li>

              <li>
                <strong>Core Habit:</strong>{" "}
                Looking ridiculously cute when least expected
              </li>

            </ul>

          </div>


          {/* NAZAR ALERT */}

          <div className="os-nazar-box">

            <div className="os-nazar-title">
              NAZAR ALERT 🧿
            </div>

            <p
              style={{
                fontSize: "0.85rem",
                margin: "8px 0",
              }}
            >
              “Citizens are strictly advised to maintain a safe
              distance from this couple. Excessive levels of
              cuteness and dramatic romance have been detected.”
            </p>

            <div
              style={{
                fontSize: "1.4rem",
                letterSpacing: "8px",
                margin: "8px 0",
              }}
            >
              🧿 🧿 🧿
            </div>

            <div
              style={{
                fontStyle: "italic",
                fontWeight: "bold",
                fontSize: "0.8rem",
                color: "var(--os-wine)",
              }}
            >
              "Buri nazar walon, tumhara WiFi band ho."
            </div>

          </div>

        </div>


        {/* ==================================================
            10. ENTERTAINMENT DESK
        ================================================== */}

        <div className="os-section-header">

          <h3 className="os-section-title">
            Entertainment Desk — Bollywood Desk
          </h3>

        </div>


        <div className="os-grid-3">

          <div className="os-article">

            <h3
              style={{
                fontSize: "1.6rem",
                margin: "0 0 5px 0",
                textTransform: "uppercase",
              }}
            >
              OS — The Movie
            </h3>

            <div className="os-subheadline">
              An unnecessarily dramatic love story.
            </div>

            <p style={{ fontSize: "0.8rem" }}>

              <strong>Genre:</strong>{" "}
              Romance / Comedy / Drama / Jealousy /
              Non-stop Yapping
              <br />

              <strong>Starring:</strong>{" "}
              SAANVI (The Girlfriend) &
              OM (The Giraffe)
              <br />

              <strong>Directed by:</strong> Fate
              <br />

              <strong>Written by:</strong> Two Idiots
              <br />

              <strong>Produced by:</strong>{" "}
              Questionable Decisions Co.

            </p>

          </div>


          <div
            className="os-media-box"
            style={{
              gridColumn: "span 2",
            }}
          >

            <video
              controls
              playsInline
              preload="metadata"
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                display: "block",
              }}
            >
              <source src={video2} type="video/mp4" />
              Your browser does not support video playback.
            </video>

            <div className="os-media-caption">
              VIDEO EVIDENCE #002 —
              Subject captured participating
              in romantic foolishness.
            </div>

          </div>

        </div>


        


        {/* ==================================================
            15. ADDITIONAL VIDEO EVIDENCE #003
        ================================================== */}

        <div className="os-section-header">

          <h3 className="os-section-title">
            Exclusive Video Evidence #003
          </h3>

          <span className="os-stamp">
            ARCHIVAL
          </span>

        </div>


        <div className="os-media-box">

          <video
            controls
            playsInline
            preload="metadata"
            style={{
              width: "100%",
              height: "220px",
              objectFit: "cover",
              display: "block",
            }}
          >
            <source src={video3} type="video/mp4" />
            Your browser does not support video playback.
          </video>

          <div className="os-media-caption">
            VIDEO EVIDENCE #003 —
            Unfiltered moment of mutual happiness.
            Filed under permanent memories.
          </div>

        </div>


        {/* ==================================================
            17. THE STORY SO FAR
        ================================================== */}

        <div
          className="os-section-header"
          style={{
            marginTop: "35px",
          }}
        >

          <h3 className="os-section-title">
            The Story So Far
          </h3>

          <span
            style={{
              fontStyle: "italic",
              fontSize: "0.8rem",
            }}
          >
            Beyond Headlines
          </span>

        </div>


        <p
          style={{
            textAlign: "center",
            maxWidth: "700px",
            margin: "0 auto 20px auto",
            fontStyle: "italic",
            fontSize: "0.9rem",
          }}
        >
          Behind all the chaotic jokes, fake headlines,
          and silly articles... lies a real story made of
          late-night conversations, shared smiles, quiet
          comfort, and choosing each other every day.
        </p>


        <div className="os-grid-equal-3">

          {emotionalStories.map((story, i) => (

            <div
              className="os-article"
              key={i}
              style={{
                textAlign: "center",
              }}
            >

              <div className="os-media-box">

                <img
                  src={memoryPhotos[i]}
                  alt={`OS memory ${i + 1}`}
                  style={{
                    width: "100%",
                    height: "175px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

              </div>

              

              <h4
                style={{
                  margin: "7px 0 4px 0",
                  fontSize: "1rem",
                }}
              >
                {story.title}
              </h4>

             
            </div>

          ))}

        </div>


        {/* ==================================================
            18. FINAL EDITION
        ================================================== */}

        <section className="os-final-section">

          <hr className="os-hr-double" />

          <span className="os-stamp">
            FINAL EDITION
          </span>

          <p
            style={{
              marginTop: "18px",
              fontStyle: "italic",
              fontSize: "1rem",
            }}
          >
            After all the headlines,
            <br />
            all the video evidence,
            <br />
            all the arguments & foolish banter,
            <br />
            all the non-stop yapping…
          </p>


          <h2 className="os-final-headline">
            THE STORY IS STILL OS.
          </h2>


          <div className="os-final-date">
            21.04.2026 → END
          </div>


      


          <div className="os-signature">
            — os
          </div>


          <div
            style={{
              marginTop: "25px",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            THE END?
          </div>


          <div
            style={{
              fontFamily: "var(--os-font-hand)",
              color: "var(--os-wine)",
              fontSize: "1rem",
            }}
          >
            yeah right.
          </div>


          {/* NEXT PAGE BUTTON */}

          <button
            type="button"
            className="os-continue-btn"
            onClick={onContinue}
          >
            Continue the story →
          </button>

        </section>

      </div>
    </div>
  );
}