export const NOTES = [
  "C", "C#", "D", "D#", "E", "F",
  "F#", "G", "G#", "A", "A#", "B",
] as const;

export type NoteName = (typeof NOTES)[number];

// Standard tuning, ordered top-to-bottom visually (high E first)
export const STANDARD_TUNING: NoteName[] = ["E", "B", "G", "D", "A", "E"];

export const TOTAL_FRETS = 24;

export const FRET_MARKERS = [3, 5, 7, 9, 12, 15, 17, 19, 21, 24];
export const DOUBLE_MARKERS = [12, 24];

export function getNoteAtFret(openNote: NoteName, fret: number): NoteName {
  const openIndex = NOTES.indexOf(openNote);
  return NOTES[(openIndex + fret) % 12];
}

export function generateFretboard(
  tuning: NoteName[] = STANDARD_TUNING
): NoteName[][] {
  return tuning.map((openNote) =>
    Array.from({ length: TOTAL_FRETS + 1 }, (_, fret) =>
      getNoteAtFret(openNote, fret)
    )
  );
}
