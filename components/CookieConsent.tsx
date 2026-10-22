'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

declare global {
  interface Window {
    _ga4Loaded?: boolean;
    dataLayer?: any[];
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';
  const STORAGE_KEY = 'sscs_cookie_consent_v1';

  const loadGA4 = () => {
    if (!GA_ID || !/^G-[A-Z0-9]+$/i.test(GA_ID)) return;
    if (window._ga4Loaded) return;
    window._ga4Loaded = true;

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer?.push(args);
    }
    gtag('js', new Date());
    gtag('config', GA_ID, {
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure',
    });
  };

  useEffect(() => {
    try {
      const consent = localStorage.getItem(STORAGE_KEY);
      if (consent === 'accepted') {
        loadGA4();
      } else if (consent === 'declined') {
        // Declined
      } else {
        const timer = setTimeout(() => setVisible(true), 800);
        return () => clearTimeout(timer);
      }
    } catch {
      // LocalStorage unavailable
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'accepted');
    } catch {}
    setVisible(false);
    loadGA4();
  };

  const handleDecline = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'declined');
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      id="cookie-consent-pill"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 rounded-full bg-[#F5EBD0] border-2 border-[#7F011F] px-5 sm:px-7 py-3.5 shadow-2xl transition-all duration-300 max-w-xl w-[92vw] sm:w-auto"
      role="region"
      aria-label="Cookie and Privacy Notice"
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6">
        {/* Notice Copy */}
        <div className="flex items-center gap-2.5 text-center sm:text-left">
          <span className="w-2 h-2 rounded-full bg-[#7F011F] shrink-0" />
          <p className="font-body text-xs text-[#2A080C] leading-snug">
            Essential cookies for catalog performance. No trackers sold.{' '}
            <Link href="/privacy-policy" className="text-[#7F011F] underline font-bold hover:opacity-80">
              Privacy
            </Link>
          </p>
        </div>

        {/* Action Buttons with Hero Pills */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={handleDecline}
            className="rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wider font-bold text-[#7F011F] border-2 border-[#7F011F] hover:bg-[#7F011F] hover:text-[#F5EBD0] transition-all duration-250 cursor-pointer"
            aria-label="Decline cookies"
          >
            Decline
          </button>

          <button
            type="button"
            onClick={handleAccept}
            className="rounded-full px-5 py-2 font-mono text-xs uppercase tracking-wider font-bold text-[#F5EBD0] border-2 border-[#7F011F] bg-[#7F011F] hover:bg-[#F5EBD0] hover:text-[#7F011F] transition-all duration-250 cursor-pointer"
            aria-label="Accept and continue with cookies"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
