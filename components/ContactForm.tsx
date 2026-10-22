'use client';

import React, { useState, useRef } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');

  const [errors, setErrors] = useState<{ name?: string; phone?: string; message?: string }>({});
  const [status, setStatus] = useState<{ message: string; type: 'success' | 'warning' | 'error' } | null>(null);

  const lastSubmissionTime = useRef(0);
  const RATE_LIMIT_MS = 30000;

  const validatePhone = (p: string) => {
    const clean = p.replace(/\D/g, '');
    return /^[6-9]\d{9}$/.test(clean);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Honeypot check
    if (honeypot.trim() !== '') {
      return;
    }

    // 2. Rate limit check
    const now = Date.now();
    if (now - lastSubmissionTime.current < RATE_LIMIT_MS) {
      const remainingSec = Math.ceil((RATE_LIMIT_MS - (now - lastSubmissionTime.current)) / 1000);
      setStatus({
        message: `Rate limit active: Please wait ${remainingSec} seconds before submitting another request.`,
        type: 'warning',
      });
      return;
    }

    // 3. Validation checks
    const newErrors: { name?: string; phone?: string; message?: string } = {};
    const nameVal = name.trim();
    const phoneVal = phone.trim();
    const messageVal = message.trim();

    if (!nameVal) {
      newErrors.name = 'Please enter your full name.';
    }

    if (!phoneVal) {
      newErrors.phone = 'Please enter your 10-digit mobile number.';
    } else if (!validatePhone(phoneVal)) {
      newErrors.phone = 'Please enter a valid 10-digit Indian phone number starting with 6, 7, 8, or 9.';
    }

    if (!messageVal) {
      newErrors.message = 'Please specify your material requirement or message.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    lastSubmissionTime.current = now;

    const prefilledText = [
      `*CALLBACK REQUEST — Shree Shiv Construction & Steel*`,
      `*Name:* ${nameVal}`,
      `*Phone:* +91 ${phoneVal}`,
      `*Requirement:* ${messageVal}`,
      `*Source:* Website Contact Form (Bhilwara)`,
    ].join('\n');

    const whatsappUrl = `https://wa.me/918278643303?text=${encodeURIComponent(prefilledText)}`;

    setStatus({
      message: 'Opening WhatsApp with your prefilled callback details...',
      type: 'success',
    });

    window.open(whatsappUrl, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Honeypot Field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_fax">Leave this field blank</label>
        <input
          type="text"
          id="company_fax"
          name="company_fax"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {/* Name Field */}
      <div>
        <label htmlFor="cb-name" className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#7F011F] block mb-2">
          Full Name <span className="text-[#7F011F]">*</span>
        </label>
        <input
          type="text"
          id="cb-name"
          name="name"
          placeholder="e.g. Ramesh Sharma"
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (errors.name) setErrors({ ...errors, name: undefined });
          }}
          className="w-full bg-[#F5EBD0] border-2 border-[#7F011F] px-4 py-3.5 text-sm text-[#7F011F] placeholder-[#7F011F]/50 focus:outline-none focus:ring-2 focus:ring-[#7F011F] transition-colors"
        />
        {errors.name && <span className="text-xs font-mono text-[#7F011F] font-bold mt-1.5 block">{errors.name}</span>}
      </div>

      {/* 10-Digit Phone Field */}
      <div>
        <label htmlFor="cb-phone" className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#7F011F] block mb-2">
          10-Digit Mobile Number <span className="text-[#7F011F]">*</span>
        </label>
        <div className="relative flex">
          <span className="inline-flex items-center px-4 bg-[#ECE0C3] text-[#7F011F] text-xs font-mono font-bold border-2 border-r-0 border-[#7F011F] select-none">
            +91
          </span>
          <input
            type="tel"
            id="cb-phone"
            name="phone"
            maxLength={10}
            placeholder="9876543210"
            required
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              if (errors.phone) setErrors({ ...errors, phone: undefined });
            }}
            className="w-full bg-[#F5EBD0] border-2 border-[#7F011F] px-4 py-3.5 text-sm font-mono text-[#7F011F] placeholder-[#7F011F]/50 focus:outline-none focus:ring-2 focus:ring-[#7F011F] transition-colors"
          />
        </div>
        {errors.phone && <span className="text-xs font-mono text-[#7F011F] font-bold mt-1.5 block">{errors.phone}</span>}
      </div>

      {/* Material Requirement Field */}
      <div>
        <label htmlFor="cb-message" className="font-mono text-xs uppercase tracking-[0.2em] font-bold text-[#7F011F] block mb-2">
          Material Requirement / Message <span className="text-[#7F011F]">*</span>
        </label>
        <textarea
          id="cb-message"
          name="message"
          rows={3}
          placeholder="e.g. Need price for 12mm & 16mm Kay2 Xenox TMT bars (approx 2 tons) + binding wire for house in Bhilwara."
          required
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            if (errors.message) setErrors({ ...errors, message: undefined });
          }}
          className="w-full bg-[#F5EBD0] border-2 border-[#7F011F] px-4 py-3.5 text-sm text-[#7F011F] placeholder-[#7F011F]/50 focus:outline-none focus:ring-2 focus:ring-[#7F011F] transition-colors"
        />
        {errors.message && <span className="text-xs font-mono text-[#7F011F] font-bold mt-1.5 block">{errors.message}</span>}
      </div>

      {/* Form Status Banner */}
      {status && (
        <div
          className="p-3.5 font-mono text-xs font-bold border-2 border-[#7F011F] bg-[#F5EBD0] text-[#7F011F] block"
        >
          {status.message}
        </div>
      )}

      {/* Hero Pill Submit Button */}
      <button
        type="submit"
        id="submit-btn"
        className="w-full inline-flex items-center justify-center font-mono uppercase tracking-[0.18em] text-xs sm:text-sm font-black px-8 py-4 rounded-full bg-[#7F011F] text-[#F5EBD0] border-2 border-[#7F011F] hover:bg-[#F5EBD0] hover:text-[#7F011F] transition-all duration-250 cursor-pointer active:scale-95 shadow-md focus:outline-none focus:ring-2 focus:ring-[#7F011F]"
      >
        <svg className="w-4 h-4 mr-2.5 inline-block fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.149.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.768-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.941-.708-1.793s.448-1.273.607-1.446c.16-.175.348-.217.464-.217l.333.006c.107.005.249-.041.389.296.145.348.494 1.202.537 1.29.044.087.073.188.015.304-.058.116-.087.189-.174.29-.087.102-.183.227-.261.305-.088.087-.179.182-.077.357.101.174.45 1.055 1.291 1.803.626.557 1.155.73 1.32.812.165.082.261.07.36-.044.098-.114.421-.49.534-.658.113-.169.227-.142.381-.085.155.057.982.463 1.15.547.168.084.281.127.322.197.042.07.042.408-.102.813z" />
        </svg>
        <span>Submit &amp; Open WhatsApp Callback</span>
      </button>
    </form>
  );
}
