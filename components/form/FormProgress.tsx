"use client";

interface FormProgressProps {
  currentStep: number; // 0-indexed
  totalSteps: number;
}

const stepLabels = [
  "Project",
  "One-liner",
  "Tech Stack",
  "Target User",
  "Team",
  "Fear",
  "Style",
];

export function FormProgress({ currentStep, totalSteps }: FormProgressProps) {
  return (
    <div className="w-full mb-8">
      {/* Step counter */}
      <div className="flex items-center justify-between mb-3">
        <span className="font-hand text-lg text-pencil">
          Question{" "}
          <span className="font-comic text-2xl text-ink">{currentStep + 1}</span>{" "}
          of{" "}
          <span className="font-comic text-2xl text-ink">{totalSteps}</span>
        </span>
        <span className="font-hand text-sm text-pencil">
          {Math.round(((currentStep + 1) / totalSteps) * 100)}% done
        </span>
      </div>

      {/* Progress bar — hand-drawn style */}
      <div className="relative h-4 bg-paper-grid rounded-full border-2 border-ink overflow-hidden">
        <div
          className="h-full bg-marker-orange transition-all duration-500 ease-out rounded-full"
          style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
        />
      </div>

      {/* Step dots */}
      <div className="flex items-center justify-between mt-3">
        {stepLabels.map((label, i) => (
          <div key={label} className="flex flex-col items-center gap-1">
            <div
              className={`w-5 h-5 rounded-full border-2 border-ink flex items-center justify-center transition-all duration-300 ${
                i < currentStep
                  ? "bg-marker-green"
                  : i === currentStep
                  ? "bg-marker-yellow scale-125"
                  : "bg-white"
              }`}
            >
              {i < currentStep && (
                <span className="text-white text-xs font-bold">✓</span>
              )}
            </div>
            <span
              className={`font-hand text-xs hidden sm:block transition-colors ${
                i === currentStep ? "text-ink font-bold" : "text-pencil"
              }`}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
