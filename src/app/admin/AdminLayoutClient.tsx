"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { PHP_API_BASE, AUTH_STORAGE_KEY } from "@/lib/api-config";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin/login";
  const [checking, setChecking] = useState(!isLoginPage);

  const checkAuth = useCallback(async () => {
    const token = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!token) {
      router.replace("/admin/login");
      return;
    }

    try {
      const res = await fetch(`${PHP_API_BASE}/auth.php`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) {
        localStorage.removeItem(AUTH_STORAGE_KEY);
        router.replace("/admin/login");
      } else {
        setChecking(false);
      }
    } catch {
      // Network error — still allow access if token exists (offline mode)
      setChecking(false);
    }
  }, [router]);

  useEffect(() => {
    if (!isLoginPage) {
      checkAuth();
    }
  }, [isLoginPage, checkAuth]);

  const handleLogout = async () => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    router.push("/admin/login");
  };

  // Login page has no shell
  if (isLoginPage) {
    return <>{children}</>;
  }

  // Loading during auth check
  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-[#293C88] border-t-transparent rounded-full animate-spin" />
          <span className="text-gray-500 text-sm">Memeriksa autentikasi...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      {/* Top nav */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#293C88] rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-[#FED700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <span className="font-bold text-[#293C88] text-lg">CMS Artikel</span>
            <span className="hidden sm:inline-block text-gray-300">|</span>
            <span className="hidden sm:inline-block text-xs text-gray-400">Edelweiss Learning Center</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:flex items-center gap-1.5 text-sm text-emerald-600">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              Database: MySQL DomaiNesia
            </span>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 text-sm text-red-600 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg transition-colors font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}
