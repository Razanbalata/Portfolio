"use client";

import React, { useState, useRef, useEffect } from "react";
import { Music, Volume2, Play, Pause, Activity } from "lucide-react";

interface Track {
  id: string;
  title: string;
  src: string;
}

const TRACKS: Track[] = [
  { id: "idea22", title: "Idea 22 (Slowed)", src: "/audio/idea-22.mp3" },
  { id: "isabella", title: "Isabella’s Lullaby", src: "/audio/isabella.mp3" },
  { id: "jazz", title: "Jazz Vibes", src: "/audio/jazz-vibes.mp3" },
];

export default function MusicPlayerButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<Track>(TRACKS[2]); // Jazz Vibes كمثال افتراضي مطابق للصورة
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.29); // 29% مطابق للصورة
  const [progress, setProgress] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  const selectTrack = (track: Track) => {
    if (currentTrack.id === track.id) {
      togglePlay();
      return;
    }

    setCurrentTrack(track);
    setIsPlaying(true);

    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {});
      }
    }, 50);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current && audioRef.current.duration) {
      const currentProgress =
        (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  return (
    <div className="relative">
      <audio
        ref={audioRef}
        src={currentTrack.src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        preload="metadata"
      />

      {/* زر الأيقونة في السايدبار مع تغير الأيقونة إلى موجات عند التشغيل */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-300 cursor-pointer shadow-lg backdrop-blur-md ${
          isOpen || isPlaying
            ? "border-[var(--color-primary)] text-[var(--color-primary)] bg-[var(--color-primary)]/15 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
            : "border-border/50 text-[var(--color-subtext)] hover:text-[var(--color-text)] hover:border-[var(--color-primary)]/60 bg-background/80 hover:bg-background"
        }`}
        title="Music Player"
        aria-label="Music Player"
      >
        {isPlaying ? (
          <Activity className="w-5 h-5 text-[var(--color-primary)] animate-pulse" />
        ) : (
          <Music className="w-5 h-5" />
        )}
      </button>

      {/* الكرت المنبثق المطابق للصورة */}
      {isOpen && (
        <div className="absolute right-14 top-0 w-80 bg-[var(--color-secondary)]/95 backdrop-blur-2xl border border-[var(--color-accent)]/50 rounded-3xl p-5 shadow-2xl z-50 animate-in fade-in slide-in-from-right-2">
          {/* Header */}
          <div className="flex items-center gap-2 mb-4">
            <Music className="w-5 h-5 text-[var(--color-primary)]" />
            <h3 className="font-bold text-base text-[var(--color-text)] tracking-tight">
              Music Player
            </h3>
          </div>

          {/* Volume Control Bar */}
          <div className="flex items-center gap-3 mb-4 p-3 rounded-2xl bg-[var(--color-bg)]/60 border border-[var(--color-accent)]/30">
            <Volume2 className="w-4 h-4 text-[var(--color-subtext)] shrink-0" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="flex-1 h-1.5 bg-[var(--color-accent)]/40 rounded-full appearance-none cursor-pointer accent-[var(--color-primary)]"
            />
            <span className="text-xs font-mono font-medium text-[var(--color-subtext)] w-8 text-right">
              {Math.round(volume * 100)}%
            </span>
          </div>

          {/* Currently Playing Card */}
          <div className="mb-4 p-4 rounded-2xl bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/30">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/20 flex items-center justify-center shrink-0 text-[var(--color-primary)]">
                <Activity className="w-5 h-5 animate-pulse" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm text-[var(--color-text)] truncate">
                  {currentTrack.title}
                </h4>
                <p className="text-xs text-[var(--color-subtext)]">
                  {isPlaying ? "Now Playing" : "Paused"}
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1 bg-[var(--color-accent)]/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-[var(--color-primary)] transition-all duration-200"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Track List */}
          <div className="space-y-2">
            {TRACKS.map((track) => {
              const isSelected = currentTrack.id === track.id;
              return (
                <button
                  key={track.id}
                  onClick={() => selectTrack(track)}
                  className={`w-full flex items-center gap-3 p-3 rounded-2xl transition-all duration-200 text-left cursor-pointer border ${
                    isSelected
                      ? "bg-[var(--color-primary)]/15 border-[var(--color-primary)]/40 text-[var(--color-primary)]"
                      : "bg-transparent border-transparent hover:bg-[var(--color-bg)]/40 text-[var(--color-text)]"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? "bg-[var(--color-primary)]/20 text-[var(--color-primary)]"
                        : "bg-[var(--color-bg)] text-[var(--color-subtext)]"
                    }`}
                  >
                    {isSelected && isPlaying ? (
                      <Pause className="w-4 h-4 fill-current" />
                    ) : (
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    )}
                  </div>

                  <span
                    className={`text-xs sm:text-sm font-medium truncate ${isSelected ? "font-bold" : ""}`}
                  >
                    {track.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
