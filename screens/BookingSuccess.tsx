
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingSuccess: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.dir = "rtl";
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f9fa] dark:bg-[#101922] flex items-center justify-center p-6 font-display">
      <div className="max-w-xl w-full bg-white dark:bg-[#18212b] rounded-[48px] p-10 md:p-16 text-center border border-slate-200 dark:border-[#283039] shadow-2xl relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 size-32 bg-primary/5 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 size-32 bg-accent-green/5 rounded-tr-full"></div>
        
        <div className="relative z-10 flex flex-col items-center gap-8">
          <div className="size-24 bg-accent-green/10 rounded-full flex items-center justify-center text-accent-green shadow-[0_0_40px_rgba(11,218,91,0.2)] animate-bounce">
            <span className="material-symbols-outlined text-6xl">check_circle</span>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl font-black dark:text-white leading-tight">تم الحجز بنجاح!</h1>
            <p className="text-slate-500 dark:text-gray-400 text-lg leading-relaxed">
              لقد تم تأكيد حجزك لسيارة <span className="font-bold text-primary">تويوتا كامري 2024</span>. 
              ستصلك تفاصيل الاستلام عبر البريد الإلكتروني قريباً.
            </p>
          </div>

          <div className="w-full bg-slate-50 dark:bg-[#283039] rounded-3xl p-6 flex items-center justify-between">
            <div className="text-right">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest font-black">رقم الحجز</span>
              <p className="font-mono font-bold text-xl tracking-tighter">SYR-294-81</p>
            </div>
            <button className="text-primary font-bold hover:underline text-sm">حفظ التذكرة</button>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full pt-4">
            <button 
              onClick={() => navigate('/')}
              className="h-14 rounded-2xl bg-primary text-white font-black hover:bg-blue-600 transition-all shadow-xl shadow-primary/20"
            >
              الرئيسية
            </button>
            <button 
              onClick={() => navigate('/search')}
              className="h-14 rounded-2xl bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-white font-bold hover:bg-slate-200 transition-all"
            >
              حجز آخر
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccess;
