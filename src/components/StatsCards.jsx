import React from 'react';
import { Wallet, CreditCard, Users, TrendingUp } from 'lucide-react';

const Card = ({ icon: Icon, label, value, change, color }) => (
  <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-xs text-slate-500">{label}</p>
        <p className="text-2xl font-semibold mt-1">{value}</p>
      </div>
      <div className={`p-3 rounded-lg ${color} text-white`}>
        <Icon className="w-5 h-5" />
      </div>
    </div>
    <p className={`mt-3 text-xs font-medium ${change.startsWith('+') ? 'text-emerald-600' : 'text-red-600'}`}>{change} dari bulan lalu</p>
  </div>
);

export default function StatsCards() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      <Card icon={Wallet} label="Pendapatan Hari Ini" value="Rp 3.450.000" change="+12%" color="bg-indigo-600" />
      <Card icon={CreditCard} label="Transaksi" value="482" change="+6%" color="bg-sky-600" />
      <Card icon={Users} label="Pelanggan Baru" value="74" change="+18%" color="bg-emerald-600" />
      <Card icon={TrendingUp} label="Rata2 Topup" value="Rp 71.700" change="-3%" color="bg-violet-600" />
    </section>
  );
}
