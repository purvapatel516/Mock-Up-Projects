
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import CustomerHome from './screens/CustomerHome';
import SearchResults from './screens/SearchResults';
import CarDetails from './screens/CarDetails';
import BookingFlow from './screens/BookingFlow';
import BookingSuccess from './screens/BookingSuccess';
import VendorDashboard from './screens/VendorDashboard';
import VendorAddVehicle from './screens/VendorAddVehicle';
import AdminDirectory from './screens/AdminDirectory';
import AdminIntel from './screens/AdminIntel';

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [isDarkMode]);

  const screens = [
    { path: "/", name: "Customer Home (Landing)" },
    { path: "/search", name: "Search Results" },
    { path: "/details", name: "Car Details" },
    { path: "/booking", name: "Booking Flow" },
    { path: "/success", name: "Booking Success" },
    { path: "/vendor-dash", name: "Vendor Dashboard" },
    { path: "/vendor-add", name: "Vendor Add Vehicle" },
    { path: "/admin-dir", name: "Admin Directory" },
    { path: "/admin-intel", name: "Admin AI Intel" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-display">
      {/* Floating Navigation Switcher */}
      <div className="fixed bottom-4 right-4 z-[9999]">
        <div className="bg-black/80 backdrop-blur-md text-white p-2 rounded-xl shadow-2xl flex items-center gap-2 border border-white/20">
          <button 
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            title="Toggle Dark Mode"
          >
            <span className="material-symbols-outlined text-sm">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
          </button>
          <select 
            className="bg-transparent border-none text-xs font-mono py-1 focus:ring-0 cursor-pointer"
            value={location.pathname}
            onChange={(e) => navigate(e.target.value)}
          >
            {screens.map(s => <option key={s.path} value={s.path} className="text-black">{s.name}</option>)}
          </select>
        </div>
      </div>
      {children}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<CustomerHome />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/details" element={<CarDetails />} />
          <Route path="/booking" element={<BookingFlow />} />
          <Route path="/success" element={<BookingSuccess />} />
          <Route path="/vendor-dash" element={<VendorDashboard />} />
          <Route path="/vendor-add" element={<VendorAddVehicle />} />
          <Route path="/admin-dir" element={<AdminDirectory />} />
          <Route path="/admin-intel" element={<AdminIntel />} />
        </Routes>
      </AppLayout>
    </HashRouter>
  );
};

export default App;
