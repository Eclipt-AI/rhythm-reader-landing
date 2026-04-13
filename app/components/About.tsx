import { ReactNode } from "react";
import { Eye, ZoomIn, Volume2, Check, Sparkles, Plus, Minus, Music, Repeat, SkipBack, Maximize2 } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import SectionBadge from "./SectionBadge";

interface FeatureBlockProps {
  badge: string;
  heading: string;
  description: string;
  callouts: string[];
  visual: ReactNode;
  reversed?: boolean;
  index: number;
}

function FeatureBlock({
  badge,
  heading,
  description,
  callouts,
  visual,
  reversed,
  index,
}: FeatureBlockProps) {
  return (
    <div
      className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-10 lg:gap-16`}
    >
      <AnimateOnScroll className="flex-1 min-w-0" delay={index * 0.05}>
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-light text-primary text-xs font-semibold mb-4">
          {badge}
        </span>
        <h3 className="text-2xl md:text-3xl font-extrabold text-dark font-[family-name:var(--font-plus-jakarta)] tracking-tight mb-4">
          {heading}
        </h3>
        <p className="text-body leading-relaxed mb-6 max-w-lg">{description}</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {callouts.map((c, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <div className="mt-0.5 w-5 h-5 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 text-primary" strokeWidth={3} />
              </div>
              <span className="text-sm text-body">{c}</span>
            </div>
          ))}
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll
        className="flex-1 min-w-0 w-full"
        delay={index * 0.05 + 0.15}
      >
        <div className="rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
          {visual}
        </div>
      </AnimateOnScroll>
    </div>
  );
}

/* ---- Visual mockups (decorative, no copy) ---- */

/**
 * HighlightVisual — mirrors the app's score screen.
 * - 5-line staff with treble clef
 * - Stylized notes (quarter + beamed eighths) on the stave
 * - The "playing" note is filled in #F5761A (no ring, matches .note.playing)
 * - Vertical orange cursor bar (4px) with a circular knob beneath (draggable look)
 */
function HighlightVisual() {
  // Note definitions: x-position on stave, y-offset (negative = higher), playing flag, stem direction
  type Note = { x: number; y: number; playing?: boolean; beamTo?: number };
  const notes: Note[] = [
    { x: 55, y: 4 },
    { x: 80, y: 0 },
    { x: 105, y: -4 },
    { x: 135, y: -8, playing: true }, // currently playing
    { x: 165, y: -4 },
    { x: 190, y: 0 },
    { x: 215, y: -2 },
    { x: 245, y: 2 },
  ];

  const STAVE_TOP = 30;
  const STAVE_GAP = 7;
  const STAVE_MID = STAVE_TOP + STAVE_GAP * 2;
  const cursorX = 135;

  return (
    <div className="p-5 bg-[#fef8f4]">
      <div className="rounded-lg border border-[#e4e4e4] bg-white p-4 shadow-sm">
        {/* Top bar — song title (mimics app header) */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center">
              <Music className="w-3.5 h-3.5 text-primary" />
            </div>
            <span className="text-xs font-bold text-[#111818]">
              Movement I
            </span>
          </div>
          <span className="text-[10px] font-medium text-[#828282]">
            Bar 3 · Beat 2
          </span>
        </div>

        {/* Stave */}
        <svg
          viewBox="0 0 280 110"
          className="w-full h-auto"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* 5 staff lines */}
          {[0, 1, 2, 3, 4].map((i) => (
            <line
              key={i}
              x1="10"
              x2="270"
              y1={STAVE_TOP + i * STAVE_GAP}
              y2={STAVE_TOP + i * STAVE_GAP}
              stroke="#111818"
              strokeWidth="0.8"
            />
          ))}

          {/* Treble clef (stylized) */}
          <text
            x="14"
            y={STAVE_MID + 10}
            fontSize="34"
            fill="#111818"
            fontFamily="serif"
          >
            𝄞
          </text>

          {/* Time signature */}
          <text
            x="42"
            y={STAVE_TOP + STAVE_GAP + 5}
            fontSize="12"
            fontWeight="700"
            fill="#111818"
            fontFamily="serif"
          >
            4
          </text>
          <text
            x="42"
            y={STAVE_TOP + STAVE_GAP * 3 + 5}
            fontSize="12"
            fontWeight="700"
            fill="#111818"
            fontFamily="serif"
          >
            4
          </text>

          {/* Bar lines */}
          <line x1="125" x2="125" y1={STAVE_TOP} y2={STAVE_TOP + STAVE_GAP * 4} stroke="#111818" strokeWidth="0.8" />
          <line x1="205" x2="205" y1={STAVE_TOP} y2={STAVE_TOP + STAVE_GAP * 4} stroke="#111818" strokeWidth="0.8" />

          {/* Notes */}
          {notes.map((n, i) => {
            const cy = STAVE_MID + n.y;
            const fill = n.playing ? "#F5761A" : "#111818";
            const stemUp = n.y >= 0;
            return (
              <g key={i}>
                {/* notehead */}
                <ellipse
                  cx={n.x}
                  cy={cy}
                  rx="4"
                  ry="3"
                  fill={fill}
                  transform={`rotate(-20 ${n.x} ${cy})`}
                />
                {/* stem */}
                <line
                  x1={stemUp ? n.x + 3.5 : n.x - 3.5}
                  x2={stemUp ? n.x + 3.5 : n.x - 3.5}
                  y1={cy}
                  y2={cy + (stemUp ? -18 : 18)}
                  stroke={fill}
                  strokeWidth="1.2"
                />
              </g>
            );
          })}

          {/* Playback cursor — vertical bar + knob (matches app) */}
          <g>
            <rect
              x={cursorX - 2}
              y={STAVE_TOP - 6}
              width="4"
              height={STAVE_GAP * 4 + 12}
              fill="#F5761A"
              opacity="0.8"
              rx="1"
            />
            <circle
              cx={cursorX}
              cy={STAVE_TOP + STAVE_GAP * 4 + 14}
              r="6"
              fill="#F5761A"
            />
            <circle
              cx={cursorX}
              cy={STAVE_TOP + STAVE_GAP * 4 + 14}
              r="2.5"
              fill="white"
            />
          </g>
        </svg>

        {/* Now-playing footer */}
        <div className="mt-3 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] font-semibold text-primary">
            Now playing
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * AccessibilityVisual — mirrors the "Score scale" bottom sheet.
 * - Rounded-top white sheet with a handle bar
 * - Title "Score scale" + subtitle "Tap to change reading size"
 * - Minus circle (orange), Default pill (light orange + note icon), Plus circle (orange)
 * - Preview row underneath shows progressively larger notes
 */
function AccessibilityVisual() {
  return (
    <div className="p-5 bg-[#fef8f4]">
      <div className="rounded-lg border border-[#e4e4e4] bg-white shadow-sm overflow-hidden">
        {/* Score preview (above sheet) */}
        <div className="p-4 bg-white border-b border-[#e4e4e4]">
          <svg viewBox="0 0 280 60" className="w-full h-auto">
            {[0, 1, 2, 3, 4].map((i) => (
              <line
                key={i}
                x1="10"
                x2="270"
                y1={15 + i * 6}
                y2={15 + i * 6}
                stroke="#111818"
                strokeWidth="0.6"
              />
            ))}
            <text x="14" y="40" fontSize="26" fill="#111818" fontFamily="serif">𝄞</text>
            {[60, 85, 110, 140, 170, 195, 225, 250].map((x, i) => {
              const y = 27 + (i % 4) * 3;
              return (
                <g key={i}>
                  <ellipse cx={x} cy={y} rx="3.5" ry="2.5" fill="#111818" transform={`rotate(-20 ${x} ${y})`} />
                  <line x1={x + 3} x2={x + 3} y1={y} y2={y - 14} stroke="#111818" strokeWidth="1" />
                </g>
              );
            })}
          </svg>
        </div>

        {/* Bottom sheet */}
        <div className="bg-white pt-3 pb-5 px-6">
          {/* Sheet handle */}
          <div className="mx-auto w-9 h-[5px] rounded-full bg-[#d9d9d9] mb-4" />

          <p className="text-center text-sm font-bold text-[#111818]">Score scale</p>
          <p className="text-center text-xs text-[#828282] mt-1">
            Tap to change reading size
          </p>

          {/* Three-button row */}
          <div className="mt-5 flex items-center justify-between gap-3">
            {/* Minus */}
            <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-md shadow-primary/30">
              <Minus className="w-5 h-5 text-white" strokeWidth={3} />
            </button>

            {/* Default pill */}
            <div className="flex-1 flex items-center justify-center gap-2 h-10 rounded-full bg-primary/5 border border-primary/10">
              <Music className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold text-[#111818]">Default</span>
            </div>

            {/* Plus */}
            <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-md shadow-primary/30">
              <Plus className="w-5 h-5 text-white" strokeWidth={3} />
            </button>
          </div>

          {/* Size preview dots */}
          <div className="mt-5 flex items-end justify-center gap-3">
            {[5, 7, 9, 11, 13].map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5">
                <span
                  className={`rounded-full ${i === 2 ? "bg-primary" : "bg-[#111818]/70"}`}
                  style={{ width: s, height: s }}
                />
                <span className="text-[9px] text-[#828282] font-medium">
                  {["S", "M", "L", "XL", "XXL"][i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * PlaybackVisual — mirrors the player toolbar (`player_toolbar.dart`).
 * - Rounded-pill white container with #e4e4e4 border
 * - 5 evenly-spaced transport controls: Repeat, Previous, Play (orange circle), Cursor toggle, Fullscreen
 * - Above the toolbar: a score preview with the playback cursor for context
 */
function PlaybackVisual() {
  return (
    <div className="p-5 bg-[#fef8f4]">
      <div className="space-y-4">
        {/* Score preview with cursor */}
        <div className="rounded-lg border border-[#e4e4e4] bg-white p-4 shadow-sm">
          <svg viewBox="0 0 280 70" className="w-full h-auto">
            {[0, 1, 2, 3, 4].map((i) => (
              <line
                key={i}
                x1="10"
                x2="270"
                y1={18 + i * 7}
                y2={18 + i * 7}
                stroke="#111818"
                strokeWidth="0.7"
              />
            ))}
            <text x="14" y="46" fontSize="30" fill="#111818" fontFamily="serif">𝄞</text>
            {[60, 90, 120, 155, 185, 215, 245].map((x, i) => {
              const y = 32 + (i % 4) * 3;
              const playing = i === 2;
              return (
                <g key={i}>
                  <ellipse
                    cx={x}
                    cy={y}
                    rx="4"
                    ry="3"
                    fill={playing ? "#F5761A" : "#111818"}
                    transform={`rotate(-20 ${x} ${y})`}
                  />
                  <line
                    x1={x + 3.5}
                    x2={x + 3.5}
                    y1={y}
                    y2={y - 16}
                    stroke={playing ? "#F5761A" : "#111818"}
                    strokeWidth="1.1"
                  />
                </g>
              );
            })}
            {/* Cursor */}
            <rect x="118" y="12" width="4" height="40" fill="#F5761A" opacity="0.8" rx="1" />
            <circle cx="120" cy="58" r="5" fill="#F5761A" />
          </svg>
          <div className="mt-3 flex items-center justify-between text-[10px] font-medium">
            <span className="text-[#828282]">0:42</span>
            <span className="inline-flex items-center gap-1.5 text-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Playing
            </span>
            <span className="text-[#828282]">2:18</span>
          </div>
        </div>

        {/* Player toolbar — pill */}
        <div className="rounded-full bg-white border border-[#e4e4e4] shadow-sm h-[60px] px-4 flex items-center justify-between">
          <button className="w-9 h-9 rounded-full flex items-center justify-center text-primary hover:bg-primary/10 transition-colors">
            <Repeat className="w-5 h-5" />
          </button>
          <button className="w-9 h-9 rounded-full flex items-center justify-center text-[#2b2b2b] hover:bg-[#2b2b2b]/5 transition-colors">
            <SkipBack className="w-5 h-5" />
          </button>
          {/* Play button (center, orange filled) */}
          <button className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
            <span className="block w-0 h-0 border-l-[10px] border-l-white border-y-[7px] border-y-transparent ml-1" />
          </button>
          <button className="w-9 h-9 rounded-full flex items-center justify-center text-[#2b2b2b] hover:bg-[#2b2b2b]/5 transition-colors">
            <Eye className="w-5 h-5" />
          </button>
          <button className="w-9 h-9 rounded-full flex items-center justify-center text-[#2b2b2b] hover:bg-[#2b2b2b]/5 transition-colors">
            <Maximize2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const features: Omit<FeatureBlockProps, "index">[] = [
    {
      badge: "Follow Along",
      heading: "Notes Highlighted",
      description:
        "Notes are highlighted as they are played so you never lose your place.",
      callouts: [
        "Real-time note tracking",
        "Bar & beat indicators",
        "Never lose your place",
        "Works with any tempo",
      ],
      visual: <HighlightVisual />,
    },
    {
      badge: "Accessibility",
      heading: "Enlarge for Accessibility",
      description:
        "Notes, bars, and scores can be enlarged for optical impairments.",
      callouts: [
        "Adjustable note size",
        "High-contrast display",
        "Pinch to zoom",
        "Full-screen mode",
      ],
      visual: <AccessibilityVisual />,
      reversed: true,
    },
    {
      badge: "Ear Training",
      heading: "Playback for Ear-Trained Musicians",
      description:
        "The playback feature allows ear-trained musicians to learn and play without reading music.",
      callouts: [
        "Instrument voicing",
        "Tempo control",
        "Loop any section",
        "Crystal-clear audio",
      ],
      visual: <PlaybackVisual />,
    },
  ];

  return (
    <section id="about" className="py-24 bg-surface">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimateOnScroll>
            <SectionBadge icon={<Sparkles className="w-4 h-4 text-primary" />}>
              Features
            </SectionBadge>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark font-[family-name:var(--font-plus-jakarta)] tracking-tight leading-tight">
              Your Music, <span className="text-primary">Anywhere</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <p className="mt-5 text-body text-lg leading-relaxed">
              Access your music on the go with efficiency and ease.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Intro icon cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {[
            { icon: Eye, title: "Highlighted", text: "Follow the notes in real time." },
            { icon: ZoomIn, title: "Accessible", text: "Scale the score to fit your needs." },
            { icon: Volume2, title: "Playback", text: "Hear every line, note, and rest." },
          ].map((c, i) => {
            const Icon = c.icon;
            return (
              <AnimateOnScroll
                key={c.title}
                delay={0.1 + i * 0.1}
                className="rounded-2xl bg-white border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-dark font-[family-name:var(--font-plus-jakarta)] mb-2">
                  {c.title}
                </h3>
                <p className="text-body text-sm leading-relaxed">{c.text}</p>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* Split-pane feature blocks */}
        <div className="space-y-24">
          {features.map((f, i) => (
            <FeatureBlock key={f.heading} {...f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
