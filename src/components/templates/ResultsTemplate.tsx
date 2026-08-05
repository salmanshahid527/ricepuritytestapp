// import React from 'react';
// import { Header } from '../organisms/Header';
// import { ScoreCard } from '../organisms/ScoreCard';
// import { SharePanel } from '../organisms/SharePanel';
// import { Button } from '../atoms/Button';
// import Link from 'next/link';
// import { Footer } from '../organisms/Footer';

// interface ResultsTemplateProps {
//   score: number;
//   displayScore: number;
//   interpretation: {
//     title: string;
//     description: string;
//     colorClass: string;
//     bgClass: string;
//   };
//   onRetakeTest: () => void;
// }

// export const ResultsTemplate: React.FC<ResultsTemplateProps> = ({
//   score,
//   displayScore,
//   interpretation,
//   onRetakeTest,
// }) => {
//   return (
//     <div className="min-h-screen bg-white">
//       <Header />
//       <main className="container mx-auto px-4 py-12">
//         <div className="max-w-4xl mx-auto space-y-8">
//           <h1 className="sr-only">Rice Purity Test Results</h1>
//           <ScoreCard
//             score={score}
//             displayScore={displayScore}
//             interpretation={interpretation}
//           />
//           <SharePanel score={score} />
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button size="lg" onClick={onRetakeTest}>
//               Retake Test
//             </Button>
//             <Link href="/">
//               <Button size="lg" variant="secondary">
//                 Back to Home
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// };
