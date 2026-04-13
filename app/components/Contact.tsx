"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import SectionBadge from "./SectionBadge";

const instruments = [
  "Violin", "Viola", "Cello", "Double Bass", "Flute", "Oboe", "Clarinet",
  "Bassoon", "French Horn", "Trumpet", "Trombone", "Tuba", "Percussion",
  "Piano", "Guitar", "Harp", "Saxophone", "Voice", "Other",
];

const inputClass =
  "w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-dark placeholder:text-muted";

const labelClass = "block text-sm font-medium text-dark mb-1.5";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    school: "",
    instrument: "",
    affiliation: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Contact from Rhythm Reader");
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nAge: ${formData.age}\nSchool/Organization: ${formData.school}\nInstrument: ${formData.instrument}\nMusical Affiliation: ${formData.affiliation}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:hello@rhythmreader.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-surface">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center">
          <AnimateOnScroll>
            <SectionBadge icon={<Mail className="w-4 h-4 text-primary" />}>
              Contact
            </SectionBadge>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark font-[family-name:var(--font-plus-jakarta)] tracking-tight leading-tight">
              Contact <span className="text-primary">Us</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="mt-5 text-body text-lg">
              Have questions? We&apos;d love to hear from you.
            </p>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll delay={0.2}>
          <form
            onSubmit={handleSubmit}
            className="mt-12 space-y-5 rounded-2xl bg-white border border-gray-100 p-8 shadow-sm"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="firstName" className={labelClass}>First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="lastName" className={labelClass}>Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="email" className={labelClass}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="age" className={labelClass}>Age</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="school" className={labelClass}>School / Organization</label>
              <input
                type="text"
                id="school"
                name="school"
                value={formData.school}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="instrument" className={labelClass}>Instrument</label>
                <select
                  id="instrument"
                  name="instrument"
                  value={formData.instrument}
                  onChange={handleChange}
                  className={`${inputClass} pr-10 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%236b7280%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M5.23%207.21a.75.75%200%20011.06.02L10%2011.168l3.71-3.938a.75.75%200%20111.08%201.04l-4.25%204.5a.75.75%200%2001-1.08%200l-4.25-4.5a.75.75%200%2001.02-1.06z%22%20clip-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_12px_center] bg-no-repeat`}
                >
                  <option value="">Select instrument</option>
                  {instruments.map((inst) => (
                    <option key={inst} value={inst}>{inst}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="affiliation" className={labelClass}>Musical Affiliation</label>
                <input
                  type="text"
                  id="affiliation"
                  name="affiliation"
                  value={formData.affiliation}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 h-12 rounded-lg bg-primary text-white font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </form>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
