export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-indigo-600">KIVergleich24</h1>
            <ul className="flex gap-6 text-sm font-medium">
              <li><a href="#text-ki" className="hover:text-indigo-600 transition">Text-KI</a></li>
              <li><a href="#bilder-ki" className="hover:text-indigo-600 transition">Bilder-KI</a></li>
              <li><a href="#video-ki" className="hover:text-indigo-600 transition">Video-KI</a></li>
              <li><a href="#seo-ki" className="hover:text-indigo-600 transition">SEO-KI</a></li>
              <li><a href="#kontakt" className="hover:text-indigo-600 transition">Kontakt</a></li>
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
          Entdecke die besten KI-Tools im direkten Vergleich! 
          Tests, Marktneuheiten, Bewertungen und Tipps für Einsteiger und Profis.
        </p>
      </header>
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 flex-grow">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Top-Kategorien</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Text-KI Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition transform hover:-translate-y-1" id="text-ki">
              <div className="text-3xl mb-4">✍️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Text-KI</h3>
              <p className="text-gray-600 mb-4">Vergleiche die besten KI-Tools für Texterstellung</p>
              <div className="border-t pt-4">
                <a href="/vergleich-copyai-vs-jasper" className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 hover:underline">
                  Copy.ai vs. Jasper →
                </a>
              </div>
            </div>
            {/* Bilder-KI Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition transform hover:-translate-y-1" id="bilder-ki">
              <div className="text-3xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Bilder-KI</h3>
              <p className="text-gray-600 mb-4">Kreative Bildgenerierung im Vergleich</p>
              <div className="border-t pt-4">
                <a href="/vergleich-midjourney-vs-dalle" className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 hover:underline">
                  Midjourney vs. DALL-E →
                </a>
              </div>
            </div>
            {/* Video-KI Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition transform hover:-translate-y-1" id="video-ki">
              <div className="text-3xl mb-4">🎬</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Video-KI</h3>
              <p className="text-gray-600 mb-4">Professionelle Videoproduktion mit KI</p>
              <div className="border-t pt-4">
                <a href="/vergleich-pictory-vs-synthesia" className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 hover:underline">
                  Pictory vs. Synthesia →
                </a>
              </div>
            </div>
            {/* SEO-KI Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition transform hover:-translate-y-1" id="seo-ki">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">SEO-KI</h3>
              <p className="text-gray-600 mb-4">Optimiere deine Inhalte für Suchmaschinen</p>
              <div className="border-t pt-4">
                <a href="/vergleich-surferseo-vs-anyword" className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 hover:underline">
                  SurferSEO vs. Anyword →
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Mission Section */}
        <section className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center">
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
              <h4 className="font-semibold mb-4">Kategorien</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a className="hover:text-white transition" href="#text-ki">Text-KI</a></li>
                <li><a className="hover:text-white transition" href="#bilder-ki">Bilder-KI</a></li>
                <li><a className="hover:text-white transition" href="#video-ki">Video-KI</a></li>
                <li><a className="hover:text-white transition" href="#seo-ki">SEO-KI</a></li>
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
