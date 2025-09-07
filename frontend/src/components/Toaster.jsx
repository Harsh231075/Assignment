import React, { useEffect, useState } from 'react';

let counter = 0;
export const toast = (message, type = 'info') => {
  const detail = { id: ++counter, message, type };
  window.dispatchEvent(new CustomEvent('toast', { detail }));
};

const Toaster = () => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const onToast = (e) => {
      const t = e.detail;
      setToasts((prev) => [...prev, t]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((x) => x.id !== t.id));
      }, 3000);
    };
    window.addEventListener('toast', onToast);
    return () => window.removeEventListener('toast', onToast);
  }, []);

  const color = (type) => {
    if (type === 'success') return 'bg-green-600';
    if (type === 'error') return 'bg-red-600';
    if (type === 'warning') return 'bg-yellow-600';
    return 'bg-blue-600';
  };

  return (
    <div className="fixed top-4 right-4 z-[9999] space-y-2">
      {toasts.map((t) => (
        <div key={t.id} className={`${color(t.type)} text-white px-4 py-3 rounded-lg shadow-lg min-w-[220px]`}>{t.message}</div>
      ))}
    </div>
  );
};

export default Toaster;
