import Fretboard from "@/components/Fretboard";
import Metronome from "@/components/Metronome";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
      <Fretboard />
      <Metronome />
    </main>
  );
}
