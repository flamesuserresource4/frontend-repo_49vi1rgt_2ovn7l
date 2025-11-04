import { Code, Settings, Cloud, Activity } from "lucide-react";

const tracks = [
  {
    title: "API Design",
    icon: Code,
    color: "from-indigo-500 to-blue-500",
    description:
      "Craft clear, resilient APIs with versioning, pagination, and robust error design.",
  },
  {
    title: "DevOps",
    icon: Settings,
    color: "from-emerald-500 to-teal-500",
    description:
      "Ship quickly with CI/CD, IaC, and automation across environments.",
  },
  {
    title: "Cloud",
    icon: Cloud,
    color: "from-purple-500 to-fuchsia-500",
    description:
      "Design scalable, cost-aware architectures using managed services.",
  },
  {
    title: "Observability",
    icon: Activity,
    color: "from-amber-500 to-orange-500",
    description:
      "Instrument, trace, and monitor systems to improve DX and reliability.",
  },
];

export default function Tracks() {
  return (
    <section id="tracks" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Choose a DX track
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Learn by doing. Complete real-world tasks and collect XP.
            </p>
          </div>
          <a
            href="#leaderboard"
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            View leaderboard →
          </a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tracks.map((t) => (
            <article
              key={t.title}
              className="group relative rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-950/60 p-5 shadow-sm hover:shadow-md transition"
            >
              <div
                className={`absolute -top-6 right-5 h-12 w-12 rounded-xl bg-gradient-to-br ${t.color} opacity-80 blur-lg`}
                aria-hidden
              />
              <div className="relative flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
                  <t.icon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {t.title}
                </h3>
              </div>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                {t.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs font-medium text-indigo-600">Beginner → Pro</span>
                <button className="text-sm font-semibold text-gray-900 dark:text-white hover:text-indigo-600">
                  Start track
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
