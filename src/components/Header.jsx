import React from 'react';
import { Bell, Search, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white/70 dark:bg-slate-900/70 backdrop-blur border-b border-slate-200 dark:border-slate-800">
      <div className="flex items-center justify-between gap-4 px-4 md:px-6 py-3">
        <div className="flex items-center gap-3 flex-1 max-w-xl">
          <div className="relative w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              className="w-full pl-10 pr-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-transparent focus:border-indigo-500 outline-none text-sm"
              placeholder="Cari pelanggan, transaksi, atau produk..."
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="relative p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
            <Bell className="w-5 h-5 text-slate-600" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-sm">
            <User className="w-4 h-4" />
            <span>Admin</span>
          </button>
        </div>
      </div>
    </header>
  );
}
