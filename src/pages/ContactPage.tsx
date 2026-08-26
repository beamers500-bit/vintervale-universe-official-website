import { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { Ornament, PlaceholderTag } from '@/components/ui/Decorations';

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="section-padding pb-12">
        <div className="container-wide text-center">
          <Ornament className="mb-8" />
          <p className="eyebrow mb-4">Reach Out</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-ink-50 text-balance">Contact</h1>
          <Ornament className="mt-8" />
          <p className="body-serif mt-8 max-w-2xl mx-auto text-ink-300">
            For inquiries regarding the Vintervale Universe — press, partnerships, adaptations, or general correspondence — reach out through the form below.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding pt-8">
        <div className="container-wide max-w-2xl">
          {submitted ? (
            <div className="card-surface rounded-sm p-12 text-center">
              <CheckCircle size={48} className="text-vintervale-400 mx-auto mb-6" />
              <h2 className="font-display text-2xl text-ink-50 mb-4">Message Received</h2>
              <p className="font-serif text-ink-400 leading-relaxed">
                Thank you for reaching out. Your message has been noted, and a response will follow in due course.
              </p>
              <Ornament className="mt-8" />
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card-surface rounded-sm p-8 sm:p-10 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-sans text-xs uppercase tracking-widest text-ink-400 mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-ink-950/60 border border-ink-700 rounded-sm px-4 py-3 font-sans text-sm text-ink-100 focus:outline-none focus:border-vintervale-500/60 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-sans text-xs uppercase tracking-widest text-ink-400 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-ink-950/60 border border-ink-700 rounded-sm px-4 py-3 font-sans text-sm text-ink-100 focus:outline-none focus:border-vintervale-500/60 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block font-sans text-xs uppercase tracking-widest text-ink-400 mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full bg-ink-950/60 border border-ink-700 rounded-sm px-4 py-3 font-sans text-sm text-ink-100 focus:outline-none focus:border-vintervale-500/60 transition-colors"
                  placeholder="What is this regarding?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-sans text-xs uppercase tracking-widest text-ink-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-ink-950/60 border border-ink-700 rounded-sm px-4 py-3 font-sans text-sm text-ink-100 focus:outline-none focus:border-vintervale-500/60 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-ink-500" />
                  <p className="font-sans text-xs text-ink-500">For the Vintervale Universe</p>
                </div>
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  <Send size={14} /> Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Publisher note */}
      <section className="pb-20">
        <div className="container-prose text-center">
          <Ornament className="mb-8" />
          <p className="font-serif text-ink-500 italic text-lg">
            The Vintervale Universe is published and maintained by Wholebook Inc. For business and rights inquiries, please use the contact form above.
          </p>
          <div className="mt-6 flex justify-center">
            <PlaceholderTag label="Direct Contact Details Forthcoming" />
          </div>
        </div>
      </section>
    </div>
  );
}
