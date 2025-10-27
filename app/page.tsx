'use client'

import { useState } from 'react'

const AI_TOOLS = [
  'Copy.ai',
  'Jasper',
  'Midjourney',
  'DALL-E',
  'Pictory',
  'Synthesia',
  'SurferSEO',
  'Anyword',
  'ChatGPT',
  'Claude',
  'Grammarly',
  'Writesonic'
]

export default function Home() {
  const [tool1, setTool1] = useState('')
  const [tool2, setTool2] = useState('')
  const [comparisonResult, setComparisonResult] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleCompare = async () => {
    if (!tool1 || !tool2) {
      alert('Bitte wähle beide KI-Tools aus')
      return
    }

    if (tool1 === tool2) {
      alert('Bitte wähle zwei verschiedene Tools aus')
      return
    }

    setLoading(true)
    try {
      const response = await fetch('/api/compare', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tool1, tool2 })
      })
      const data = await response.json()
      setComparisonResult(data)
    } catch (error) {
      console.error('Error:', error)
      alert('Ein Fehler ist aufgetreten')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-indigo-600">KIVergleich24</h1>
            <ul className="flex gap-6 text-sm font-medium">
              <li><a className="hover:text-indigo-600 transition" href="#vergleich">Vergleich</a></li>
              <li><a className="hover:text-indigo-600 transition" href="#kontakt">Kontakt</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          KIVergleich24 – Das unabhängige Vergleichsportal für KI-Tools
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Vergleiche die besten KI-Tools direkt miteinander!
        </p>
      </header>

      {/* Main Content - Comparison Tool */}
      <main className="container mx-auto px-4 py-12 flex-grow" id="vergleich">
        <section className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            KI-Tools vergleichen
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Tool 1 Dropdown */}
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-3">
                Tool 1 auswählen
              </label>
              <select
                value={tool1}
                onChange={(e) => setTool1(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 text-gray-700"
              >
                <option value="">-- Bitte wählen --</option>
                {AI_TOOLS.map((tool) => (
                  <option key={tool} value={tool}>
                    {tool}
                  </option>
                ))}
              </select>
            </div>

            {/* Tool 2 Dropdown */}
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-3">
                Tool 2 auswählen
              </label>
              <select
                value={tool2}
                onChange={(e) => setTool2(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 text-gray-700"
              >
                <option value="">-- Bitte wählen --</option>
                {AI_TOOLS.map((tool) => (
                  <option key={tool} value={tool}>
                    {tool}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={handleCompare}
              disabled={loading}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? 'Vergleiche...' : 'Jetzt vergleichen'}
            </button>
          </div>

          {/* Comparison Results */}
          {comparisonResult && (
            <div className="mt-12 space-y-6">
              <div className="border-t pt-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Vergleichsergebnis: {tool1} vs. {tool2}
                </h3>
                <div className="prose max-w-none text-gray-700">
                  <p>{comparisonResult.comparison || comparisonResult.message}</p>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Mission Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center mt-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Unsere Mission</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transparenz, Vergleich und Nutzerbewertungen – für bessere KI-Entscheidungen!
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-indigo-600">100+</div>
              <div className="text-sm text-gray-600">KI-Tools verglichen</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-indigo-600">5000+</div>
              <div className="text-sm text-gray-600">Nutzerbewertungen</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-indigo-600">100%</div>
              <div className="text-sm text-gray-600">Unabhängig</div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16" id="kontakt">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">KIVergleich24</h3>
              <p className="text-gray-400">Das unabhängige Vergleichsportal für KI-Tools</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Schnellzugriff</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a className="hover:text-white transition" href="#vergleich">KI-Vergleich</a></li>
                <li><a className="hover:text-white transition" href="#kontakt">Kontakt</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontakt & Rechtliches</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a className="hover:text-white transition" href="#">Kontakt</a></li>
                <li><a className="hover:text-white transition" href="#">Impressum</a></li>
                <li><a className="hover:text-white transition" href="#">Datenschutz</a></li>
                <li><a className="hover:text-white transition" href="#">AGB</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            © 2025 KIVergleich24. Alle Rechte vorbehalten.
          </div>
        </div>
      </footer>
    </div>
  )
}
