import type { NoteName } from "@/lib/music";

interface NoteCellProps {
  note: NoteName;
  fret: number;
  revealed: boolean;
  onClick: () => void;
}

export default function NoteCell({ note, fret, revealed, onClick }: NoteCellProps) {
  const isOpen = fret === 0;
  const isSharp = note.includes("#");

  return (
    <button
      onClick={onClick}
      className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold cursor-pointer transition-colors
        ${revealed
          ? isOpen
            ? "bg-amber-600 text-white"
            : isSharp
              ? "bg-zinc-600 text-zinc-200"
              : "bg-zinc-700 text-zinc-100"
          : "hover:bg-zinc-700/50"
        }`}
    >
      {revealed ? note : ""}
    </button>
  );
}
