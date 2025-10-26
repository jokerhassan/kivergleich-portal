import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'KIVergleich24 - Das unabhängige Vergleichsportal für KI-Tools',
  description: 'Entdecke die besten KI-Tools im direkten Vergleich! Tests, Marktneuheiten, Bewertungen und Tipps für Einsteiger und Profis.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
