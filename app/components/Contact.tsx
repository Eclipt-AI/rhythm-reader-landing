"use client";

import { useState } from "react";
import { Mail, Send, Instagram, Lightbulb } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import SectionBadge from "./SectionBadge";

const instruments = [
  "Violin", "Viola", "Cello", "Double Bass", "Flute", "Oboe", "Clarinet",
  "Bassoon", "French Horn", "Trumpet", "Trombone", "Tuba", "Percussion",
  "Piano", "Guitar", "Harp", "Saxophone", "Voice", "Other",
];

const countries = [
  "United States", "Canada", "United Kingdom", "Australia",
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia",
  "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize",
  "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
  "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Central African Republic", "Chad",
  "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba",
  "Cyprus", "Czech Republic", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica",
  "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia",
  "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
  "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary",
  "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan",
  "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia",
  "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
  "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius",
  "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique",
  "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
  "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama",
  "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania",
  "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa",
  "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles",
  "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
  "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland",
  "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga",
  "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine",
  "United Arab Emirates", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
  "Yemen", "Zambia", "Zimbabwe", "Other",
];

const INSTAGRAM_URL = "https://www.instagram.com/rhythmreader";
const TIKTOK_URL = "https://www.tiktok.com/@rhythmreader0";

const inputClass =
  "w-full px-4 py-3 rounded-lg border border-gray-200 bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-dark placeholder:text-muted";

const selectClass = `${inputClass} pr-10 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%236b7280%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M5.23%207.21a.75.75%200%20011.06.02L10%2011.168l3.71-3.938a.75.75%200%20111.08%201.04l-4.25%204.5a.75.75%200%2001-1.08%200l-4.25-4.5a.75.75%200%2001.02-1.06z%22%20clip-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')] bg-[length:20px] bg-[right_12px_center] bg-no-repeat`;

const labelClass = "block text-sm font-medium text-dark mb-1.5";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

function YesNo({
  name,
  label,
  value,
  onChange,
}: {
  name: string;
  label: string;
  value: string;
  onChange: (name: string, value: string) => void;
}) {
  return (
    <fieldset>
      <legend className="block text-sm font-medium text-dark mb-2">{label}</legend>
      <div className="flex gap-3">
        {["Yes", "No"].map((opt) => {
          const selected = value === opt;
          return (
            <label
              key={opt}
              className={`inline-flex items-center justify-center h-10 px-6 rounded-lg border text-sm font-semibold cursor-pointer transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-primary/40 ${
                selected
                  ? "bg-primary border-primary text-white"
                  : "bg-white border-gray-200 text-body hover:border-primary/40"
              }`}
            >
              <input
                type="radio"
                name={name}
                value={opt}
                checked={selected}
                onChange={() => onChange(name, opt)}
                className="sr-only"
              />
              {opt}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    school: "",
    country: "",
    city: "",
    state: "",
    instrument: "",
    affiliation: "",
    ambassador: "",
    advisoryBoard: "",
    message: "",
  });

  const setField = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setField(e.target.name, e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Contact from Rhythm Reader");
    const body = encodeURIComponent(
      [
        `Name: ${formData.firstName} ${formData.lastName}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone}`,
        `Age: ${formData.age}`,
        `School/Organization: ${formData.school}`,
        `Country: ${formData.country}`,
        `City: ${formData.city}`,
        `State: ${formData.state}`,
        `Instrument: ${formData.instrument}`,
        `Musical Affiliation: ${formData.affiliation}`,
        `Interested in becoming a Rhythm Reader Ambassador: ${formData.ambassador}`,
        `Would like to join the Musician Advisory Board: ${formData.advisoryBoard}`,
        "",
        "Message:",
        formData.message,
      ].join("\n")
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
              Interested in sharing Rhythm Reader with your ensemble? We&apos;d love to help! Drop us a line anytime.
            </p>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll delay={0.2}>
          <form
            onSubmit={handleSubmit}
            className="mt-12 space-y-5 rounded-2xl bg-white border border-gray-100 p-6 sm:p-8 shadow-sm"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="firstName" className={labelClass}>First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  autoComplete="given-name"
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
                  autoComplete="family-name"
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
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-5">
              <div>
                <label htmlFor="age" className={labelClass}>Age</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  min={1}
                  value={formData.age}
                  onChange={handleChange}
                  className={inputClass}
                />
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
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div>
                <label htmlFor="country" className={labelClass}>Country</label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  value={formData.country}
                  onChange={handleChange}
                  className={selectClass}
                >
                  <option value="">Select country</option>
                  {countries.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="city" className={labelClass}>City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  autoComplete="address-level2"
                  value={formData.city}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="state" className={labelClass}>State</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  autoComplete="address-level1"
                  value={formData.state}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="instrument" className={labelClass}>Instrument</label>
                <select
                  id="instrument"
                  name="instrument"
                  value={formData.instrument}
                  onChange={handleChange}
                  className={selectClass}
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <YesNo
                name="ambassador"
                label="Interested in becoming a Rhythm Reader Ambassador?"
                value={formData.ambassador}
                onChange={setField}
              />
              <YesNo
                name="advisoryBoard"
                label="Would you like to join our Musician Advisory Board?"
                value={formData.advisoryBoard}
                onChange={setField}
              />
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

        {/* Follow + suggestion */}
        <AnimateOnScroll delay={0.25}>
          <div className="mt-8 grid grid-cols-1 gap-5">
            <div className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm flex flex-col items-center text-center">
              <h3 className="text-lg font-bold text-dark font-[family-name:var(--font-plus-jakarta)]">
                Follow
              </h3>
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Rhythm Reader on Instagram"
                  className="inline-flex items-center gap-2 h-11 px-5 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
                >
                  <Instagram className="w-5 h-5" />
                  Instagram
                </a>
                <a
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Rhythm Reader on TikTok"
                  className="inline-flex items-center gap-2 h-11 px-5 rounded-lg bg-dark text-white text-sm font-semibold hover:bg-black transition-colors"
                >
                  <TikTokIcon className="w-5 h-5" />
                  TikTok
                </a>
              </div>
            </div>
            <div className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-primary" />
              </div>
              <p className="mt-3 text-sm font-semibold text-dark">
                Have a suggestion? We&apos;d love to hear from you!
              </p>
              <a
                href="mailto:hello@rhythmreader.com"
                className="mt-4 inline-flex items-center gap-2 min-h-11 px-5 py-2 rounded-lg bg-white text-primary text-sm font-semibold border-2 border-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                Email Us: hello@rhythmreader.com
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
