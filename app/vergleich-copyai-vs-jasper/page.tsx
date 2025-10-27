export default function VergleichCopyAiVsJasper() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Copy.ai vs Jasper: KI-Textgenerator im Vergleich
        </h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Wichtigste Funktionen und Unterschiede
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Copy.ai: Fokus auf schnelle Content-Erstellung mit über 90 Vorlagen</li>
            <li>Jasper: Umfangreiche SEO-Integration und Long-Form Content-Erstellung</li>
            <li>Copy.ai: Günstigerer Einstiegspreis, ideal für kleinere Teams</li>
            <li>Jasper: Boss Mode für erweiterte Funktionen und bessere Kontrolle</li>
            <li>Copy.ai: Einfachere Benutzeroberfläche für Anfänger</li>
            <li>Jasper: Bessere Integration mit Surfer SEO und Grammarly</li>
            <li>Copy.ai: Kostenloser Plan verfügbar mit begrenzten Credits</li>
            <li>Jasper: Umfangreichere Sprachunterstützung (25+ Sprachen)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Kurzfazit</h2>
          <p className="text-gray-700 leading-relaxed">
            Beide Tools bieten leistungsstarke KI-Textgenerierung, aber für unterschiedliche Zielgruppen. 
            Copy.ai eignet sich hervorragend für kleinere Unternehmen und Freelancer, die schnell Marketing-Texte 
            erstellen möchten. Jasper ist die bessere Wahl für professionelle Content-Teams, die umfangreiche 
            Blogartikel und SEO-optimierte Inhalte produzieren. Für Einsteiger empfehlen wir Copy.ai, für 
            professionelle Content-Marketer Jasper.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Affiliate-Links</h2>
          <div className="flex gap-4">
            <a href="#copyai-affiliate" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Copy.ai testen
            </a>
            <a href="#jasper-affiliate" className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
              Jasper testen
            </a>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nutzerbewertungen</h2>
          <div className="border rounded-lg p-6 bg-gray-50">
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <span className="font-semibold text-gray-800">Copy.ai:</span>
                <span className="ml-2 text-yellow-500">★★★★☆ (4.2/5)</span>
              </div>
              <p className="text-gray-600 text-sm">Benutzer loben die einfache Bedienung und das gute Preis-Leistungs-Verhältnis.</p>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <span className="font-semibold text-gray-800">Jasper:</span>
                <span className="ml-2 text-yellow-500">★★★★★ (4.7/5)</span>
              </div>
              <p className="text-gray-600 text-sm">Nutzer schätzen die hohe Qualität der generierten Texte und die SEO-Features.</p>
            </div>
          </div>
        </section>

        <div className="mt-8">
          <a href="/" className="text-blue-600 hover:underline">
            ← Zurück zur Startseite
          </a>
        </div>
      </div>
    </main>
  );
}
