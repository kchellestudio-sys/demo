import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Lycoris Specimen",
  description: "A scroll-scrubbed type specimen around a red chrome spider lily.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
