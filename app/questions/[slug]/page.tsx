import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { questions, findQuestion } from "../../../lib/questions";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return questions.map((q) => ({ slug: q.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const q = findQuestion(slug);
  if (!q) return {};
  return {
    title: `${q.question} | Parmana Systems`,
    description: q.short,
    alternates: { canonical: `/questions/${q.slug}` },
    openGraph: { title: q.question, description: q.short, url: `https://parmanasystems.com/questions/${q.slug}` },
  };
}

export default async function QuestionPage({ params }: Props) {
  const { slug } = await params;
  const q = findQuestion(slug);
  if (!q) notFound();
  return (
    <main className="question-page">
      <p><Link href="/questions">All questions</Link></p>
      <h1>{q.question}</h1>
      <p className="question-short">{q.short}</p>
      {q.paragraphs.map((p) => (
        <p key={p}>{p}</p>
      ))}
      <p><Link href="/">Back to the homepage</Link></p>
    </main>
  );
}
