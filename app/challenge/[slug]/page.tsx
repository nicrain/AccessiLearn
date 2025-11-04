import { notFound } from 'next/navigation';
import ChallengeClient from './ChallengeClient';
import { challengeData } from '../../data/challengeData';

export async function generateStaticParams() {
  return [
    { slug: 'html-basics' },
    { slug: 'keyboard-tab' }
  ];
}

export default function ChallengePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  if (!challengeData[slug as keyof typeof challengeData]) {
    notFound();
  }

  return <ChallengeClient slug={slug} />;
}
