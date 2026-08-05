// import React from 'react';
// import { Header } from '../organisms/Header';
// import { QuestionSection } from '../organisms/QuestionSection';
// import { ProgressBar } from '../molecules/ProgressBar';
// import { Button } from '../atoms/Button';
// import { Question } from '@/types';
// import { TestAnswers } from '@/types';

// interface TestTemplateProps {
//   questions: Question[];
//   answers: TestAnswers;
//   progress: number;
//   answeredCount: number;
//   totalQuestions: number;
//   onAnswerChange: (questionId: number, checked: boolean) => void;
//   onCalculateScore: () => void;
//   onClearAll: () => void;
//   showCalculateButton: boolean;
// }

// export const TestTemplate: React.FC<TestTemplateProps> = ({
//   questions,
//   answers,
//   progress,
//   answeredCount,
//   totalQuestions,
//   onAnswerChange,
//   onCalculateScore,
//   onClearAll,
//   showCalculateButton,
// }) => {
//   const hasAnswers = answeredCount > 0;

//   return (
//     <div className="min-h-screen bg-white">
//       <Header showProgress progress={progress} current={answeredCount} total={totalQuestions} />
//       <main className="container mx-auto px-4 py-8">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="sr-only">Take the Rice Purity Test Online</h1>
//           <div className="flex items-center justify-between mb-6">
//             <ProgressBar
//               progress={progress}
//               current={answeredCount}
//               total={totalQuestions}
//               className="flex-1"
//             />
//             {hasAnswers && (
//               <Button
//                 variant="outline"
//                 size="md"
//                 onClick={onClearAll}
//                 className="ml-4 whitespace-nowrap"
//               >
//                 Clear All
//               </Button>
//             )}
//           </div>
//           <QuestionSection
//             questions={questions}
//             answers={answers}
//             onAnswerChange={onAnswerChange}
//           />
//           {showCalculateButton && (
//             <div className="fixed bottom-8 right-8 z-40 animate-scale-in">
//               <Button
//                 size="lg"
//                 onClick={onCalculateScore}
//                 className="shadow-2xl hover:scale-105 transition-transform duration-300"
//               >
//                 Calculate My Score
//               </Button>
//             </div>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// };
