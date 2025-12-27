
import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const VendorDashboard: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.dir = "rtl";
  }, []);

  const chartData = [
    { name: 'أحد', value: 400 },
    { name: 'إثن', value: 300 },
    { name: 'ثلا', value: 600 },
    { name: 'أرب', value: 800 },
    { name: 'خمس', value: 500 },
    { name: 'جمع', value: 900 },
    { name: 'سبت', value: 700 },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-[#101922] text-white font-display">
      {/* Side Nav */}
      <aside className="w-20 lg:w-72 bg-[#111418] border-l border-[#283039] flex flex-col justify-between transition-all duration-300 z-20 hidden md:flex">
        <div className="flex flex-col h-full">
          <div className="p-6 flex items-center gap-4">
            <div className="bg-primary/10 p-2 rounded-xl">
              <div className="size-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl shadow-glow">Y</div>
            </div>
            <div className="hidden lg:flex flex-col">
              <h1 className="text-white text-lg font-bold leading-tight tracking-tight">يلا رينت</h1>
              <p className="text-[#9dabb9] text-xs font-normal">بوابة الموردين</p>
            </div>
          </div>
          
          <nav className="flex-1 px-4 py-4 flex flex-col gap-2 overflow-y-auto">
            <button className="flex items-center gap-4 px-4 py-3 rounded-xl bg-primary/10 text-primary group transition-colors">
              <span className="material-symbols-outlined text-[24px]">dashboard</span>
              <span className="hidden lg:block text-sm font-bold">لوحة المعلومات</span>
            </button>
            <Link to="/vendor-add" className="flex items-center gap-4 px-4 py-3 rounded-xl text-[#9dabb9] hover:bg-[#283039] hover:text-white transition-colors group">
              <span className="material-symbols-outlined text-[24px]">directions_car</span>
              <span className="hidden lg:block text-sm font-medium">الأسطول</span>
            </Link>
            <button className="flex items-center gap-4 px-4 py-3 rounded-xl text-[#9dabb9] hover:bg-[#283039] hover:text-white transition-colors group relative">
              <span className="material-symbols-outlined text-[24px]">calendar_month</span>
              <span className="hidden lg:block text-sm font-medium">الحجوزات</span>
              <span className="absolute left-4 hidden lg:flex bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">3</span>
            </button>
          </nav>
          
          <div className="p-4 border-t border-[#283039]">
            <button 
              onClick={() => navigate('/')} 
              className="flex w-full items-center justify-center gap-2 rounded-xl h-10 bg-[#283039] hover:bg-red-500/20 hover:text-red-500 text-white text-sm font-bold transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">logout</span>
              <span className="hidden lg:block">تسجيل خروج</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        <header className="h-20 border-b border-[#283039] bg-[#111418]/90 backdrop-blur-md flex items-center justify-between px-6 lg:px-10 shrink-0 z-10 sticky top-0">
          <div className="flex-1 max-w-xl">
            <div className="relative group">
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-[#9dabb9]">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input 
                className="block w-full p-2.5 pr-10 text-sm text-white bg-[#1e293b] border border-[#283039] rounded-xl focus:ring-primary focus:border-primary placeholder-[#6b7280] transition-all" 
                placeholder="بحث في الحجوزات، العملاء..." 
                type="text"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-3 lg:gap-6 mr-4">
            <button className="relative p-2 text-[#9dabb9] hover:text-white hover:bg-[#283039] rounded-lg transition-colors">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 left-2 size-2 bg-red-500 rounded-full border-2 border-[#111418]"></span>
            </button>
            <div className="h-8 w-px bg-[#283039]"></div>
            <button className="flex items-center gap-3 group">
              <div className="text-left hidden md:block">
                <p className="text-sm font-bold text-white">أحمد محمد</p>
                <p className="text-xs text-[#9dabb9]">مدير الأسطول</p>
              </div>
              <div className="size-10 rounded-full bg-cover bg-center border-2 border-[#283039]" style={{backgroundImage: "url('https://i.pravatar.cc/100?u=vendor')"}}></div>
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 lg:p-8 space-y-8">
          <div className="max-w-[1400px] mx-auto space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-4xl font-black text-white tracking-tight mb-1">مرحباً بك، أحمد 👋</h2>
                <p className="text-[#9dabb9]">نظرة عامة على أداء أسطولك والعمليات الحالية.</p>
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={() => navigate('/vendor-add')} 
                  className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-xl text-sm font-bold shadow-[0_10px_20px_rgba(19,127,236,0.3)] transition-all transform hover:scale-105 active:scale-95"
                >
                  <span className="material-symbols-outlined text-[20px]">add</span>
                  إضافة مركبة
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'إجمالي الأرباح', val: '12,450', unit: 'ر.س', change: '+12%', color: 'green', icon: 'account_balance_wallet' },
                { title: 'السيارات النشطة', val: '8', total: '10', change: '80%', color: 'blue', icon: 'directions_car' },
                { title: 'الحجوزات المعلقة', val: '3', change: 'هام', color: 'amber', icon: 'pending_actions' },
                { title: 'رضا العملاء', val: '4.9', total: '5', change: '+2%', color: 'indigo', icon: 'star' }
              ].map((stat, i) => (
                <div key={i} className="glass-panel rounded-2xl p-6 relative overflow-hidden group hover:border-primary/30 transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 bg-${stat.color}-500/10 rounded-xl text-${stat.color}-500`}>
                      <span className="material-symbols-outlined text-[24px]">{stat.icon}</span>
                    </div>
                    <span className={`text-${stat.color}-400 bg-${stat.color}-400/10 px-2.5 py-1 rounded text-xs font-bold`}>{stat.change}</span>
                  </div>
                  <p className="text-[#9dabb9] text-sm font-medium mb-1">{stat.title}</p>
                  <h3 className="text-3xl font-black text-white">
                    {stat.val}
                    {stat.unit && <span className="text-base font-normal text-[#9dabb9] mr-1">{stat.unit}</span>}
                    {stat.total && <span className="text-lg text-[#9dabb9] font-normal mr-1">/{stat.total}</span>}
                  </h3>
                  {stat.total && (
                    <div className="w-full bg-[#283039] rounded-full h-1.5 mt-4">
                      <div className={`bg-${stat.color}-500 h-1.5 rounded-full`} style={{width: `${(Number(stat.val) / Number(stat.total)) * 100}%`}}></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Chart */}
              <div className="lg:col-span-2 glass-panel rounded-3xl p-8 border border-[#283039]">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-xl font-bold">نمو الإيرادات الأسبوعي</h3>
                  <select className="bg-[#1e293b] border-none text-sm text-[#9dabb9] rounded-lg">
                    <option>آخر 7 أيام</option>
                    <option>آخر 30 يوم</option>
                  </select>
                </div>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#283039" vertical={false} />
                      <XAxis dataKey="name" stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="#6b7280" fontSize={12} tickLine={false} axisLine={false} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '12px' }}
                        itemStyle={{ color: '#fff' }}
                      />
                      <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                        {chartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={index === 5 ? '#137fec' : '#283039'} className="hover:fill-primary transition-colors cursor-pointer" />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="glass-panel rounded-3xl p-8 border border-[#283039]">
                <h3 className="text-xl font-bold mb-6">النشاط الأخير</h3>
                <div className="space-y-6">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="flex gap-4 items-start pb-4 border-b border-[#283039] last:border-0">
                      <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <span className="material-symbols-outlined text-[20px]">check_circle</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-white">حجز جديد: مرسيدس S-Class</p>
                        <p className="text-xs text-[#9dabb9] mt-1">من العميل: جاسم العتيبي</p>
                        <p className="text-[10px] text-primary mt-2 font-bold">منذ 15 دقيقة</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 text-sm text-primary font-bold hover:underline">عرض جميع الحجوزات</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VendorDashboard;
