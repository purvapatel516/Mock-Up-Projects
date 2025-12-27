
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_CARS } from '../constants';

const SearchResults: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.dir = "rtl";
  }, []);

  return (
    <div className="bg-[#f6f7f8] dark:bg-[#101922] min-h-screen text-slate-900 dark:text-white">
      <header className="sticky top-0 z-50 w-full border-b border-[#283039] bg-[#181b21]/70 backdrop-blur-md px-6 py-4 flex justify-between items-center text-white">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-white">directions_car</span>
          </div>
          <h2 className="text-xl font-bold">Sayara</h2>
        </div>
        <div className="flex-1 max-w-md mx-8 hidden md:block">
          <div className="relative">
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">search</span>
            <input 
              type="text" 
              placeholder="ابحث عن موديل، شركة..." 
              className="w-full bg-[#1e293b] border-[#283039] rounded-xl pr-10 pl-4 py-2 text-sm focus:ring-primary focus:border-primary"
            />
          </div>
        </div>
        <div className="flex gap-3">
          <button className="size-10 rounded-full bg-[#283039] flex items-center justify-center hover:bg-primary transition-colors">
            <span className="material-symbols-outlined">person</span>
          </button>
        </div>
      </header>

      <main className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-8 p-6">
        {/* Filters Sidebar */}
        <aside className="w-full lg:w-72 shrink-0">
          <div className="bg-white dark:bg-[#18212b] rounded-2xl border border-slate-200 dark:border-[#283039] p-6 sticky top-28">
            <h3 className="font-bold mb-6 text-lg">تصفية النتائج</h3>
            <div className="space-y-6">
              <div>
                <label className="text-sm font-semibold mb-3 block">نطاق السعر (ر.س)</label>
                <input type="range" className="w-full h-2 bg-slate-200 dark:bg-[#283039] rounded-lg appearance-none cursor-pointer accent-primary" />
                <div className="flex justify-between mt-2 text-xs text-slate-500">
                  <span>100 ر.س</span>
                  <span>5000 ر.س</span>
                </div>
              </div>
              <div>
                <label className="text-sm font-semibold mb-3 block">نوع السيارة</label>
                <div className="space-y-2">
                  {['فاخرة', 'رياضية', 'اقتصادية', 'عائلية'].map(type => (
                    <label key={type} className="flex items-center gap-2 cursor-pointer group">
                      <input type="checkbox" className="rounded text-primary focus:ring-primary bg-transparent border-slate-300 dark:border-slate-600" />
                      <span className="text-sm group-hover:text-primary transition-colors">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Results Grid */}
        <section className="flex-1">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-black">وجدنا <span className="text-primary">{MOCK_CARS.length}</span> سيارة متاحة</h1>
            <select className="bg-white dark:bg-[#1e293b] border-slate-200 dark:border-[#283039] rounded-lg text-sm p-2 focus:ring-primary">
              <option>الأقل سعراً</option>
              <option>الأعلى سعراً</option>
              <option>الأعلى تقييماً</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MOCK_CARS.map((car, idx) => (
              <div key={car.id} className={`${idx === 0 ? 'md:col-span-2 flex-col md:flex-row h-auto min-h-[340px]' : 'flex-col'} relative group overflow-hidden rounded-2xl bg-white dark:bg-[#181b21] border border-slate-200 dark:border-[#283039] flex text-slate-900 dark:text-white hover:shadow-2xl transition-all duration-300`}>
                <div className={`relative ${idx === 0 ? 'w-full md:w-3/5 h-64 md:h-auto' : 'w-full h-56'} overflow-hidden shrink-0`}>
                  <img src={car.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={car.name} />
                  {idx === 0 && <span className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">الأكثر طلباً</span>}
                </div>
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-2xl font-bold leading-tight">{car.name}</h3>
                      <span className="flex items-center gap-1 text-yellow-400 text-sm font-bold">
                        <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                        {car.rating}
                      </span>
                    </div>
                    <p className="text-slate-500 dark:text-gray-400 text-sm mb-4">موديل {car.model} • {car.category}</p>
                    
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <span className="material-symbols-outlined text-[18px]">settings</span>
                        {car.specs.transmission}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <span className="material-symbols-outlined text-[18px]">group</span>
                        {car.specs.seats} مقاعد
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto border-t border-slate-100 dark:border-[#283039] pt-6 flex items-end justify-between">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black text-primary">{car.pricePerDay}</span>
                      <span className="text-sm text-slate-500 dark:text-gray-400">ر.س / يوم</span>
                    </div>
                    <button 
                      onClick={() => navigate('/details')} 
                      className="bg-primary hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg shadow-primary/25 transition-all transform active:scale-95"
                    >
                      احجز الآن
                    </button>
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

export default SearchResults;
