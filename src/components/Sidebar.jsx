import React from 'react';
import { Home, CreditCard, Users, Settings } from 'lucide-react';

const NavItem = ({ icon: Icon, label, active = false }) => (
  <button
    className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-colors text-sm font-medium 
      ${active ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
  >
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </button>
);

export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:flex-col md:w-64 border-r border-slate-200 dark:border-slate-800 p-4 bg-white/60 dark:bg-slate-900/60 backdrop-blur">
      <div className="flex items-center gap-2 px-2 py-3 mb-6">
        <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold">T</div>
        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-white">TopUp Admin</p>
          <p className="text-xs text-slate-500">Dashboard</p>
        </div>
      </div>

      <nav className="space-y-2">
        <NavItem icon={Home} label="Overview" active />
        <NavItem icon={CreditCard} label="Topups" />
        <NavItem icon={Users} label="Customers" />
        <NavItem icon={Settings} label="Settings" />
      </nav>

      <div className="mt-auto pt-6 text-xs text-slate-500 px-2">© {new Date().getFullYear()} Flames Topup</div>
    </aside>
  );
}
