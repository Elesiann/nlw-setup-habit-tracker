interface ProgressBarProps {
  progress: number;
}

export function ProgressBar(props: ProgressBarProps) {
  const { progress } = props;
  return (
    <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
      <div
        role="progressbar"
        aria-label="Progress of habits completed today"
        aria-valuenow={progress}
        className="h-3 rounded-xl bg-gradient-to-l from-blue-400 to-blue-700 transition-all"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}
