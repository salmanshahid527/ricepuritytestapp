import { TestAnswers } from '@/types';
import { TOTAL_QUESTIONS } from './constants';
import { BASE_URL } from './site';

export function calculateScore(answers: TestAnswers): number {
  const checkedCount = Object.values(answers).filter(Boolean).length;
  return TOTAL_QUESTIONS - checkedCount;
}

export function getScoreInterpretation(score: number): {
  range: string;
  title: string;
  description: string;
} {
  if (score >= 100) {
    return {
      range: '100',
      title: 'Perfect Score',
      description: "You're as pure as they come! You haven't experienced any of the things on this test.",
    };
  }
  if (score >= 98) {
    return {
      range: '98-99',
      title: 'Extremely Pure',
      description: "You've had very few experiences on this list.",
    };
  }
  if (score >= 94) {
    return {
      range: '94-97',
      title: 'Very Pure',
      description: "You're quite innocent with minimal life experiences from the test.",
    };
  }
  if (score >= 90) {
    return {
      range: '90-93',
      title: 'Relatively Pure',
      description: "You've had some experiences but remain largely innocent.",
    };
  }
  if (score >= 87) {
    return {
      range: '87-89',
      title: 'Moderately Pure',
      description: "You're still on the innocent side with select experiences.",
    };
  }
  if (score >= 84) {
    return {
      range: '84-86',
      title: 'Fairly Pure',
      description: "You've had a fair number of life experiences.",
    };
  }
  if (score >= 80) {
    return {
      range: '80-83',
      title: 'Somewhat Pure',
      description: "You've experienced quite a bit on this list.",
    };
  }
  if (score >= 77) {
    return {
      range: '77-79',
      title: 'Lightly Tarnished',
      description: "You've had a good amount of experiences.",
    };
  }
  if (score >= 70) {
    return {
      range: '70-76',
      title: 'Moderately Experienced',
      description: "You're in the middle range with diverse experiences.",
    };
  }
  if (score >= 60) {
    return {
      range: '60-69',
      title: 'Experienced',
      description: "You've had many of the experiences on this test.",
    };
  }
  if (score >= 50) {
    return {
      range: '50-59',
      title: 'Very Experienced',
      description: "You've done more than half of the things listed.",
    };
  }
  if (score >= 40) {
    return {
      range: '40-49',
      title: 'Highly Experienced',
      description: "You've had most of the experiences on this test.",
    };
  }
  if (score >= 30) {
    return {
      range: '30-39',
      title: 'Extremely Experienced',
      description: "Very few things on this list are new to you.",
    };
  }
  if (score >= 20) {
    return {
      range: '20-29',
      title: 'Exceptionally Experienced',
      description: "You've done almost everything on this test.",
    };
  }
  if (score >= 10) {
    return {
      range: '10-19',
      title: 'Nearly Everything',
      description: "There's not much you haven't experienced.",
    };
  }
  if (score >= 1) {
    return {
      range: '1-9',
      title: "You've Done It All",
      description: "Almost nothing on this list is unfamiliar to you.",
    };
  }
  return {
    range: '0',
    title: 'Ultimate Experience',
    description: "You've experienced everything on this test.",
  };
}

const shareText = (score: number) => `I scored ${score}/100 on the Rice Purity Test! Take yours at ricepuritytestapp.com`;

const openShare = (url: string) => window.open(url, '_blank', 'noopener,noreferrer');

export function shareToTwitter(score: number): void {
  openShare(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText(score))}`);
}

export function shareToFacebook(): void {
  openShare(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${BASE_URL}/`)}`);
}

export function shareToWhatsApp(score: number): void {
  openShare(`https://wa.me/?text=${encodeURIComponent(shareText(score))}`);
}

export async function copyToClipboard(score: number): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(shareText(score));
    return true;
  } catch {
    return false;
  }
}
