import { Target, Star } from "lucide-react";

const challenges = [
  {
    title: "Design a Pagination Strategy",
    xp: 120,
    type: "API Design",
    brief:
      "Define cursor-based pagination with error handling and rate-limit headers.",
    badges: ["Best Practices", "Docs"],
  },
  {
    title: "Ship a CI Pipeline",
    xp: 150,
    type: "DevOps",
    brief:
      "Create a pipeline with lint, test, build, and deploy stages with caching.",
    badges: ["CI/CD", "Automation"],
  },
  {
    title: "Trace a Slow Request",
    xp: 100,
    type: "Observability",
    brief:
      "Use distributed tracing to locate latency and propose a remediation plan.",
    badges: ["Tracing", "SLOs"],
  },
];

export default function Challenges() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Featured challenges
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Bite-sized tasks that simulate real work. Earn XP and unlock badges.
            </p>
          </div>
          <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            Browse all →
          </a>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {challenges.map((c) => (
            <article
              key={c.title}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-950/60 p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold inline-flex items-center gap-2 text-indigo-600">
                  <Target className="w-4 h-4" /> {c.type}
                </span>
                <span className="text-xs font-bold text-gray-700 dark:text-gray-200">
                  +{c.xp} XP
                </span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-gray-900 dark:text-white">
                {c.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{c.brief}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.badges.map((b) => (
                  <span
                    key={b}
                    className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-1 rounded-full bg-indigo-600/10 text-indigo-700 dark:text-indigo-300"
                  >
                    <Star className="w-3 h-3" /> {b}
                  </span>
                ))}
              </div>
              <button className="mt-5 w-full text-sm font-semibold rounded-lg border border-gray-200 dark:border-gray-800 py-2 hover:border-indigo-400 hover:text-indigo-600 transition">
                Attempt challenge
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
