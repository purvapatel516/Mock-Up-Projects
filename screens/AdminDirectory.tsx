
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_USERS } from '../constants';

const AdminDirectory: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.dir = "ltr"; // Force LTR for admin tools if preferred, or keep RTL
  }, []);

  return (
    <div className="flex h-screen w-full bg-[#f6f7f8] dark:bg-[#101922] font-display text-slate-900 dark:text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-[#1a2632] border-r border-slate-200 dark:border-slate-800 flex flex-col shrink-0 z-20 hidden md:flex">
        <div className="h-20 flex items-center px-6 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3 text-primary cursor-pointer" onClick={() => navigate('/')}>
            <span className="material-symbols-outlined text-3xl">directions_car</span>
            <span className="text-xl font-bold tracking-tighter">SAYARA <span className="text-slate-400 dark:text-slate-500 font-light">ADMIN</span></span>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto py-8 px-4 gap-2 flex flex-col">
          <button 
            onClick={() => navigate('/admin-intel')} 
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-primary transition-all font-medium"
          >
            <span className="material-symbols-outlined">dashboard</span>
            Dashboard
          </button>
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary font-bold shadow-sm">
            <span className="material-symbols-outlined fill-1">group</span>
            Directory
          </button>
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:text-primary transition-all font-medium">
            <span className="material-symbols-outlined">payments</span>
            Billing
          </button>
        </nav>
        <div className="p-4 border-t border-slate-100 dark:border-slate-800">
          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-3 flex items-center gap-3">
            <div className="size-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">AD</div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold truncate">Admin One</p>
              <p className="text-[10px] text-slate-500 truncate">Super Admin</p>
            </div>
            <span className="material-symbols-outlined text-slate-400 text-sm">logout</span>
          </div>
        </div>
      </aside>

      {/* Main Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <header className="h-20 bg-white dark:bg-[#1a2632] border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-8 shrink-0 sticky top-0 z-10">
          <div>
            <h2 className="font-bold text-xl">Directory Management</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
              <input 
                type="text" 
                placeholder="Search users..." 
                className="bg-slate-50 dark:bg-slate-800 border-none rounded-xl pl-9 pr-4 py-2 text-sm w-64 focus:ring-1 ring-primary"
              />
            </div>
            <button className="bg-primary text-white p-2 rounded-xl">
              <span className="material-symbols-outlined">add</span>
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 lg:p-12 scroll-smooth">
          <div className="max-w-6xl mx-auto flex flex-col gap-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h1 className="text-4xl font-black mb-2 tracking-tight">Records & Verification</h1>
                <p className="text-slate-500">Manage all registered entities and their verification status.</p>
              </div>
              <div className="flex gap-2">
                <button className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-6 py-2.5 rounded-xl text-sm font-bold shadow-sm hover:shadow-md transition-shadow">Export Data</button>
                <button className="bg-primary text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-primary/25 hover:bg-blue-600 transition-all">Add Record</button>
              </div>
            </div>

            <div className="bg-white dark:bg-[#1a2632] rounded-[32px] border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden flex flex-col">
              <div className="px-8 py-6 border-b border-slate-100 dark:border-slate-800 flex justify-between bg-slate-50/30 dark:bg-slate-800/20">
                <div className="flex gap-4">
                  <button className="px-4 py-1.5 bg-primary text-white rounded-lg text-xs font-bold">All Users</button>
                  <button className="px-4 py-1.5 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-xs font-medium transition-colors">Vendors</button>
                  <button className="px-4 py-1.5 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-xs font-medium transition-colors">Customers</button>
                </div>
              </div>

              <div className="p-4 overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-slate-400 text-[10px] uppercase tracking-widest font-black border-b border-slate-100 dark:border-slate-800">
                      <th className="px-6 py-4">Identity</th>
                      <th className="px-6 py-4">Role</th>
                      <th className="px-6 py-4">Location</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50 dark:divide-slate-800/50">
                    {MOCK_USERS.map((user) => (
                      <tr key={user.id} className="group hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-4">
                            <div className="size-12 rounded-2xl bg-slate-100 dark:bg-slate-800 overflow-hidden ring-2 ring-transparent group-hover:ring-primary/20 transition-all">
                              <img src={user.avatar} className="w-full h-full object-cover" alt={user.name} />
                            </div>
                            <div>
                              <p className="font-black text-sm">{user.name}</p>
                              <p className="text-[10px] text-slate-400 font-mono">ID: {user.id.padStart(5, '0')}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-5">
                          <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider ${
                            user.role === 'admin' ? 'bg-indigo-100 text-indigo-700' : 
                            user.role === 'vendor' ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-700'
                          }`}>
                            {user.role}
                          </span>
                        </td>
                        <td className="px-6 py-5 text-sm text-slate-500 font-medium">
                          {user.location}
                        </td>
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-2">
                            <div className={`size-2 rounded-full ${
                              user.status === 'active' ? 'bg-accent-green animate-pulse' : 
                              user.status === 'pending' ? 'bg-amber-400' : 'bg-red-400'
                            }`}></div>
                            <span className="text-xs font-bold capitalize">{user.status}</span>
                          </div>
                        </td>
                        <td className="px-6 py-5 text-right">
                          <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            {user.status === 'pending' && (
                              <button className="text-xs font-black text-primary hover:bg-primary/10 px-3 py-1.5 rounded-lg transition-colors">Approve</button>
                            )}
                            <button className="text-xs font-black text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 px-3 py-1.5 rounded-lg transition-colors">Edit</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDirectory;
