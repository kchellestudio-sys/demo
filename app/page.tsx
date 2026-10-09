"use client"

import EbookLanding from "@/components/ui/ebook-landing"

// ─────────────────────────────────────────────────────────────────────────────
// EDIT YOUR EBOOK HERE. Every word on the page comes from this block.
// ─────────────────────────────────────────────────────────────────────────────
const EBOOK = {
  brand: "K'Chelle",
  title: ["CEO of", "Your Life"], // one entry per line on the cover
  year: "2026",
  pitch:
    "A no-fluff playbook for running your life like a company. Set the vision, build the systems, protect your energy and make every call like the one in charge — because you are.",
  specs: ["10 chapters", "PDF & EPUB", "Printable workbook", "Goal & routine templates", "Instant download"],
  headline: ["Plan", "Build", "Own"] as [string, string, string],
  chapters: [
    "The CEO Mindset",
    "Your Life Mission",
    "Vision & Goals",
    "Time Is Capital",
    "Money Moves",
    "Energy Management",
    "Systems & Routines",
    "Your Board of Advisors",
    "The Power of No",
    "The Quarterly Review",
  ],
  bonuses: "Bonus · Printable workbook · Goal templates · Weekly CEO check-in",
  tagline: [
    { text: "Bloom" },
    { text: "on purpose", small: true },
    { text: "Build" },
    { text: "your empire", small: true },
  ],
  price: "$27",
  priceNote: "One-time · Instant download",
  ctaLabel: "Get the ebook",
  ctaHref: "#", // ← paste your Gumroad / Stan / Payhip / waitlist link here
  links: [
    { label: "INSTAGRAM" }, // add href: "https://instagram.com/yourhandle" once live
    { label: "TIKTOK" },
    { label: "SUBSTACK" },
    { label: "YOUTUBE" },
  ],
}

export default function Page() {
  return (
    <main className="w-full">
      <EbookLanding {...EBOOK} />
    </main>
  )
}
