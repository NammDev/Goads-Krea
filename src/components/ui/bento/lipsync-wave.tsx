/** Wave bar heights configuration */
const WAVE_BARS = [
  { totalHeight: "3rem" },
  { totalHeight: "5rem" },
  { totalHeight: "7rem" },
  { totalHeight: "4rem" },
  { totalHeight: "6rem" },
  { totalHeight: "3.1rem" },
];

/** Audio waveform visualization for Lipsync bento card - CSS animated */
export function LipsyncWave() {
  return (
    <div className="flex justify-center px-0 sm:px-4">
      <div
        id="waveContainer"
        className="relative flex h-[5rem] items-center gap-1 sm:h-[7rem] sm:gap-2"
      >
        {WAVE_BARS.map((bar, index) => (
          <div
            key={index}
            className={`wave-bar bar-${index + 1} w-1.5 rounded-full sm:w-2`}
            style={
              {
                "--total-height": bar.totalHeight,
                background: "linear-gradient(180deg, #474747 0%, #000000 100%)",
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
}
