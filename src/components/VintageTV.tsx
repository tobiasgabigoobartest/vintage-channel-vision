import { useState } from "react";
import { Power, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

const channels = [
  { 
    id: 1, 
    name: "🎮 RETRO ARCADE", 
    gradient: "from-pink-500 via-purple-500 to-cyan-500",
    pattern: "repeating-radial-gradient(circle at 50% 50%, transparent 0, rgba(255,0,255,0.3) 10px, transparent 20px)"
  },
  { 
    id: 2, 
    name: "🌈 NEON DREAMS", 
    gradient: "from-yellow-400 via-red-500 to-pink-500",
    pattern: "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)"
  },
  { 
    id: 3, 
    name: "✨ COSMIC WAVES", 
    gradient: "from-cyan-400 via-blue-500 to-purple-600",
    pattern: "repeating-conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.2) 15deg, transparent 30deg)"
  },
  { 
    id: 4, 
    name: "🔥 PIXEL PARTY", 
    gradient: "from-orange-500 via-red-500 to-pink-600",
    pattern: "repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(0,0,0,0.2) 10px, rgba(0,0,0,0.2) 20px), repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(0,0,0,0.2) 10px, rgba(0,0,0,0.2) 20px)"
  },
  { 
    id: 5, 
    name: "🎬 MOVIE NIGHT", 
    gradient: "from-slate-900 via-slate-800 to-slate-900",
    pattern: "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.8) 100%)",
    isMovie: true
  },
];

export const VintageTV = () => {
  const [isPoweredOn, setIsPoweredOn] = useState(true);
  const [currentChannel, setCurrentChannel] = useState(0);
  const [volume, setVolume] = useState(50);
  const [isMuted, setIsMuted] = useState(false);

  const handleChannelChange = () => {
    setCurrentChannel((prev) => (prev + 1) % channels.length);
  };

  const handleVolumeChange = (delta: number) => {
    setVolume((prev) => Math.max(0, Math.min(100, prev + delta)));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto p-8">
      {/* TV Body */}
      <div className="relative bg-gradient-to-br from-tv-wood-dark via-tv-wood-grain to-tv-wood-light rounded-3xl shadow-2xl p-8 border-4 border-tv-wood-dark">
        {/* Wood grain texture overlay */}
        <div className="absolute inset-0 rounded-3xl opacity-30 bg-[repeating-linear-gradient(90deg,transparent,transparent_2px,hsl(var(--tv-wood-grain))_2px,hsl(var(--tv-wood-grain))_4px)]" />
        
        {/* Brand plate */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-tv-button to-tv-dial px-6 py-2 rounded-lg shadow-2xl border-2 border-tv-screen-glow/50 animate-pulse">
          <p className="text-white font-bold text-lg tracking-widest drop-shadow-lg">✨ FUNKY-VISION ✨</p>
        </div>

        {/* Screen Container */}
        <div className="relative bg-tv-screen-bg rounded-2xl p-6 shadow-inner mt-8">
          {/* Screen bezel */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-tv-metal/50 to-transparent pointer-events-none" />
          
          {/* Screen */}
          <div className="relative aspect-[4/3] bg-tv-screen-bg rounded-lg overflow-hidden border-4 border-black/50">
            {isPoweredOn ? (
              <>
                {/* Screen content */}
                <div className={`absolute inset-0 bg-gradient-to-br ${channels[currentChannel].gradient} ${channels[currentChannel].isMovie ? '' : 'animate-pulse'}`}>
                  <div 
                    className="absolute inset-0 opacity-30"
                    style={{ backgroundImage: channels[currentChannel].pattern }}
                  />
                  {channels[currentChannel].isMovie ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white">
                      <div className="text-center space-y-8 max-w-2xl">
                        <h1 className="text-5xl font-bold tracking-wider">THE RETRO CHRONICLES</h1>
                        <p className="text-2xl italic opacity-90">"In a world of pixels and dreams..."</p>
                        <div className="space-y-4 text-lg text-left bg-black/40 p-6 rounded">
                          <p>🎭 A mysterious developer discovers</p>
                          <p>⚡ A magical vintage television</p>
                          <p>🌟 That brings code to life</p>
                        </div>
                        <p className="text-3xl font-bold animate-pulse">▶ NOW PLAYING</p>
                      </div>
                      {/* Film grain effect */}
                      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii45Ii8+PGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAuNSAwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2EpIi8+PC9zdmc+')] animate-static-noise" />
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center animate-bounce">
                        <h2 className="text-white text-6xl font-bold mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] animate-pulse">
                          {channels[currentChannel].name}
                        </h2>
                        <p className="text-white/90 text-3xl font-bold drop-shadow-lg">
                          Channel {channels[currentChannel].id}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Scanlines */}
                <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.3)_2px,rgba(0,0,0,0.3)_4px)]" />
                
                {/* Animated scanline */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="w-full h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent animate-scanline" />
                </div>

                {/* Vignette */}
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,transparent_0%,rgba(0,0,0,0.7)_100%)]" />
                
                {/* Screen curvature simulation */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/5 via-transparent to-black/20 rounded-lg" />

                {/* Flicker effect */}
                <div className="absolute inset-0 pointer-events-none bg-tv-screen-glow/5 animate-flicker" />
              </>
            ) : (
              <div className="absolute inset-0 bg-tv-screen-bg" />
            )}
          </div>
        </div>

        {/* Control Panel */}
        <div className="mt-8 flex items-center justify-between px-4">
          {/* Left Controls */}
          <div className="flex items-center gap-6">
            {/* Power Button */}
            <Button
              onClick={() => setIsPoweredOn(!isPoweredOn)}
              className={`w-16 h-16 rounded-full ${
                isPoweredOn
                  ? "bg-tv-button shadow-[0_0_10px_hsl(var(--tv-button))]"
                  : "bg-tv-metal"
              } hover:scale-105 transition-transform`}
            >
              <Power className="w-6 h-6 text-foreground" />
            </Button>

            {/* Volume Control */}
            <div className="flex flex-col items-center gap-2">
              <p className="text-xs text-foreground/60 uppercase tracking-wider">Volume</p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="w-10 h-10 rounded-full bg-tv-dial flex items-center justify-center hover:scale-105 transition-transform"
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4 text-foreground" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-foreground" />
                  )}
                </button>
                <div
                  className="relative w-24 h-24 rounded-full bg-tv-dial shadow-lg cursor-pointer group"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const y = e.clientY - rect.top - rect.height / 2;
                    handleVolumeChange(y > 0 ? -10 : 10);
                  }}
                >
                  <div className="absolute inset-2 rounded-full bg-gradient-to-br from-tv-wood-light/30 to-tv-wood-dark/30" />
                  <div
                    className="absolute top-1/2 left-1/2 w-1 h-8 bg-foreground/80 rounded-full origin-bottom transition-transform"
                    style={{
                      transform: `translate(-50%, -100%) rotate(${(volume - 50) * 1.8}deg)`,
                    }}
                  />
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-foreground/60">
                    {isMuted ? "MUTE" : volume}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Speakers */}
          <div className="flex gap-2">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-12 bg-tv-metal/50 rounded-full"
                style={{ height: `${Math.random() * 32 + 16}px` }}
              />
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs text-foreground/60 uppercase tracking-wider">Channel</p>
            <div
              className="relative w-24 h-24 rounded-full bg-tv-dial shadow-lg cursor-pointer group hover:scale-105 transition-transform"
              onClick={handleChannelChange}
            >
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-tv-wood-light/30 to-tv-wood-dark/30" />
              <div
                className="absolute top-1/2 left-1/2 w-1 h-8 bg-foreground/80 rounded-full origin-bottom transition-transform duration-300"
                style={{
                  transform: `translate(-50%, -100%) rotate(${currentChannel * 120}deg)`,
                }}
              />
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-foreground/60">
                {channels[currentChannel].id}
              </div>
            </div>
          </div>
        </div>

        {/* Antenna */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-2 h-32 bg-tv-metal rounded-full shadow-lg">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-tv-metal rounded-full origin-left rotate-[-35deg]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-tv-metal rounded-full origin-right rotate-[35deg]" />
        </div>

        {/* Feet */}
        <div className="absolute -bottom-2 left-16 w-20 h-4 bg-tv-wood-dark rounded-b-lg shadow-lg" />
        <div className="absolute -bottom-2 right-16 w-20 h-4 bg-tv-wood-dark rounded-b-lg shadow-lg" />
      </div>
    </div>
  );
};
