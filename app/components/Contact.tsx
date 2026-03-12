"use client";

import { useState } from "react";

const instruments = [
  "Violin", "Viola", "Cello", "Double Bass", "Flute", "Oboe", "Clarinet",
  "Bassoon", "French Horn", "Trumpet", "Trombone", "Tuba", "Percussion",
  "Piano", "Guitar", "Harp", "Saxophone", "Voice", "Other",
];

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
    <section id="contact" className="py-24 bg-gray-light">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">
          Contact Us
        </h2>
        <p className="mt-4 text-center text-gray-500 text-lg">
          Have questions? We&apos;d love to hear from you.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange focus:ring-1 focus:ring-orange outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange focus:ring-1 focus:ring-orange outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange focus:ring-1 focus:ring-orange outline-none transition-colors"
              />
            </div>
            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">Age</label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange focus:ring-1 focus:ring-orange outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="school" className="block text-sm font-medium text-gray-700 mb-1">School / Organization</label>
            <input
              type="text"
              id="school"
              name="school"
              value={formData.school}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange focus:ring-1 focus:ring-orange outline-none transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="instrument" className="block text-sm font-medium text-gray-700 mb-1">Instrument</label>
              <select
                id="instrument"
                name="instrument"
                value={formData.instrument}
                onChange={handleChange}
                className="w-full px-4 pr-10 py-3 rounded-xl border border-gray-300 focus:border-orange focus:ring-1 focus:ring-orange outline-none transition-colors bg-transparent appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%236b7280%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M5.23%207.21a.75.75%200%20011.06.02L10%2011.168l3.71-3.938a.75.75%200%20111.08%201.04l-4.25%204.5a.75.75%200%2001-1.08%200l-4.25-4.5a.75.75%200%2001.02-1.06z%22%20clip-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_12px_center] bg-no-repeat"
              >
                <option value="">Select instrument</option>
                {instruments.map((inst) => (
                  <option key={inst} value={inst}>{inst}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="affiliation" className="block text-sm font-medium text-gray-700 mb-1">Musical Affiliation</label>
              <input
                type="text"
                id="affiliation"
                name="affiliation"
value={formData.affiliation}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange focus:ring-1 focus:ring-orange outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange focus:ring-1 focus:ring-orange outline-none transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-orange text-white font-semibold rounded-full hover:bg-orange/90 transition-colors text-base"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
