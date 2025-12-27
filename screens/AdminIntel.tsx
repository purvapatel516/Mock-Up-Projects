
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getFleetInsights } from '../services/geminiService';

const AdminIntel: React.FC = () => {
  const navigate = useNavigate();
  const [insight, setInsight] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.dir = "rtl";
    
    // Simulate data loading and AI analysis
    const loadAI = async () => {
      const mockData = "Total Fleet: 120 cars, Utilization: 84%, Rev Growth: 12%, Maintenance Alerts: 5";
      const result = await getFleetInsights(mockData);
      setInsight(result);
      setLoading(false);
    };
    
    loadAI();
  }, []);

  return (
    <div className="flex h-screen w-full bg-[#111418] text-white font-display overflow-hidden">
      {/* Sidebar */}
      <aside className="w-72 border-l border-[#283039] hidden md:flex flex-col p-8 gap-10 bg-[#0d0f13]">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate('/admin-dir')}>
          <div className="size-12 rounded-xl bg-primary flex items-center justify-center shadow-glow">
            <span className="material-symbols-outlined text-white text-3xl">terminal</span>
          </div>
          <div>
            <h1 className="font-bold text-lg">نظام الإدارة</h1>
            <p className="text-[#9dabb9] text-xs">مركز العمليات الذكي</p>
          </div>
        </div>

        <nav className="flex flex-col gap-3">
          <button onClick={() => navigate('/admin-dir')} className="flex items-center gap-4 px-4 py-4 rounded-2xl text-[#9dabb9] hover:bg-[#283039] transition-all">
            <span className="material-symbols-outlined">group</span>
            <span className="font-medium">المستخدمين</span>
          </button>
          <button className="flex items-center gap-4 px-4 py-4 rounded-2xl bg-primary text-white shadow-xl shadow-primary/20">
            <span className="material-symbols-outlined">psychology</span>
            <span className="font-bold">ذكاء الأعمال</span>
          </button>
          <button className="flex items-center gap-4 px-4 py-4 rounded-2xl text-[#9dabb9] hover:bg-[#283039] transition-all">
            <span className="material-symbols-outlined">security</span>
            <span className="font-medium">التحقق والأمان</span>
          </button>
        </nav>

        <div className="mt-auto bg-primary/10 rounded-3xl p-6 border border-primary/20">
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-primary text-sm">bolt</span>
            <span className="text-primary text-xs font-black uppercase tracking-widest">تحديث مباشر</span>
          </div>
          <p className="text-[11px] text-[#9dabb9] leading-relaxed">تتم مراقبة أسطول السيارات حالياً باستخدام تقنيات Gemini 3 Flash لضمان أقصى كفاءة تشغيلية.</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        <header className="flex items-center justify-between border-b border-[#283039] px-10 py-5 bg-[#111418]/95 backdrop-blur z-10 sticky top-0">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-black">مركز قيادة الذكاء الاصطناعي</h2>
            <span className="bg-accent-green/20 text-accent-green text-[10px] px-2 py-0.5 rounded-md font-bold uppercase border border-accent-green/30 animate-pulse">Live</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex flex-col items-end">
              <span className="text-xs text-[#9dabb9]">الجلسة النشطة</span>
              <span className="text-sm font-bold">المشرف العام</span>
            </div>
            <button className="size-11 rounded-xl bg-[#283039] border border-[#374151] flex items-center justify-center hover:bg-primary transition-colors">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 lg:p-10 space-y-10 max-w-7xl mx-auto w-full">
          {/* AI Banner */}
          <div className="rounded-[32px] overflow-hidden relative bg-[#283039] border border-[#374151] shadow-2xl group">
            <div className="flex flex-col md:flex-row min-h-[400px]">
              <div className="w-full md:w-5/12 h-64 md:h-auto overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] mix-blend-luminosity opacity-40" 
                  alt="AI Core"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-[#283039] to-transparent"></div>
              </div>
              <div className="p-10 flex flex-col justify-center flex-1 z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-8 bg-primary rounded-lg flex items-center justify-center animate-bounce">
                    <span className="material-symbols-outlined text-white text-sm">smart_toy</span>
                  </div>
                  <h3 className="text-primary font-black uppercase text-sm tracking-widest">تنبؤات النظام الذكية</h3>
                </div>
                
                {loading ? (
                  <div className="space-y-4 animate-pulse">
                    <div className="h-8 bg-slate-700 rounded-lg w-3/4"></div>
                    <div className="h-4 bg-slate-700 rounded-lg w-1/2"></div>
                    <div className="h-20 bg-slate-700 rounded-lg w-full"></div>
                  </div>
                ) : (
                  <>
                    <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                      {insight?.summary || "تحليل الأداء التشغيلي للربع الحالي"}
                    </h2>
                    <div className="flex flex-wrap gap-4 mb-8">
                      {insight?.recommendations?.map((rec: string, i: number) => (
                        <div key={i} className="bg-primary/10 border border-primary/20 px-4 py-2 rounded-xl text-xs text-primary font-bold">
                          {rec}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      <button className="bg-primary text-white px-8 py-3 rounded-2xl font-bold shadow-xl shadow-primary/30 transform transition hover:scale-105 active:scale-95">عرض التقارير الكاملة</button>
                      <button className="text-[#9dabb9] hover:text-white transition-colors text-sm font-bold flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px]">share</span>
                        مشاركة التحليل
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Live Map Interface */}
            <div className="lg:col-span-2 bg-[#1a202c] rounded-[32px] border border-[#283039] overflow-hidden min-h-[450px] flex flex-col shadow-2xl">
              <div className="p-8 border-b border-[#283039] flex justify-between items-center">
                <div>
                  <h3 className="font-black text-xl">خريطة العمليات الحية</h3>
                  <p className="text-[#9dabb9] text-xs">تتبع جغرافي لـ 84 مركبة نشطة حالياً</p>
                </div>
                <div className="flex gap-2">
                  <button className="bg-[#283039] p-2 rounded-lg text-[#9dabb9]"><span className="material-symbols-outlined">zoom_in</span></button>
                  <button className="bg-[#283039] p-2 rounded-lg text-[#9dabb9]"><span className="material-symbols-outlined">layers</span></button>
                </div>
              </div>
              <div className="relative flex-1 bg-[#161b22]">
                {/* Simulated Map Background */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay" 
                  style={{backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2070&auto=format&fit=crop')"}}
                ></div>
                {/* Active Tracking Pulses */}
                <div className="absolute top-[30%] right-[40%] pulsar size-5"></div>
                <div className="absolute top-[60%] right-[20%] pulsar size-4"></div>
                <div className="absolute top-[45%] right-[75%] pulsar size-3"></div>
                
                {/* Map Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 lg:left-8 lg:right-auto lg:w-80 bg-black/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-slate-400">آخر تنبيه جيوفينس</span>
                    <span className="bg-red-500/20 text-red-500 text-[9px] px-2 py-0.5 rounded font-black">عاجل</span>
                  </div>
                  <h4 className="font-bold text-white mb-2">تجاوز الحدود: مرسيدس G-Class</h4>
                  <p className="text-[11px] text-[#9dabb9]">السيارة رقم 492 تجاوزت النطاق المسموح به في منطقة الدرعية.</p>
                  <button className="w-full mt-4 bg-white/10 hover:bg-white/20 py-2 rounded-xl text-xs font-bold transition-all">اتخاذ إجراء</button>
                </div>
              </div>
            </div>

            {/* AI Recommendation Panel */}
            <div className="flex flex-col gap-6">
              <div className="bg-[#283039] rounded-[32px] p-8 border border-[#374151] shadow-2xl flex-1">
                <h3 className="font-black text-xl mb-8">تحليل الطلب القادم</h3>
                <div className="space-y-6">
                  {[
                    { day: 'الأحد', val: 85, trend: 'up' },
                    { day: 'الاثنين', val: 62, trend: 'down' },
                    { day: 'الثلاثاء', val: 78, trend: 'up' },
                    { day: 'الأربعاء', val: 92, trend: 'up' },
                    { day: 'الخميس', val: 98, trend: 'up' }
                  ].map(d => (
                    <div key={d.day} className="space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold">{d.day}</span>
                        <span className={d.trend === 'up' ? 'text-accent-green' : 'text-red-500'}>
                          {d.trend === 'up' ? '▲' : '▼'} {d.val}%
                        </span>
                      </div>
                      <div className="h-2 bg-black/30 rounded-full overflow-hidden">
                        <div className={`h-full bg-primary transition-all duration-1000 shadow-glow`} style={{width: `${d.val}%`}}></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-10 p-4 bg-white/5 rounded-2xl border border-white/10">
                  <p className="text-[11px] text-[#9dabb9] italic leading-relaxed">
                    "توصية: ارفع أسعار التأجير بنسبة 8% ليوم الخميس نظراً لوجود فعاليات محلية مرتقبة."
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary to-blue-700 rounded-[32px] p-8 shadow-2xl text-white relative overflow-hidden shrink-0">
                <div className="relative z-10">
                  <h3 className="font-black text-xl mb-2">تحسين الأسطول</h3>
                  <p className="text-sm text-white/80 leading-relaxed">تم استبدال 4 مركبات ذات استهلاك عالٍ للوقود بمركبات هجينة هذا الشهر.</p>
                  <button className="mt-6 bg-white text-primary font-black px-6 py-2.5 rounded-xl text-xs">عرض الوفر</button>
                </div>
                <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-white/10 text-[120px] select-none">eco</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminIntel;
