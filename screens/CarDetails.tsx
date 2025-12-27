
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_CARS } from '../constants';

const CarDetails: React.FC = () => {
  const navigate = useNavigate();
  const car = MOCK_CARS[2]; // Using Urus for high-end look

  useEffect(() => {
    document.documentElement.dir = "rtl";
  }, []);

  return (
    <div className="bg-[#f6f7f8] dark:bg-[#101922] min-h-screen text-[#111418] dark:text-white">
      <header className="sticky top-0 z-50 flex justify-between bg-white dark:bg-[#111418]/95 backdrop-blur px-10 py-3 border-b border-slate-200 dark:border-[#283039]">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate('/')}>
          <span className="material-symbols-outlined text-primary text-4xl">directions_car</span>
          <h2 className="text-xl font-bold">Sayara Rental</h2>
        </div>
        <div className="flex gap-4 items-center">
          <button className="text-slate-500 hover:text-primary transition-colors font-medium">مساعدة</button>
          <button className="bg-primary text-white px-6 py-2 rounded-lg text-sm font-bold shadow-lg shadow-primary/20">تسجيل الدخول</button>
        </div>
      </header>

      <div className="px-4 md:px-10 lg:px-20 py-8 max-w-[1400px] mx-auto">
        <div className="flex gap-2 text-slate-400 text-sm mb-6">
          <span className="hover:text-primary cursor-pointer" onClick={() => navigate('/')}>الرئيسية</span>/
          <span className="hover:text-primary cursor-pointer" onClick={() => navigate('/search')}>دبي</span>/
          <span className="text-primary font-bold">{car.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-primary/10 text-primary text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-widest">إصدار محدود</span>
                <span className="text-yellow-400 flex items-center gap-1 font-bold">
                  <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                  {car.rating} (48 تقييم)
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black leading-tight">
                {car.name} <span className="text-primary font-light">بلاك إديشن</span>
              </h1>
              <div className="flex items-center gap-2 text-slate-500 mt-3">
                <span className="material-symbols-outlined text-[20px]">location_on</span>
                الرياض، حي الملقا • يبعد 2.4 كم عنك
              </div>
            </div>

            <div className="relative w-full rounded-3xl overflow-hidden bg-white dark:bg-[#1a222a] border border-slate-200 dark:border-[#283039] shadow-2xl">
              <div className="aspect-video bg-cover bg-center flex items-center justify-center relative group" style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5)), url(${car.image})`}}>
                <button className="size-20 bg-primary/90 rounded-full flex items-center justify-center text-white backdrop-blur-sm hover:scale-110 transition-transform shadow-2xl">
                  <span className="material-symbols-outlined text-4xl">play_arrow</span>
                </button>
                <div className="absolute bottom-6 right-6 flex gap-2">
                  <button className="bg-white/20 backdrop-blur-md p-2 rounded-lg text-white hover:bg-white/40 transition-colors">
                    <span className="material-symbols-outlined">fullscreen</span>
                  </button>
                  <button className="bg-white/20 backdrop-blur-md p-2 rounded-lg text-white hover:bg-white/40 transition-colors">
                    <span className="material-symbols-outlined">favorite</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {icon: 'speed', label: 'السرعة القصوى', val: car.specs.speed},
                {icon: 'auto_transmission', label: 'ناقل الحركة', val: car.specs.transmission},
                {icon: 'airline_seat_recline_extra', label: 'المقاعد', val: `${car.specs.seats} ركاب`},
                {icon: 'local_gas_station', label: 'الوقود', val: car.specs.fuel}
              ].map((item, i) => (
                <div key={i} className="bg-white dark:bg-[#1a222a] p-5 rounded-2xl border border-slate-200 dark:border-[#283039] flex flex-col gap-3 hover:border-primary transition-colors">
                  <div className="size-12 rounded-xl bg-slate-50 dark:bg-[#283039] flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[28px]">{item.icon}</span>
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs font-medium">{item.label}</p>
                    <p className="font-bold text-lg">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">وصف المركبة</h2>
              <p className="text-slate-600 dark:text-gray-400 leading-relaxed">
                تعد {car.name} قمة الهندسة الألمانية، حيث تجمع بين الفخامة المطلقة والأداء الرياضي المذهل. 
                تأتي هذه النسخة الخاصة بمقاعد جلدية فاخرة، نظام صوتي محيطي، وشاشات ترفيه خلفية. 
                مثالية لرجال الأعمال والمناسبات الخاصة التي تتطلب حضوراً لافتاً.
              </p>
            </section>
          </div>

          <div className="lg:col-span-4 relative">
            <div className="sticky top-24 bg-white dark:bg-[#1a222a] border border-slate-200 dark:border-[#283039] rounded-3xl p-8 shadow-2xl flex flex-col gap-6">
              <div className="flex justify-between items-end border-b border-slate-100 dark:border-[#283039] pb-6">
                <div>
                  <span className="text-slate-500 text-sm block mb-1">السعر اليومي</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-primary">{car.pricePerDay}</span>
                    <span className="text-sm text-slate-400">ر.س / يوم</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-accent-green bg-accent-green/10 px-3 py-1 rounded-full text-xs font-bold border border-accent-green/20">متوفر الآن</span>
                  <span className="text-[10px] text-slate-400">تأكيد فوري</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-50 dark:bg-primary/5 rounded-xl p-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">مدة الإيجار (3 أيام)</span>
                    <span className="font-bold">{car.pricePerDay * 3} ر.س</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">رسوم التأمين</span>
                    <span className="font-bold">200 ر.س</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center px-2">
                  <span className="font-bold text-lg">المبلغ الإجمالي</span>
                  <span className="text-2xl font-black text-primary">{(car.pricePerDay * 3) + 200} ر.س</span>
                </div>

                <button 
                  onClick={() => navigate('/booking')} 
                  className="w-full h-14 rounded-2xl bg-primary hover:bg-blue-600 text-white font-bold flex items-center justify-center gap-3 shadow-[0_15px_30px_rgba(19,127,236,0.3)] transition-all transform active:scale-95 group"
                >
                  <span>احجز الآن</span>
                  <span className="material-symbols-outlined group-hover:translate-x-[-4px] transition-transform">arrow_forward_ios</span>
                </button>
                
                <p className="text-[11px] text-center text-slate-400 mt-2">لا يتم خصم المبلغ إلا بعد استلام السيارة</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
