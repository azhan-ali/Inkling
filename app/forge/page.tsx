"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight, Pen, Sparkles } from "lucide-react";

import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { FormProgress } from "@/components/form/FormProgress";
import { StylePicker } from "@/components/form/StylePicker";
import { LoadingOverlay } from "@/components/form/LoadingOverlay";
import { ReviewStep } from "@/components/form/ReviewStep";
import { inputSchema, type InputSchema } from "@/lib/schema";
import type { CommunicationStyle } from "@/types/inkling";

/* ------------------------------------------------------------------ */
/*  Step definitions                                                   */
/* ------------------------------------------------------------------ */

interface StepConfig {
  field: keyof InputSchema | "review";
  title: string;
  subtitle: string;
  placeholder?: string;
  example?: string;
  type: "text" | "textarea" | "style" | "review";
  emoji: string;
  cardBg: string;
}

const STEPS: StepConfig[] = [
  {
    field: "projectName",
    title: "What's your project called?",
    subtitle: "The name that will anchor your entire narrative identity.",
    placeholder: "e.g. PayLayer, AnchorKit, SolanaFreelance...",
    example: "Keep it short and memorable.",
    type: "text",
    emoji: "🏷️",
    cardBg: "bg-card-yellow",
  },
  {
    field: "oneLiner",
    title: "What does it do in one line?",
    subtitle: "The core of your archetype assignment and origin story.",
    placeholder: "e.g. Instant cross-border payments for UAE freelancers on Solana",
    example: "Be specific. 'DeFi tool' is too vague. 'Freelancer payments for UAE workers' is perfect.",
    type: "textarea",
    emoji: "💬",
    cardBg: "bg-card-pink",
  },
  {
    field: "techStack",
    title: "What's your tech stack?",
    subtitle: "Powers technical credibility in your Builder-voice content.",
    placeholder: "e.g. Anchor, Token-2022, PUSD, Next.js, Rust...",
    example: "List the key technologies. Solana-specific ones matter most.",
    type: "textarea",
    emoji: "⚙️",
    cardBg: "bg-card-blue",
  },
  {
    field: "targetUser",
    title: "Who suffers without your product?",
    subtitle: "Drives the pain narrative in your threads and replies.",
    placeholder: "e.g. UAE-based freelancers who wait 3–14 days for international payments",
    example: "Be specific about who, where, and what pain they feel.",
    type: "textarea",
    emoji: "🎯",
    cardBg: "bg-card-green",
  },
  {
    field: "teamBackground",
    title: "Tell us about your team.",
    subtitle: "Determines Underdog vs Pioneer archetype weight.",
    placeholder: "e.g. 2-person team. One ex-fintech engineer from Dubai, one Anchor developer. Bootstrapped.",
    example: "Team size, backgrounds, and whether you're bootstrapped or funded.",
    type: "textarea",
    emoji: "👥",
    cardBg: "bg-card-purple",
  },
  {
    field: "biggestFear",
    title: "What's your biggest fear about being ignored?",
    subtitle: "This emotional unlock powers your most resonant content.",
    placeholder: "e.g. We ship and nobody notices because we don't know how to talk about it",
    example: "Be honest. The more specific, the better the output.",
    type: "textarea",
    emoji: "😰",
    cardBg: "bg-card-orange",
  },
  {
    field: "communicationStyle",
    title: "What's your natural communication style?",
    subtitle: "Selects which origin story version to lead with and tunes all output.",
    type: "style",
    emoji: "🎭",
    cardBg: "bg-card-mint",
  },
  {
    field: "review",
    title: "Review your answers",
    subtitle: "Everything look good? Hit Forge to generate your strategy.",
    type: "review",
    emoji: "✅",
    cardBg: "bg-card-yellow",
  },
];

const TOTAL_FORM_STEPS = 7; // steps 0-6 are form fields, step 7 is review

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */

