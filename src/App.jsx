import { useState } from "react";
import { Analytics } from "@vercel/analytics/next"

import Envelope from "./components/Envelope";

import Home from "./sections/Home";
import Letter from "./sections/Letter";
import Memories from "./sections/Memories";
import OSTimes from "./sections/OSTimes";
import RelationshipTerms from "./sections/RelationshipTerms";
import DoYouLoveMe from "./sections/DoYouLoveMe";
import DoYouHaveAChoice from "./sections/DoYouHaveAChoice";
import SweetEnding from "./sections/SweetEnding";

function App() {
  const [currentScreen, setCurrentScreen] = useState("envelope");
  const [showEnvelope, setShowEnvelope] = useState(true);

  const handleEnvelopeOpen = () => {
    setCurrentScreen("home");

    setTimeout(() => {
      setShowEnvelope(false);
    }, 1200);
  };

  return (
    <main className="relative min-h-screen w-full">
      {showEnvelope && (
        <Envelope onOpen={handleEnvelopeOpen} />
      )}

      {currentScreen === "home" && (
        <div className="animate-fade-in">
          <Home
            onRevealLetter={() =>
              setCurrentScreen("letter")
            }
          />
        </div>
      )}

      {currentScreen === "letter" && (
        <Letter
          onContinue={() =>
            setCurrentScreen("memories")
          }
        />
      )}

      {currentScreen === "memories" && (
        <Memories
          onContinue={() =>
            setCurrentScreen("os-times")
          }
        />
      )}

      {currentScreen === "os-times" && (
        <OSTimes
          onContinue={() =>
            setCurrentScreen("terms")
          }
        />
      )}

      {currentScreen === "terms" && (
        <RelationshipTerms
          onContinue={() =>
            setCurrentScreen("love")
          }
        />
      )}

      {currentScreen === "love" && (
        <DoYouLoveMe
          onContinue={() =>
            setCurrentScreen("choice")
          }
        />
      )}

      {currentScreen === "choice" && (
        <DoYouHaveAChoice
          onContinue={() =>
            setCurrentScreen("ending")
          }
        />
      )}

      {currentScreen === "ending" && (
        <SweetEnding
          onContinue={() =>
            setCurrentScreen("os-times")
          }
        />
      )}
    </main>
  );
}

export default App;