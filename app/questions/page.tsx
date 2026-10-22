import type { Metadata } from "next";
import Link from "next/link";
import { questions } from "../../lib/questions";

export const metadata: Metadata = {
  title: "Questions about Parmana | Parmana Systems",
  description: "Plain answers about controlling AI agent actions: approvals, records, rules and how to check them.",
  alternates: { canonical: "/questions" },
};

export default function QuestionsIndex() {
  return (
    <main className="question-page">
      <h1>Questions about Parmana</h1>
      <ul className="question-list">
        {questions.map((q) => (
          <li key={q.slug}>
            <Link href={`/questions/${q.slug}`}>{q.question}</Link>
          </li>
        ))}
      </ul>
      <p><Link href="/">Back to the homepage</Link></p>
    </main>
  );
}
