import React from 'react';
import { QuestionItem } from '../molecules/QuestionItem';
import { Question } from '@/types';
import { TestAnswers } from '@/types';

interface QuestionListProps {
  questions: Question[];
  answers: TestAnswers;
  onAnswerChange: (questionId: number, checked: boolean) => void;
}

export const QuestionList: React.FC<QuestionListProps> = ({
  questions,
  answers,
  onAnswerChange,
}) => {
  return (
    <div className="space-y-4">
      {questions.map((question) => (
        <div
          key={question.id}
          className="animate-fade-in"
        >
          <QuestionItem
            id={question.id}
            text={question.text}
            checked={answers[question.id] || false}
            onChange={(checked) => onAnswerChange(question.id, checked)}
          />
        </div>
      ))}
    </div>
  );
};
