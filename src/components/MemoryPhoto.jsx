function MemoryPhoto({ memory, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative w-full h-full cursor-pointer border-0 bg-transparent p-0 outline-none block"
    >
      <div className="relative w-full h-full bg-[#fcf8ef] p-1 rounded-[2px] shadow-md transition-all duration-300 group-hover:z-50 group-hover:scale-105 group-hover:shadow-xl">
        {/* IMAGE CONTAINER */}
        <div className="relative w-full h-full overflow-hidden rounded-[1px] bg-black/10">
          <img
            src={memory.image}
            alt={memory.caption}
            draggable="false"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* COOL AESTHETIC PLAY BUTTON OVERLAY */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[0.3px] opacity-0 transition-all duration-300 group-hover:opacity-100">
            {/* Glowing outer ring */}
            <div className="relative flex items-center justify-center w-4 h-4 md:w-10 md:h-10 rounded-full bg-white/20 border border-white/40 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-transform duration-300 group-hover:scale-90">
              
              {/* Vinyl-style subtle inner ring */}
              <div className="absolute inset-[3px] rounded-full border border-white/30" />
              
              {/* Play Triangle Icon */}
              <svg 
                className="w-2.2 h-2.2 md:w-3 md:h-3 text-white ml-0.5 fill-current drop-shadow-md transition-transform duration-300 group-hover:scale-110" 
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

export default MemoryPhoto;