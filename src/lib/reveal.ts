const DEFAULT_REVEAL_VARIANTS = [
  "animate-fade-up",
  "animate-reveal-scale",
  "animate-reveal-right",
  "animate-reveal-left",
  "animate-reveal-rotate",
] as const;

export const getRevealClass = (
  index: number,
  variants: readonly string[] = DEFAULT_REVEAL_VARIANTS
) => variants[index % variants.length];
