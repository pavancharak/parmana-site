import { ArrowRight } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const posts = [
  {
    title: "Why I Think This Is an Authority Problem, Not a Governance Problem",
    teaser: "People ask me some version of this question a lot now.",
    date: "2026-08-10",
    url: "https://parmanasystems.substack.com/p/why-i-think-this-is-an-authority",
  },
  {
    title: "The Kill Switch Is a Sign We Have Not Solved the Problem Yet",
    teaser:
      "In June, the Reserve Bank of India released a draft framework requiring every AI model used by a bank to have a kill switch.",
    date: "2026-08-10",
    url: "https://parmanasystems.substack.com/p/the-kill-switch-is-a-sign-we-have",
  },
  {
    title:
      "We Borrowed Zero Trust's Instinct. We Pointed It at a Different Moment.",
    teaser: "Zero trust won.",
    date: "2026-08-10",
    url: "https://parmanasystems.substack.com/p/we-borrowed-zero-trusts-instinct",
  },
  {
    title:
      "Everyone Found the Same Missing Piece. Nobody Agrees What to Call It.",
    teaser:
      "I have spent a lot of time lately reading how different parts of the AI world talk about the same problem, and I keep noticing something odd.",
    date: "2026-08-10",
    url: "https://parmanasystems.substack.com/p/everyone-found-the-same-missing-piece",
  },
  {
    title: "AI Governance Has Many Parts. Only One of Them Can't Fail.",
    teaser:
      "There is a lot of good work happening under the banner of AI governance right now.",
    date: "2026-08-10",
    url: "https://parmanasystems.substack.com/p/ai-governance-has-many-parts-only",
  },
  {
    title: "AI Is Probabilistic. Customers Have Deterministic Problems.",
    teaser: "There is something that increasingly bothers me about the AI market.",
    date: "2026-08-08",
    url: "https://parmanasystems.substack.com/p/why-we-built-parmana-systems",
  },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function BlogPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="bg-white">
          <div className="container section">
            <div className="max-w-5xl">
              <p className="label">Writing</p>

              <h1 className="heading-xl mt-6">
                Notes On Execution
                <br />
                Authority.
              </h1>

              <p className="body mt-12 max-w-3xl">
                Essays on AI execution, authorization, and institutional
                authority, published on Substack. Every post lives there in
                full, this page only links out to it.
              </p>
            </div>

            <div className="mt-20 grid gap-6 sm:grid-cols-2">
              {posts.map((post) => (
                <a
                  key={post.url}
                  href={post.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col rounded-2xl border border-neutral-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="label">{formatDate(post.date)}</p>

                  <h2 className="mt-4 text-2xl font-semibold tracking-tight text-neutral-900">
                    {post.title}
                  </h2>

                  <p className="mt-4 flex-1 text-base leading-7 text-neutral-600">
                    {post.teaser}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-neutral-900">
                    Read on Substack
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