export default function ForgePage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<InputSchema>({
    resolver: zodResolver(inputSchema),
    mode: "onTouched",
    defaultValues: {
      projectName: "",
      oneLiner: "",
      techStack: "",
      targetUser: "",
      teamBackground: "",
      biggestFear: "",
      communicationStyle: undefined,
    },
  });

  const step = STEPS[currentStep];
  const isReviewStep = currentStep === STEPS.length - 1;

  /* ---- Navigation ---- */
  const goNext = useCallback(async () => {
    if (isReviewStep) return;

    const field = step.field as keyof InputSchema;
    const valid = await trigger(field);
    if (!valid) return;

    setCurrentStep((s) => s + 1);
    setApiError(null);
  }, [isReviewStep, step.field, trigger]);

  const goBack = useCallback(() => {
    if (currentStep === 0) return;
    setCurrentStep((s) => s - 1);
    setApiError(null);
  }, [currentStep]);

  const goToStep = useCallback((s: number) => {
    setCurrentStep(s);
    setApiError(null);
  }, []);

  /* ---- Submit ---- */
  const onSubmit = useCallback(
    async (data: InputSchema) => {
      setIsLoading(true);
      setApiError(null);

      try {
        const res = await fetch("/api/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        const json = await res.json();

        if (!res.ok) {
          throw new Error(
            json.error ?? `Server error ${res.status}. Please try again.`
          );
        }

        if (json.id) {
          router.push(`/result/${json.id}`);
        } else if (json.output) {
          // DB fallback — store inline and redirect
          sessionStorage.setItem("inkling_output", JSON.stringify(json.output));
          router.push(`/result/preview`);
        } else {
          throw new Error("Unexpected response from server.");
        }
      } catch (err) {
        setApiError(
          err instanceof Error ? err.message : "Something went wrong. Please try again."
        );
        setIsLoading(false);
      }
    },
    [router]
  );

  /* ---- Key handler (Enter to advance) ---- */
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && step.type !== "textarea" && !isReviewStep) {
        e.preventDefault();
        goNext();
      }
    },
    [step.type, isReviewStep, goNext]
  );

  /* ---------------------------------------------------------------- */
  /*  Render                                                           */
  /* ---------------------------------------------------------------- */

  return (
    <>
      {isLoading && <LoadingOverlay />}
      <Header />

      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-10">
        {/* Page title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 sketch-badge bg-card-yellow mb-4">
            <Pen className="w-4 h-4 text-marker-orange" />
            <span className="font-hand text-base">Forge Your Narrative</span>
          </div>
          <h1 className="font-comic text-4xl sm:text-5xl text-ink">
            7 Questions.{" "}
            <span className="highlight">One War Room.</span>
          </h1>
          <p className="font-body text-base text-pencil mt-2">
            Takes about 3 minutes. Every answer sharpens your strategy.
          </p>
        </div>

        {/* Progress */}
        <FormProgress
          currentStep={Math.min(currentStep, TOTAL_FORM_STEPS - 1)}
          totalSteps={TOTAL_FORM_STEPS}
        />

        {/* Step card */}
        <form onSubmit={handleSubmit(onSubmit)} onKeyDown={handleKeyDown}>
          <div
            className={`sketch-card ${step.cardBg} p-6 sm:p-8 mb-6 fade-up`}
            key={currentStep}
          >
            {/* Step header */}
            <div className="flex items-start gap-3 mb-5">
              <span className="text-4xl">{step.emoji}</span>
              <div>
                <h2 className="font-comic text-2xl sm:text-3xl text-ink leading-tight">
                  {step.title}
                </h2>
                <p className="font-body text-sm text-pencil mt-1">
                  {step.subtitle}
                </p>
              </div>
            </div>

            {/* ---- Text input ---- */}
            {step.type === "text" && (
              <div>
                <input
                  {...register(step.field as keyof InputSchema)}
                  type="text"
                  placeholder={step.placeholder}
                  autoFocus
                  className="w-full font-body text-base text-ink bg-white border-2 border-ink rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-marker-orange focus:border-marker-orange transition placeholder:text-pencil/50"
                />
                {errors[step.field as keyof InputSchema] && (
                  <p className="font-hand text-sm text-marker-pink mt-2">
                    ⚠ {errors[step.field as keyof InputSchema]?.message}
                  </p>
                )}
                {step.example && (
                  <p className="font-hand text-xs text-pencil mt-2 italic">
                    💡 {step.example}
                  </p>
                )}
              </div>
            )}

            {/* ---- Textarea ---- */}
            {step.type === "textarea" && (
              <div>
                <textarea
                  {...register(step.field as keyof InputSchema)}
                  placeholder={step.placeholder}
                  autoFocus
                  rows={4}
                  className="w-full font-body text-base text-ink bg-white border-2 border-ink rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-marker-orange focus:border-marker-orange transition placeholder:text-pencil/50 resize-none"
                />
                {errors[step.field as keyof InputSchema] && (
                  <p className="font-hand text-sm text-marker-pink mt-2">
                    ⚠ {errors[step.field as keyof InputSchema]?.message}
                  </p>
                )}
                {step.example && (
                  <p className="font-hand text-xs text-pencil mt-2 italic">
                    💡 {step.example}
                  </p>
                )}
              </div>
            )}

            {/* ---- Style picker ---- */}
            {step.type === "style" && (
              <StylePicker
                value={(watch("communicationStyle") as CommunicationStyle) ?? ""}
                onChange={(val) =>
                  setValue("communicationStyle", val, { shouldValidate: true })
                }
                error={errors.communicationStyle?.message}
              />
            )}

            {/* ---- Review ---- */}
            {step.type === "review" && (
              <ReviewStep data={getValues()} onEdit={goToStep} />
            )}
          </div>

          {/* API error */}
          {apiError && (
            <div className="sketch-card bg-card-pink p-4 mb-4 text-center">
              <p className="font-hand text-sm text-marker-pink">⚠ {apiError}</p>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={goBack}
              disabled={currentStep === 0}
              className={`btn-sketch btn-ghost-sketch text-base py-2.5 px-6 ${
                currentStep === 0 ? "opacity-40 cursor-not-allowed" : ""
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>

            {isReviewStep ? (
              <button
                type="submit"
                className="btn-sketch btn-primary-sketch text-xl py-3 px-8 flex-1 sm:flex-none justify-center"
              >
                <Sparkles className="w-5 h-5" />
                Forge My Strategy →
              </button>
            ) : (
              <button
                type="button"
                onClick={goNext}
                className="btn-sketch btn-secondary-sketch text-xl py-3 px-8 flex-1 sm:flex-none justify-center"
              >
                Next
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Keyboard hint */}
          {step.type === "text" && (
            <p className="font-hand text-xs text-pencil text-center mt-3">
              Press Enter to continue
            </p>
          )}
        </form>
      </main>

      <Footer />
    </>
  );
}
