export interface Question {
  id: number;
  text: string;
}

export interface TestAnswers {
  [questionId: number]: boolean;
}

export interface ScoreInterpretation {
  range: string;
  title: string;
  description: string;
  colorClass: string;
  bgClass: string;
}
