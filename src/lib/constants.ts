export const TOTAL_QUESTIONS = 100;

export const STORAGE_KEYS = {
  ANSWERS: 'rice-purity-answers',
  SCORE: 'rice-purity-score',
} as const;

export const SCORE_RANGES = {
  PERFECT: { min: 100, max: 100 },
  EXTREMELY_PURE: { min: 98, max: 99 },
  VERY_PURE: { min: 94, max: 97 },
  RELATIVELY_PURE: { min: 90, max: 93 },
  MODERATELY_PURE: { min: 87, max: 89 },
  FAIRLY_PURE: { min: 84, max: 86 },
  SOMEWHAT_PURE: { min: 80, max: 83 },
  LIGHTLY_TARNISHED: { min: 77, max: 79 },
  MODERATELY_EXPERIENCED: { min: 70, max: 76 },
  EXPERIENCED: { min: 60, max: 69 },
  VERY_EXPERIENCED: { min: 50, max: 59 },
  HIGHLY_EXPERIENCED: { min: 40, max: 49 },
  EXTREMELY_EXPERIENCED: { min: 30, max: 39 },
  EXCEPTIONALLY_EXPERIENCED: { min: 20, max: 29 },
  NEARLY_EVERYTHING: { min: 10, max: 19 },
  DONE_IT_ALL: { min: 1, max: 9 },
  ULTIMATE_EXPERIENCE: { min: 0, max: 0 },
} as const;
