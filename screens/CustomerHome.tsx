
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CustomerHome: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.dir = "rtl";
  }, []);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#f5f6f8] dark:bg-[#101622] text-slate-900 dark:text-white">
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#101622]/80 backdrop-blur-md h-20 flex items-center justify-between px-6 lg:px-8 text-white">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-[0_0_20px_rgba(19,127,236,0.5)]">
            <span className="material-symbols-outlined text-2xl">directions_car</span>
          </div>
          <span className="text-2xl font-black">سيارات</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#" className="hover:text-primary transition-colors">الرئيسية</a>
          <a href="#" className="hover:text-primary transition-colors">المركبات</a>
          <a href="#" className="hover:text-primary transition-colors">العروض</a>
        </nav>
        <div className="flex gap-4">
          <button className="bg-white/10 px-6 py-2 rounded-lg text-sm font-bold hover:bg-white/20 transition-colors">دخول</button>
        </div>
      </header>

      <main className="flex-grow pt-20">
        <div className="relative w-full overflow-hidden bg-[#101622] py-12 lg:py-24 text-white">
          <div className="absolute -top-[20%] right-[10%] h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]"></div>
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 grid gap-12 lg:grid-cols-2 items-center">
            <div className="flex flex-col gap-6 text-right z-10">
              <h1 className="text-5xl font-black leading-tight lg:text-7xl">
                استأجر سيارة أحلامك <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary to-blue-300">بكل سهولة</span>
              </h1>
              <p className="text-gray-400 text-lg">اختر من بين أسطولنا المتنوع من السيارات الفاخرة والاقتصادية في جميع أنحاء المملكة.</p>
            </div>
            
            <div className="relative z-0 lg:h-[500px] flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop" 
                alt="Main Car" 
                className="w-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] rounded-2xl"
              />
            </div>
          </div>

          <div className="relative z-20 mt-12 lg:-mt-12 mx-auto max-w-4xl px-4">
            <div className="rounded-2xl border border-white/10 bg-[#1e232b]/60 p-2 backdrop-blur-xl shadow-2xl">
              <div className="flex flex-col gap-2 lg:flex-row p-2">
                <div className="flex-1 bg-[#1e232b] p-3 rounded-xl border border-transparent focus-within:border-primary/50 transition-all">
                  <label className="text-xs text-gray-500 block mb-1">الموقع</label>
                  <input 
                    type="text" 
                    placeholder="الرياض، جدة، دبي..." 
                    className="bg-transparent border-none text-white w-full p-0 focus:ring-0 font-bold placeholder:text-gray-700"
                  />
                </div>
                <div className="flex-1 bg-[#1e232b] p-3 rounded-xl border border-transparent focus-within:border-primary/50 transition-all">
                  <label className="text-xs text-gray-500 block mb-1">التاريخ</label>
                  <input 
                    type="date" 
                    className="bg-transparent border-none text-white w-full p-0 focus:ring-0 font-bold [color-scheme:dark]"
                  />
                </div>
                <button 
                  onClick={() => navigate('/search')} 
                  className="bg-primary text-white font-bold px-12 rounded-xl h-14 hover:bg-blue-600 transition-all transform active:scale-95 shadow-[0_0_20px_rgba(19,127,236,0.3)]"
                >
                  بحث
                </button>
              </div>
            </div>
          </div>
        </div>

        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">العروض المميزة</h2>
            <button onClick={() => navigate('/search')} className="text-primary font-bold hover:underline">عرض الكل</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white dark:bg-surface-dark rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 group hover:scale-[1.02] transition-transform">
                <div className="h-48 overflow-hidden">
                  <img src={`https://picsum.photos/seed/car${i}/600/400`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">تويوتا كامري 2024</h3>
                  <div className="flex justify-between items-end">
                    <p className="text-primary font-black text-2xl">250 <span className="text-sm font-normal text-slate-500">ر.س / يوم</span></p>
                    <button onClick={() => navigate('/details')} className="bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary hover:text-white transition-colors">حجز</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default CustomerHome;
