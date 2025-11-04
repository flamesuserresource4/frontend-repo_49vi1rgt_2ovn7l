import Hero from "./components/Hero";
import Tracks from "./components/Tracks";
import Challenges from "./components/Challenges";
import Leaderboard from "./components/Leaderboard";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-950/60 border-b border-gray-200 dark:border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600" />
            <span className="font-extrabold tracking-tight">Flames DX Arena</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#tracks" className="hover:text-indigo-600">Tracks</a>
            <a href="#" className="hover:text-indigo-600">Challenges</a>
            <a href="#leaderboard" className="hover:text-indigo-600">Leaderboard</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="px-3 py-1.5 text-sm rounded-lg border border-gray-200 dark:border-gray-800 hover:border-indigo-400 hover:text-indigo-600">Sign in</button>
            <button className="px-3 py-1.5 text-sm rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-500">Get started</button>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Tracks />
        <Challenges />
        <Leaderboard />
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-900 py-10 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">© {new Date().getFullYear()} Flames DX Arena. Level up skills. Reveal talent.</p>
          <div className="text-sm text-gray-600 dark:text-gray-300 flex gap-4">
            <a href="#" className="hover:text-indigo-600">Privacy</a>
            <a href="#" className="hover:text-indigo-600">Terms</a>
            <a href="#" className="hover:text-indigo-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
