"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { getAudioContext, playKick } from "@/lib/audio";

const LOOKAHEAD = 0.1; // seconds ahead to schedule
const INTERVAL = 25; // ms between scheduler ticks

export default function Metronome() {
  const [bpm, setBpm] = useState(120);
  const [playing, setPlaying] = useState(false);
  const [currentBeat, setCurrentBeat] = useState(-1);

  const nextBeatTimeRef = useRef(0);
  const beatIndexRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const schedule = useCallback(() => {
    const ctx = getAudioContext();
    const secondsPerBeat = 60 / bpm;

    while (nextBeatTimeRef.current < ctx.currentTime + LOOKAHEAD) {
      const beatTime = nextBeatTimeRef.current;
      const beat = beatIndexRef.current;
      const accent = beat === 0;

      playKick(beatTime, accent);

      // Sync visual indicator to when the beat actually plays
      const delay = (beatTime - ctx.currentTime) * 1000;
      setTimeout(() => setCurrentBeat(beat), Math.max(0, delay));

      beatIndexRef.current = (beat + 1) % 4;
      nextBeatTimeRef.current += secondsPerBeat;
    }
  }, [bpm]);

  const start = useCallback(() => {
    const ctx = getAudioContext();
    nextBeatTimeRef.current = ctx.currentTime;
    beatIndexRef.current = 0;
    setPlaying(true);
  }, []);

  const stop = useCallback(() => {
    setPlaying(false);
    setCurrentBeat(-1);
    beatIndexRef.current = 0;
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (playing) {
      timerRef.current = setInterval(schedule, INTERVAL);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [playing, schedule]);

  return (
    <div className="flex flex-col items-center gap-4 mt-8 p-6 rounded-lg bg-zinc-900 border border-zinc-700">
      {/* Beat indicator */}
      <div className="flex gap-3">
        {[0, 1, 2, 3].map((beat) => (
          <div
            key={beat}
            className={`h-5 w-5 rounded-full border-2 transition-colors
              ${currentBeat === beat
                ? beat === 0
                  ? "bg-amber-500 border-amber-400"
                  : "bg-zinc-300 border-zinc-200"
                : "bg-zinc-800 border-zinc-600"
              }`}
          />
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4">
        <button
          onClick={playing ? stop : start}
          className="px-5 py-2 rounded-md font-semibold text-sm cursor-pointer transition-colors bg-amber-600 hover:bg-amber-500 text-white"
        >
          {playing ? "Stop" : "Play"}
        </button>

        <button
          onClick={() => setBpm((b) => Math.max(40, b - 5))}
          className="w-8 h-8 rounded-md bg-zinc-700 hover:bg-zinc-600 text-zinc-200 font-bold cursor-pointer"
        >
          -
        </button>

        <span className="w-20 text-center font-mono text-lg">{bpm} BPM</span>

        <button
          onClick={() => setBpm((b) => Math.min(240, b + 5))}
          className="w-8 h-8 rounded-md bg-zinc-700 hover:bg-zinc-600 text-zinc-200 font-bold cursor-pointer"
        >
          +
        </button>
      </div>
    </div>
  );
}
