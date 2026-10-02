import { useState } from "react";

import MemoryPhoto from "../components/MemoryPhoto";
import CassettePlayer from "../components/CassettePlayer";

// 7 columns x 6 rows precise pixel heart layout
const memories = [
  // ROW 1: Top Lobe Peaks
  { id: 1, image: "/memories/photo1.jpg", caption: "forever sounds good with you", songName: "Forever sounds good with you", song: "/songs/song1.mp3", gridArea: "1 / 2 / 2 / 3" },
  { id: 2, image: "/memories/photo2.jpg", caption: "mera hero, mera pyaar", songName: "Mera hero, mera pyaar", song: "/songs/song2.mp3", gridArea: "1 / 3 / 2 / 4" },
  
  // ROW 1-2: Right Lobe Big Square (2x2)
  { id: 8, image: "/memories/photo8.jpg", caption: "tum mile, sab mila", songName: "Tum mile, sab mila", song: "/songs/song8.mp3", gridArea: "1 / 5 / 3 / 7" },

  // ROW 2: Outer Left & Center Connector
  { id: 4, image: "/memories/photo4.jpg", caption: "handsome face, zero braincells", songName: "Handsome face, zero braincells", song: "/songs/song4.mp3", gridArea: "2 / 1 / 3 / 2" },
  { id: 6, image: "/memories/photo6.jpg", caption: "tall, stupid, and mine", songName: "Tall, stupid, and mine", song: "/songs/song6.mp3", gridArea: "2 / 4 / 3 / 5" },
  { id: 9, image: "/memories/photo9.jpg", caption: "my favourite wizard", songName: "My favourite wizard", song: "/songs/song9.mp3", gridArea: "2 / 7 / 3 / 8" },

  // ROW 2-3: Left Lobe Big Square (2x2)
  { id: 3, image: "/memories/photo3.jpg", caption: "OS, always and forever", songName: "OS, always and forever", song: "/songs/song3.mp3", gridArea: "2 / 2 / 4 / 4" },

  // ROW 3: Outer Sides & Center Connector
  { id: 5, image: "/memories/photo5.jpg", caption: "worth all the arguments", songName: "Worth all the arguments", song: "/songs/song5.mp3", gridArea: "3 / 1 / 4 / 2" },
  { id: 7, image: "/memories/photo7.jpg", caption: "mera om, meri film", songName: "Mera om, meri film", song: "/songs/song7.mp3", gridArea: "3 / 4 / 4 / 5" },
  { id: 10, image: "/memories/photo10.jpg", caption: "my favourite human ever", songName: "My favourite human ever", song: "/songs/song10.mp3", gridArea: "3 / 7 / 4 / 8" },

  // ROW 3-4: Right Lower Big Square (2x2)
  { id: 11, image: "/memories/photo11.jpg", caption: "my tall little baby", songName: "My tall little baby", song: "/songs/song11.mp3", gridArea: "3 / 5 / 5 / 7" },

  // ROW 4: Lower Left Small Square
  { id: 12, image: "/memories/photo12.jpg", caption: "rab ne milaya humein", songName: "Rab ne milaya humein", song: "/songs/song12.mp3", gridArea: "4 / 2 / 5 / 3" },

  // ROW 4-5: Lower Center Big Square (2x2)
  { id: 13, image: "/memories/photo13.jpg", caption: "senorita, meet my boy", songName: "Senorita, meet my boy", song: "/songs/song13.mp3", gridArea: "4 / 3 / 6 / 5" },

  // ROW 5: Lower Right Small Square
  { id: 14, image: "/memories/photo14.jpg", caption: "friends don't lie, pookie", songName: "Friends don't lie, pookie", song: "/songs/song14.mp3", gridArea: "5 / 5 / 6 / 6" },

  // ROW 6: Bottom Tip
  { id: 15, image: "/memories/photo15.jpg", caption: "just us against Vecna", songName: "Just us against Vecna", song: "/songs/song15.mp3", gridArea: "6 / 4 / 7 / 5" },
];

function Memories({ onContinue }) {
  const [selectedMemory, setSelectedMemory] = useState(null);

  return (
    <main 
      className="min-h-screen w-full p-4 md:p-8 flex items-center justify-center bg-repeat"
      style={{ 
        backgroundImage: "url('/bg2.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "450px auto"
      }}
    >
      {/* RED CONTAINER THAT WRAPS NATURALLY AROUND THE HEART */}
      <section className="relative w-full max-w-[540px] bg-[#7a0c0d] rounded-2xl shadow-2xl p-6 md:p-8 flex flex-col items-center justify-between text-white">
        
        {/* TOP HEADER TEXT */}
        <header className="w-full text-left mb-6">
          <p className="italic text-lg md:text-xl font-medium tracking-wide">
            You're the missing piece of my heart
            (click click click!)
          </p>
        </header>

        {/* PERFECT PIXEL HEART GRID (7x6 WITH SQUARE RATIO LOCK) */}
        <div className="w-full grid grid-cols-7 grid-rows-6 gap-1.5 md:gap-2 my-auto">
          {memories.map((memory) => (
            <div
              key={memory.id}
              style={{ gridArea: memory.gridArea }}
              className="relative w-full h-full aspect-square flex items-center justify-center"
            >
              <MemoryPhoto
                memory={memory}
                onClick={() => setSelectedMemory(memory)}
              />
            </div>
          ))}
        </div>

        {/* BOTTOM FOOTER TEXT & STYLED BUTTON */}
        <footer className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 mt-6">
          <p className="italic text-base md:text-lg font-medium tracking-wide">
            and now I finally feel complete
          </p>

          <button
            type="button"
            onClick={onContinue}
            className="group relative flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-xs md:text-sm font-semibold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shrink-0"
          >
            <span>Click to continue</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1 text-base leading-none">
              →
            </span>
          </button>
        </footer>

      </section>

      {/* MUSIC POPUP */}
      {selectedMemory && (
        <CassettePlayer
          memory={selectedMemory}
          onClose={() => setSelectedMemory(null)}
        />
      )}
    </main>
  );
}

export default Memories;