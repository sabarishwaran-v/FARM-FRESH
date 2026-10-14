'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Mail,
  MapPin,
  Clock,
  Send,
  AlertCircle,
  Sprout,
  Info,
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function ContactContent() {
  const searchParams = useSearchParams();
  const initialSubject = searchParams.get('subject') === 'farmer' 
    ? 'farmer-partnership' 
    : 'general-inquiry';

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: initialSubject,
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errs.email = 'Please enter a valid email address (e.g., name@example.com).';
      }
    }

    if (!formData.subject) {
      errs.subject = 'Please choose a subject.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate brief interaction
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
    }, 600);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      name: '',
      email: '',
      subject: 'general-inquiry',
      message: '',
    });
    setErrors({});
  };

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100/70 text-emerald-800 text-xs font-semibold">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect & Inquire</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1b4332] tracking-tight">
            Contact the Farm-Fresh Team
          </h1>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Have questions about our farm-to-home concept, farmer partnerships, or student venture roadmap? Send us a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Form (Span 7) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-stone-200/80 p-6 sm:p-8 shadow-xs">
              {/* Prototype Form Explanation Banner */}
              <div className="mb-6 p-4 rounded-2xl bg-amber-50/90 border border-amber-200/80 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div className="text-xs text-amber-900 leading-relaxed">
                  <span className="font-bold block mb-0.5">Prototype Note:</span>
                  This contact form is a front-end demonstration prototype for the Wadhwani Foundation Venture Journey and does not currently dispatch real emails. Submitted input is validated and previewed below for evaluation.
                </div>
              </div>

              {submittedData ? (
                /* Submission Feedback Notice */
                <div className="space-y-6 py-4 animate-in fade-in duration-200">
                  <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-3">
                    <div className="flex items-center gap-2 text-stone-900 font-bold text-base">
                      <Info className="w-5 h-5 text-emerald-700" />
                      <span>Form Demonstration Result</span>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-stone-200 text-xs sm:text-sm text-stone-700 font-medium">
                      &ldquo;This contact form is a prototype demonstration and does not currently send live messages.&rdquo;
                    </div>

                    <div className="pt-2 text-xs text-stone-600 space-y-1.5 border-t border-stone-200">
                      <p className="font-semibold text-stone-900">Validated Input Preview:</p>
                      <p><strong>Name:</strong> {submittedData.name}</p>
                      <p><strong>Email:</strong> {submittedData.email}</p>
                      <p><strong>Subject:</strong> {submittedData.subject}</p>
                      <p className="line-clamp-2"><strong>Message:</strong> {submittedData.message}</p>
                    </div>
                  </div>

                  <button
                    onClick={handleReset}
                    type="button"
                    className="w-full py-3 px-5 rounded-xl bg-[#1b4332] hover:bg-[#143526] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                  >
                    Submit Another Test Message
                  </button>
                </div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Ramesh Kumar"
                      className={`w-full px-4 py-3 rounded-xl bg-stone-50 border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                        errors.name
                          ? 'border-red-400 focus:ring-red-400'
                          : 'border-stone-200 focus:ring-[#1b4332]'
                      }`}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-xs text-red-600 font-medium">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="e.g. ramesh@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-stone-50 border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                        errors.email
                          ? 'border-red-400 focus:ring-red-400'
                          : 'border-stone-200 focus:ring-[#1b4332]'
                      }`}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-xs text-red-600 font-medium">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5"
                    >
                      Subject Topic <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#1b4332] focus:bg-white transition-all cursor-pointer"
                    >
                      <option value="general-inquiry">General Inquiry</option>
                      <option value="farmer-partnership">Local Farmer / Grower Partnership</option>
                      <option value="apartment-order">Apartment Bulk Community Order</option>
                      <option value="venture-feedback">Wadhwani Venture Feedback / Mentorship</option>
                    </select>
                    {errors.subject && (
                      <p className="mt-1 text-xs text-red-600 font-medium">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Share your question, produce details, or feedback..."
                      className={`w-full px-4 py-3 rounded-xl bg-stone-50 border text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:bg-white transition-all resize-y ${
                        errors.message
                          ? 'border-red-400 focus:ring-red-400'
                          : 'border-stone-200 focus:ring-[#1b4332]'
                      }`}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-xs text-red-600 font-medium">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#1b4332] hover:bg-[#143526] text-white font-semibold text-sm transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 active:scale-[0.99]"
                  >
                    {isSubmitting ? (
                      <span>Validating input...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Demonstration Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Contact Placeholders & Info (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Notice Card */}
            <div className="bg-[#1b4332] text-white p-7 rounded-3xl space-y-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-white/10 text-emerald-300 flex items-center justify-center">
                <Sprout className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold">
                Student Venture Prototype
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-normal">
                Farm-Fresh is being developed as an early-stage concept for the Wadhwani Foundation Venture Journey. We do not currently operate a live telephone exchange or commercial office.
              </p>
            </div>

            {/* Clear Placeholders Card */}
            <div className="bg-white rounded-3xl border border-stone-200/80 p-6 sm:p-7 shadow-xs space-y-5">
              <h2 className="text-sm font-bold text-stone-900 uppercase tracking-wider">
                Demonstration Touchpoints
              </h2>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#1b4332] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-semibold text-stone-900">Prototype Email</span>
                    <span className="text-xs font-mono text-stone-600">
                      [Placeholder: contact@farmfresh-prototype.local]
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#1b4332] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-semibold text-stone-900">Venture Location</span>
                    <span className="text-xs text-stone-600">
                      [Placeholder: University Venture Lab / Student Incubator]
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#1b4332] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-semibold text-stone-900">Pilot Evaluation Hours</span>
                    <span className="text-xs text-stone-600">
                      Mon – Fri, 10:00 AM – 5:00 PM (IST)
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100">
                <p className="text-[11px] text-stone-500 leading-relaxed">
                  To connect a live transactional email dispatcher (e.g. Resend, SendGrid, or Formspree), see the configuration instructions in the repository <code>README.md</code>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center text-sm text-stone-500">
          Loading contact form...
        </div>
      }
    >
      <ContactContent />
    </Suspense>
  );
}
