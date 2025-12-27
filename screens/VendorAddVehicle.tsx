
import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const VendorAddVehicle: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.dir = "rtl";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 font-arabic">
      <nav className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 dark:bg-[#1e293b]/80 border-b border-slate-200 dark:border-slate-700 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-xl cursor-pointer" onClick={() => navigate('/')}>
          <span className="material-symbols-outlined text-primary text-3xl">directions_car</span> 
          <span>يلا رينت</span>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/vendor-dash" className="text-sm font-bold text-slate-500 hover:text-primary transition-colors">العودة للوحة التحكم</Link>
          <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
            <img src="https://i.pravatar.cc/100?u=vendor" className="w-full h-full object-cover" />
          </div>
        </div>
      </nav>

      <main className="flex-1 overflow-y-auto p-4 md:p-12">
        <div className="max-w-7xl mx-auto">
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
            <div>
              <h1 className="text-3xl md:text-5xl font-black tracking-tight">إضافة مركبة جديدة <br/><span className="text-primary font-light">إلى أسطولك</span></h1>
              <p className="text-slate-500 dark:text-gray-400 mt-2">يرجى تقديم تفاصيل دقيقة لضمان موافقة سريعة على طلبك.</p>
            </div>
          </header>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-start">
            <div className="xl:col-span-8 space-y-10">
              <form className="space-y-10">
                {/* Photo Upload Section */}
                <section className="bg-white dark:bg-[#1e293b] rounded-[32px] p-8 border border-slate-200 dark:border-slate-700 shadow-xl">
                  <h2 className="text-xl font-bold mb-8 flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">collections</span> 
                    صور المركبة
                  </h2>
                  <div className="border-2 border-dashed border-primary/40 bg-primary/5 rounded-[24px] p-12 text-center cursor-pointer mb-8 hover:bg-primary/10 transition-all group">
                    <span className="material-symbols-outlined text-5xl text-primary mb-4 group-hover:scale-110 transition-transform">cloud_upload</span>
                    <h3 className="text-xl font-bold">اسحب وأفلت الصور هنا</h3>
                    <p className="text-slate-500 text-sm mt-2">يدعم صيغ JPG, PNG (حد أقصى 5 صور)</p>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-primary shadow-lg">
                      <img src="https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" />
                      <div className="absolute top-3 right-3 bg-primary text-white text-[10px] px-2 py-1 rounded font-black uppercase">الرئيسية</div>
                      <button className="absolute bottom-2 left-2 size-8 bg-red-500 text-white rounded-lg flex items-center justify-center shadow-lg"><span className="material-symbols-outlined text-sm">delete</span></button>
                    </div>
                    {[1, 2, 3].map(i => (
                      <div key={i} className="aspect-[4/3] rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center">
                        <span className="material-symbols-outlined text-slate-300">add_a_photo</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Specs Section */}
                <section className="bg-white dark:bg-[#1e293b] rounded-[32px] p-8 border border-slate-200 dark:border-slate-700 shadow-xl">
                  <h2 className="text-xl font-bold mb-8">المواصفات الأساسية</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-black text-slate-500 px-1">الشركة المصنعة</label>
                      <select className="w-full rounded-2xl h-14 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-600 focus:ring-primary focus:border-primary px-4 font-bold">
                        <option>تويوتا</option>
                        <option>مرسيدس</option>
                        <option>بي إم دبليو</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-black text-slate-500 px-1">الموديل</label>
                      <select className="w-full rounded-2xl h-14 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-600 focus:ring-primary focus:border-primary px-4 font-bold">
                        <option>كامري 2024</option>
                        <option>أفالون 2023</option>
                        <option>لاند كروزر</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-black text-slate-500 px-1">الفئة</label>
                      <input type="text" placeholder="مثال: سيدان فاخرة" className="w-full rounded-2xl h-14 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-600 focus:ring-primary focus:border-primary px-4 font-bold" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-black text-slate-500 px-1">السعر اليومي المقترح (ر.س)</label>
                      <input type="number" placeholder="250" className="w-full rounded-2xl h-14 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-600 focus:ring-primary focus:border-primary px-4 font-bold" />
                    </div>
                  </div>
                </section>

                <div className="flex justify-end pt-6 gap-4">
                  <button type="button" onClick={() => navigate('/vendor-dash')} className="px-10 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-500 font-bold hover:bg-slate-200 transition-all">حفظ كمودة</button>
                  <button type="button" onClick={() => navigate('/vendor-dash')} className="px-12 py-4 rounded-2xl bg-primary text-white font-black hover:bg-blue-600 shadow-2xl shadow-primary/30 transition-all transform active:scale-95">حفظ ونشر المركبة</button>
                </div>
              </form>
            </div>

            {/* Preview Sidebar */}
            <div className="xl:col-span-4 hidden xl:block relative">
              <div className="sticky top-32 space-y-8">
                <div className="flex items-center gap-3 px-4">
                  <span className="size-3 rounded-full bg-accent-green animate-pulse"></span>
                  <span className="text-sm font-black">معاينة مباشرة</span>
                </div>
                <div className="bg-white dark:bg-[#1e293b] rounded-[40px] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700 transform rotate-1 scale-95 group hover:rotate-0 hover:scale-100 transition-all duration-500">
                  <div className="h-64 relative overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-black">تويوتا كامري 2024</h3>
                    <div className="flex items-center gap-2 text-slate-400 text-sm mt-2">
                      <span className="material-symbols-outlined text-sm">settings</span> أوتوماتيك • سيدان
                    </div>
                    <div className="text-3xl font-black text-primary mt-6">250 <span className="text-xs text-slate-400 font-normal">ريال / يوم</span></div>
                  </div>
                </div>
                <div className="p-6 bg-primary/5 rounded-3xl border border-primary/10">
                  <p className="text-xs text-primary leading-relaxed">
                    سيتم مراجعة بياناتك من قبل فريق الإدارة. بمجرد الموافقة، ستظهر السيارة في نتائج البحث العامة لجميع العملاء.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VendorAddVehicle;
