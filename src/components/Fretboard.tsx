"use client";

import { useState } from "react";
import {
  generateFretboard,
  TOTAL_FRETS,
  FRET_MARKERS,
  DOUBLE_MARKERS,
} from "@/lib/music";
import NoteCell from "./NoteCell";

const STRING_THICKNESS = [1, 1, 1.5, 2, 2.5, 3]; // px, high E to low E

export default function Fretboard() {
  const fretboard = generateFretboard();
  const [revealed, setRevealed] = useState<Set<string>>(new Set());

  function toggleNote(stringIndex: number, fret: number) {
    const key = `${stringIndex}-${fret}`;
    setRevealed((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  }

  return (
    <div className="w-full max-w-7xl mx-auto overflow-x-auto px-4">
      <div className="min-w-[960px]">
        {/* Fret numbers */}
        <div className="grid grid-cols-[48px_repeat(24,minmax(36px,1fr))]">
          {Array.from({ length: TOTAL_FRETS + 1 }, (_, fret) => (
            <div
              key={fret}
              className="flex items-center justify-center py-1 text-xs text-zinc-500"
            >
              {fret === 0 ? "" : fret}
            </div>
          ))}
        </div>

        {/* Strings */}
        <div className="relative rounded-sm border border-zinc-700 bg-amber-950/40">
          {fretboard.map((stringNotes, stringIndex) => (
            <div
              key={stringIndex}
              className="relative grid grid-cols-[48px_repeat(24,minmax(36px,1fr))]"
            >
              {/* String line */}
              <div
                className="pointer-events-none absolute inset-x-0 top-1/2 z-0 bg-zinc-400"
                style={{
                  height: `${STRING_THICKNESS[stringIndex]}px`,
                  transform: "translateY(-50%)",
                }}
              />

              {stringNotes.map((note, fret) => (
                <div
                  key={fret}
                  className={`flex items-center justify-center py-2
                    ${fret === 0 ? "border-r-4 border-zinc-300 bg-zinc-800/60" : "border-r border-zinc-700/60"}`}
                >
                  <NoteCell
                    note={note}
                    fret={fret}
                    revealed={fret === 0 || revealed.has(`${stringIndex}-${fret}`)}
                    onClick={() => fret > 0 && toggleNote(stringIndex, fret)}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Fret markers */}
        <div className="grid grid-cols-[48px_repeat(24,minmax(36px,1fr))]">
          {Array.from({ length: TOTAL_FRETS + 1 }, (_, fret) => (
            <div
              key={fret}
              className="flex items-center justify-center py-2"
            >
              {FRET_MARKERS.includes(fret) && (
                <div className="flex gap-1">
                  <div className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
                  {DOUBLE_MARKERS.includes(fret) && (
                    <div className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
