import React from 'react';
import Sidebar from './components/Sidebar.jsx';
import Header from './components/Header.jsx';
import StatsCards from './components/StatsCards.jsx';
import RecentTopups from './components/RecentTopups.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-emerald-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 text-slate-900 dark:text-slate-100">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 min-h-screen flex flex-col">
          <Header />

          <div className="px-4 md:px-6 py-6 space-y-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Dashboard Topup</h1>
              <p className="text-sm text-slate-500 mt-1">Ringkasan performa dan aktivitas terbaru</p>
            </div>

            <StatsCards />

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <div className="xl:col-span-2">
                <RecentTopups />
              </div>

              <section className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4">
                <h3 className="font-semibold mb-3">Metode Terpopuler</h3>
                <ul className="space-y-3">
                  {[{label:'OVO', val:46, color:'bg-indigo-600'}, {label:'Dana', val:28, color:'bg-sky-600'}, {label:'Gopay', val:17, color:'bg-emerald-600'}, {label:'Transfer Bank', val:9, color:'bg-violet-600'}].map((m) => (
                    <li key={m.label} className="text-sm">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-slate-600 dark:text-slate-300">{m.label}</span>
                        <span className="font-medium">{m.val}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                        <div className={`${m.color} h-2`} style={{ width: `${m.val}%` }} />
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
