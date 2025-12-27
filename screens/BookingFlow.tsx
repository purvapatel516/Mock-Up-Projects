
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_CARS } from '../constants';

const BookingFlow: React.FC = () => {
  const navigate = useNavigate();
  const car = MOCK_CARS[3]; // Toyota Camry for normal flow
  const [step, setStep] = useState(1);
  const [selectedDay, setSelectedDay] = useState(5);

  useEffect(() => {
    document.documentElement.dir = "rtl";
  }, []);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else navigate('/success');
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] dark:bg-[#101922] text-[#111418] font-display">
      <header className="bg-white/90 dark:bg-[#1a2632] backdrop-blur-md px-8 py-4 border-b border-slate-200 dark:border-[#283039] flex items-center justify-between">
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate('/')}>
          <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-glow">
            <span className="material-symbols-outlined">directions_car</span>
          </div>
          <h2 className="text-xl font-bold dark:text-white">الوفاق لتأجير السيارات</h2>
        </div>
        <button onClick={() => navigate(-1)} className="text-sm font-bold text-slate-500 hover:text-primary transition-colors">إلغاء</button>
      </header>

      <div className="flex flex-col lg:flex-row max-w-[1440px] mx-auto p-4 lg:p-12 gap-12">
        <main className="flex-1 flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-end">
              <p className="font-bold text-lg dark:text-white">إتمام الحجز</p>
              <span className="text-primary font-black text-xl">{(step / 3 * 100).toFixed(0)}%</span>
            </div>
            <div className="h-3 w-full bg-slate-200 dark:bg-[#283039] rounded-full overflow-hidden relative shadow-inner">
              <div 
                className="absolute right-0 top-0 h-full bg-primary transition-all duration-700 shadow-glow" 
                style={{width: `${(step / 3 * 100)}%`}}
              ></div>
            </div>
          </div>

          <div className="space-y-8">
            <h1 className="text-4xl font-black dark:text-white leading-tight">حدد تواريخ الاستلام <br/><span className="text-primary font-light">وفترة الإيجار</span></h1>
            
            <div className="bg-white dark:bg-[#18212b] rounded-[32px] border border-slate-200 dark:border-[#283039] p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-bold text-xl dark:text-white">سبتمبر 2024</h3>
                <div className="flex gap-2">
                  <button className="size-10 rounded-xl bg-slate-100 dark:bg-[#283039] flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                  <button className="size-10 rounded-xl bg-slate-100 dark:bg-[#283039] flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-7 gap-4 mb-6 text-center font-bold text-slate-400 text-sm">
                {['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'].map(d => <span key={d}>{d}</span>)}
              </div>
              
              <div className="grid grid-cols-7 gap-4" style={{direction: 'ltr'}}>
                {Array.from({length: 31}).map((_, i) => {
                  const day = i + 1;
                  const isSelected = selectedDay === day || (day > 5 && day < 9);
                  const isEnd = day === 8;
                  const isStart = day === 5;
                  
                  return (
                    <button 
                      key={day}
                      onClick={() => setSelectedDay(day)}
                      className={`h-12 w-full rounded-2xl transition-all font-bold flex items-center justify-center
                        ${isStart ? 'bg-primary text-white shadow-xl shadow-primary/30 z-10' : ''}
                        ${isSelected && !isStart ? 'bg-primary/10 text-primary' : ''}
                        ${!isSelected ? 'hover:bg-slate-50 dark:hover:bg-white/5 dark:text-gray-400' : ''}
                        ${isEnd ? 'border-2 border-primary border-dashed' : ''}
                      `}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <label className="font-bold text-lg dark:text-white px-2">موقع الاستلام والتسليم</label>
              <div className="p-6 border border-slate-200 dark:border-[#283039] bg-white dark:bg-[#18212b] rounded-3xl flex items-center gap-6 group hover:border-primary transition-colors cursor-pointer">
                <div className="size-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-outlined text-3xl">location_on</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-xl dark:text-white">مطار الملك خالد الدولي</span>
                  <span className="text-slate-500 text-sm">الرياض، صالة المسافرين الدولية (3)</span>
                </div>
                <span className="material-symbols-outlined mr-auto text-slate-300">expand_more</span>
              </div>
            </div>
          </div>
        </main>

        <aside className="w-full lg:w-[420px] flex flex-col gap-8">
          <div className="rounded-[40px] bg-white dark:bg-[#18212b] border border-slate-200 dark:border-[#283039] overflow-hidden shadow-2xl sticky top-12">
            <div className="h-64 bg-gradient-to-br from-slate-50 to-white dark:from-[#1a222a] dark:to-[#18212b] p-8 flex items-center justify-center relative">
              <img 
                src={car.image} 
                className="object-contain w-full h-full drop-shadow-2xl transition-transform hover:scale-110 duration-500 rounded-xl"
                alt={car.name}
              />
              <span className="absolute top-6 right-6 bg-white/80 dark:bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-black border border-white/20 dark:text-white">2024</span>
            </div>
            
            <div className="p-8 space-y-8">
              <div>
                <h3 className="text-3xl font-black mb-1">{car.name}</h3>
                <p className="text-slate-500 text-sm">{car.category} • {car.specs.transmission}</p>
              </div>

              <div className="space-y-4 border-t border-dashed border-slate-200 dark:border-[#283039] pt-8">
                <div className="flex justify-between items-center text-slate-500">
                  <span>تكلفة الإيجار (3 أيام)</span>
                  <span className="font-bold text-slate-900 dark:text-white">{car.pricePerDay * 3} ر.س</span>
                </div>
                <div className="flex justify-between items-center text-slate-500">
                  <span>رسوم المطار والضريبة</span>
                  <span className="font-bold text-slate-900 dark:text-white">125.5 ر.س</span>
                </div>
                <div className="flex justify-between items-center pt-4">
                  <span className="font-black text-xl">المجموع</span>
                  <div className="flex flex-col items-end">
                    <span className="text-3xl font-black text-primary">{(car.pricePerDay * 3) + 125.5} <span className="text-sm font-normal">ر.س</span></span>
                    <span className="text-[10px] text-accent-green font-bold">خصم "أهلاً بك" مطبق (10%)</span>
                  </div>
                </div>
              </div>

              <button 
                onClick={handleNext} 
                className="w-full bg-primary h-16 rounded-2xl text-white font-black text-lg hover:bg-blue-600 transition-all shadow-[0_20px_40px_rgba(19,127,236,0.3)] active:scale-95 flex items-center justify-center gap-3"
              >
                {step === 3 ? 'تأكيد الحجز والدفع' : 'متابعة للدفع'}
                <span className="material-symbols-outlined rtl:rotate-180">arrow_forward</span>
              </button>
              
              <div className="flex items-center justify-center gap-6 pt-4 grayscale opacity-40">
                <span className="material-symbols-outlined text-2xl">credit_card</span>
                <span className="material-symbols-outlined text-2xl">account_balance</span>
                <span className="material-symbols-outlined text-2xl">wallet</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BookingFlow;
