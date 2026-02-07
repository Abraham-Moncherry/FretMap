let audioContext: AudioContext | null = null;

export function getAudioContext(): AudioContext {
  if (!audioContext) {
    audioContext = new AudioContext();
  }
  if (audioContext.state === "suspended") {
    audioContext.resume();
  }
  return audioContext;
}

export function playKick(time: number, accent: boolean) {
  const ctx = getAudioContext();
  const gain = ctx.createGain();
  gain.connect(ctx.destination);

  // Oscillator: sine wave with frequency sweep for the kick body
  const osc = ctx.createOscillator();
  osc.type = "sine";
  osc.frequency.setValueAtTime(accent ? 170 : 150, time);
  osc.frequency.exponentialRampToValueAtTime(40, time + 0.1);
  osc.connect(gain);

  // Gain envelope: sharp attack, quick decay
  const volume = accent ? 1.0 : 0.6;
  gain.gain.setValueAtTime(volume, time);
  gain.gain.exponentialRampToValueAtTime(0.001, time + 0.3);

  osc.start(time);
  osc.stop(time + 0.3);
}
