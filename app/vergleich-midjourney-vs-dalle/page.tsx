export default function VergleichMidjourneyVsDalle() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Midjourney vs DALL-E: KI-Bildgenerator im Vergleich
        </h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Wichtigste Funktionen und Unterschiede
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Midjourney: Künstlerisch hochwertige Bilder mit einzigartigem Stil</li>
            <li>DALL-E: Präzisere Umsetzung von detaillierten Text-Prompts</li>
            <li>Midjourney: Discord-basierte Bedienung, Community-orientiert</li>
            <li>DALL-E: Benutzerfreundliche Web-Oberfläche von OpenAI</li>
            <li>Midjourney: Bessere Konsistenz bei Charakterdesigns</li>
            <li>DALL-E: Outpainting und Inpainting-Funktionen integriert</li>
            <li>Midjourney: Verschiedene Versions-Modi für unterschiedliche Stile</li>
            <li>DALL-E: Direktere Integration in ChatGPT Plus</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Kurzfazit</h2>
          <p className="text-gray-700 leading-relaxed">
            Beide Tools gehören zu den besten KI-Bildgeneratoren auf dem Markt. Midjourney punktet mit 
            seiner künstlerischen Qualität und ist ideal für kreative Projekte, Concept Art und 
            visuell beeindruckende Designs. DALL-E hingegen bietet mehr Kontrolle und Präzision bei 
            der Umsetzung spezifischer Anforderungen. Für Künstler und Designer empfehlen wir Midjourney, 
            für präzise Bildumsetzungen und Bildbearbeitung DALL-E.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Affiliate-Links</h2>
          <div className="flex gap-4">
            <a href="#midjourney-affiliate" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Midjourney testen
            </a>
            <a href="#dalle-affiliate" className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
              DALL-E testen
            </a>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nutzerbewertungen</h2>
          <div className="border rounded-lg p-6 bg-gray-50">
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <span className="font-semibold text-gray-800">Midjourney:</span>
                <span className="ml-2 text-yellow-500">★★★★★ (4.8/5)</span>
              </div>
              <p className="text-gray-600 text-sm">Benutzer loben die außergewöhnliche Bildqualität und die aktive Community.</p>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <span className="font-semibold text-gray-800">DALL-E:</span>
                <span className="ml-2 text-yellow-500">★★★★☆ (4.5/5)</span>
              </div>
              <p className="text-gray-600 text-sm">Nutzer schätzen die präzise Prompt-Umsetzung und die Editier-Funktionen.</p>
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
