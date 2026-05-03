import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FeedbackTriage — Auto-route feedback by sentiment and urgency',
  description: 'Analyzes customer feedback sentiment and automatically routes urgent negative feedback to appropriate teams. Built for customer success and support teams.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3b687e12-6e9f-46af-b36c-28bcdf82ccdc"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
