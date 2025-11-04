import { Trophy, Users } from "lucide-react";

const topPlayers = [
  { name: "Alex Rivera", track: "API Design", xp: 1260, progress: 82 },
  { name: "Priya Shah", track: "DevOps", xp: 1185, progress: 75 },
  { name: "Jun Park", track: "Cloud", xp: 1120, progress: 69 },
  { name: "Maya Chen", track: "Observability", xp: 1080, progress: 66 },
];

export default function Leaderboard() {
  return (
    <section id="leaderboard" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Leaderboard
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Track performance and growth across DX skill areas.
            </p>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300 inline-flex items-center gap-2">
            <Users className="w-4 h-4" /> 2,481 learners this month
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-950/60 p-6">
            <div className="space-y-4">
              {topPlayers.map((p, idx) => (
                <div
                  key={p.name}
                  className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/60 dark:bg-gray-900/40"
                >
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white font-bold flex items-center justify-center">
                    {idx + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div className="truncate">
                        <div className="font-semibold text-gray-900 dark:text-white truncate">
                          {p.name}
                        </div>
                        <div className="text-xs text-gray-500">{p.track}</div>
                      </div>
                      <div className="text-sm font-bold text-indigo-600">{p.xp} XP</div>
                    </div>
                    <div className="mt-2 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800">
                      <div
                        className="h-2 rounded-full bg-indigo-600"
                        style={{ width: `${p.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-b from-indigo-600/10 to-transparent p-6">
            <div className="inline-flex items-center gap-2 text-indigo-600 font-semibold">
              <Trophy className="w-4 h-4" /> Recruiter spotlight
            </div>
            <h3 className="mt-2 text-lg font-bold text-gray-900 dark:text-white">
              Discover top performers faster
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Filter by skills, badges, and verified challenge history. Export shortlists or invite candidates directly.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300 list-disc list-inside">
              <li>Live skills signals across DX categories</li>
              <li>Role-ready scorecards and evidence</li>
              <li>Private challenges for your team</li>
            </ul>
            <a
              href="#"
              className="mt-5 inline-flex items-center justify-center w-full rounded-lg bg-indigo-600 text-white font-semibold py-2 hover:bg-indigo-500 transition"
            >
              Book a demo
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
