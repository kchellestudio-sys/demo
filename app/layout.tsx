import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "CEO of Your Life — K'Chelle",
  description: "The no-fluff playbook for running your life like a company. A new ebook by K'Chelle.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
