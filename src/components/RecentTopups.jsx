import React from 'react';
import { ArrowUpRight, Smartphone, CreditCard } from 'lucide-react';

const Row = ({ name, phone, amount, status, method }) => (
  <div className="grid grid-cols-2 sm:grid-cols-5 items-center gap-3 px-3 py-3 hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-lg">
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
        <Smartphone className="w-4 h-4" />
      </div>
      <div>
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-slate-500">{phone}</p>
      </div>
    </div>
    <div className="hidden sm:block text-sm">{method}</div>
    <div className="text-sm font-medium">Rp {amount.toLocaleString('id-ID')}</div>
    <div>
      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium 
        ${status === 'Sukses' ? 'bg-emerald-100 text-emerald-700' : status === 'Pending' ? 'bg-amber-100 text-amber-700' : 'bg-rose-100 text-rose-700'}`}>{status}</span>
    </div>
    <button className="justify-self-end p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
      <ArrowUpRight className="w-4 h-4" />
    </button>
  </div>
);

export default function RecentTopups() {
  const data = [
    { name: 'Rama Wijaya', phone: '0812-3456-7890', amount: 150000, status: 'Sukses', method: 'OVO' },
    { name: 'Siti Aminah', phone: '0851-2222-3333', amount: 50000, status: 'Pending', method: 'Dana' },
    { name: 'Budi Santoso', phone: '0821-7777-8888', amount: 100000, status: 'Gagal', method: 'Gopay' },
    { name: 'Agus Salim', phone: '0813-1234-5678', amount: 250000, status: 'Sukses', method: 'Bank Transfer' },
  ];

  return (
    <section className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200 dark:border-slate-800">
        <h3 className="font-semibold">Topup Terbaru</h3>
        <button className="text-sm text-indigo-600 hover:underline">Lihat semua</button>
      </div>
      <div className="p-3 divide-y divide-slate-200 dark:divide-slate-800">
        {data.map((item, idx) => (
          <Row key={idx} {...item} />
        ))}
      </div>
    </section>
  );
}
