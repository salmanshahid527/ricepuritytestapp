import React from 'react';
import { QuestionList } from './QuestionList';
import { Question } from '@/types';
import { TestAnswers } from '@/types';

interface QuestionSectionProps {
  questions: Question[];
  answers: TestAnswers;
  onAnswerChange: (questionId: number, checked: boolean) => void;
}

export const QuestionSection: React.FC<QuestionSectionProps> = ({
  questions,
  answers,
  onAnswerChange,
}) => {
  return (
    <section className="w-full">
      <QuestionList
        questions={questions}
        answers={answers}
        onAnswerChange={onAnswerChange}
      />
    </section>
  );
};
