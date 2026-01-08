import { TestAnswers } from '@/types';
import { TOTAL_QUESTIONS, STORAGE_KEYS } from './constants';

export function calculateScore(answers: TestAnswers): number {
  const checkedCount = Object.values(answers).filter(Boolean).length;
  return TOTAL_QUESTIONS - checkedCount;
}

export function getScoreInterpretation(score: number): {
  range: string;
  title: string;
  description: string;
  colorClass: string;
  bgClass: string;
} {
  if (score >= 100) {
    return {
      range: '100',
      title: 'Perfect Score',
      description: "You're as pure as they come! You haven't experienced any of the things on this test.",
      colorClass: 'text-emerald-400',
      bgClass: 'bg-emerald-500/20',
    };
  }
  if (score >= 98) {
    return {
      range: '98-99',
      title: 'Extremely Pure',
      description: "You've had very few experiences on this list.",
      colorClass: 'text-emerald-400',
      bgClass: 'bg-emerald-500/20',
    };
  }
  if (score >= 94) {
    return {
      range: '94-97',
      title: 'Very Pure',
      description: "You're quite innocent with minimal life experiences from the test.",
      colorClass: 'text-emerald-400',
      bgClass: 'bg-emerald-500/20',
    };
  }
  if (score >= 90) {
    return {
      range: '90-93',
      title: 'Relatively Pure',
      description: "You've had some experiences but remain largely innocent.",
      colorClass: 'text-blue-400',
      bgClass: 'bg-blue-500/20',
    };
  }
  if (score >= 87) {
    return {
      range: '87-89',
      title: 'Moderately Pure',
      description: "You're still on the innocent side with select experiences.",
      colorClass: 'text-blue-400',
      bgClass: 'bg-blue-500/20',
    };
  }
  if (score >= 84) {
    return {
      range: '84-86',
      title: 'Fairly Pure',
      description: "You've had a fair number of life experiences.",
      colorClass: 'text-blue-400',
      bgClass: 'bg-blue-500/20',
    };
  }
  if (score >= 80) {
    return {
      range: '80-83',
      title: 'Somewhat Pure',
      description: "You've experienced quite a bit on this list.",
      colorClass: 'text-yellow-400',
      bgClass: 'bg-yellow-500/20',
    };
  }
  if (score >= 77) {
    return {
      range: '77-79',
      title: 'Lightly Tarnished',
      description: "You've had a good amount of experiences.",
      colorClass: 'text-yellow-400',
      bgClass: 'bg-yellow-500/20',
    };
  }
  if (score >= 70) {
    return {
      range: '70-76',
      title: 'Moderately Experienced',
      description: "You're in the middle range with diverse experiences.",
      colorClass: 'text-yellow-400',
      bgClass: 'bg-yellow-500/20',
    };
  }
  if (score >= 60) {
    return {
      range: '60-69',
      title: 'Experienced',
      description: "You've had many of the experiences on this test.",
      colorClass: 'text-orange-400',
      bgClass: 'bg-orange-500/20',
    };
  }
  if (score >= 50) {
    return {
      range: '50-59',
      title: 'Very Experienced',
      description: "You've done more than half of the things listed.",
      colorClass: 'text-orange-400',
      bgClass: 'bg-orange-500/20',
    };
  }
  if (score >= 40) {
    return {
      range: '40-49',
      title: 'Highly Experienced',
      description: "You've had most of the experiences on this test.",
      colorClass: 'text-orange-400',
      bgClass: 'bg-orange-500/20',
    };
  }
  if (score >= 30) {
    return {
      range: '30-39',
      title: 'Extremely Experienced',
      description: "Very few things on this list are new to you.",
      colorClass: 'text-orange-400',
      bgClass: 'bg-orange-500/20',
    };
  }
  if (score >= 20) {
    return {
      range: '20-29',
      title: 'Exceptionally Experienced',
      description: "You've done almost everything on this test.",
      colorClass: 'text-orange-400',
      bgClass: 'bg-orange-500/20',
    };
  }
  if (score >= 10) {
    return {
      range: '10-19',
      title: 'Nearly Everything',
      description: "There's not much you haven't experienced.",
      colorClass: 'text-orange-400',
      bgClass: 'bg-orange-500/20',
    };
  }
  if (score >= 1) {
    return {
      range: '1-9',
      title: "You've Done It All",
      description: "Almost nothing on this list is unfamiliar to you.",
      colorClass: 'text-orange-400',
      bgClass: 'bg-orange-500/20',
    };
  }
  return {
    range: '0',
    title: 'Ultimate Experience',
    description: "You've experienced everything on this test.",
    colorClass: 'text-orange-400',
    bgClass: 'bg-orange-500/20',
  };
}

export function shareToTwitter(score: number): void {
  const text = encodeURIComponent(
    `I scored ${score}/100 on the Rice Purity Test! Take yours at ricepuritytestapp.com`
  );
  window.open(`https://twitter.com/intent/tweet?text=${text}`, '_blank');
}

export function shareToFacebook(): void {
  const url = encodeURIComponent('https://ricepuritytestapp.com');
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
}

export function shareToWhatsApp(score: number): void {
  const text = encodeURIComponent(
    `I scored ${score}/100 on the Rice Purity Test! Take yours at ricepuritytestapp.com`
  );
  window.open(`https://wa.me/?text=${text}`, '_blank');
}

export async function copyToClipboard(score: number): Promise<boolean> {
  const text = `I scored ${score}/100 on the Rice Purity Test! Take yours at ricepuritytestapp.com`;
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    return false;
  }
}
