import { notFound } from 'next/navigation';
import ModuleClient from './ModuleClient';
import { moduleContent } from '../../data/moduleContent';

export async function generateStaticParams() {
  return [
    { slug: 'html-basics' },
    { slug: 'keyboard-tab' },
  ];
}

export default function ModulePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  if (!moduleContent[slug as keyof typeof moduleContent]) {
    notFound();
  }

  return <ModuleClient slug={slug} />;
}
