import { motion } from "framer-motion";
import { Rocket, Trophy } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/20 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 bg-indigo-600/10 px-3 py-1 rounded-full">
              <Trophy className="w-4 h-4" />
              Gamified DX Learning
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Discover motivated talent through challenge-driven learning
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Teach and evaluate developer experience skills with real-world, bite-sized challenges. Learners level up, and recruiters spot top performers.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#tracks"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-500 transition"
              >
                <Rocket className="w-5 h-5" /> Start learning
              </a>
              <a
                href="#leaderboard"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white font-semibold shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition"
              >
                <Trophy className="w-5 h-5" /> See top performers
              </a>
            </div>
            <div className="flex items-center gap-6 pt-2">
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Real-world DX tracks • Earn XP and badges • Recruiter insights
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 p-[1px] shadow-lg">
              <div className="w-full h-full rounded-2xl bg-white dark:bg-gray-950 p-6 grid grid-cols-2 gap-4">
                {[
                  { label: "API Design", value: 78 },
                  { label: "DevOps", value: 64 },
                  { label: "Cloud", value: 72 },
                  { label: "Observability", value: 59 },
                ].map((m) => (
                  <div key={m.label} className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50/60 dark:bg-gray-900/40">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">{m.label}</span>
                      <span className="text-xs text-indigo-600 font-bold">{m.value}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800">
                      <div className="h-2 rounded-full bg-indigo-600" style={{ width: `${m.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-2 shadow">
              <div className="text-sm font-semibold text-gray-900 dark:text-white">Live skills signal</div>
              <div className="text-xs text-gray-500">Updated as learners progress</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
