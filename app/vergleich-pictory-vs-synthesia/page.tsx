export default function VergleichPictoryVsSynthesia() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Pictory vs Synthesia: KI-Videogenerator im Vergleich
        </h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Wichtigste Funktionen und Unterschiede
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Pictory: Automatische Video-Erstellung aus Blog-Artikeln und Texten</li>
            <li>Synthesia: KI-Avatare mit realistischen Gesichtern und Gesten</li>
            <li>Pictory: Fokus auf Social Media Content und Marketing-Videos</li>
            <li>Synthesia: Ideal für Schulungsvideos und Unternehmenspräsentationen</li>
            <li>Pictory: Über 3 Millionen lizenzfreie Bilder und Videos</li>
            <li>Synthesia: 120+ KI-Avatare in verschiedenen Ethnien und Stilen</li>
            <li>Pictory: Automatische Untertitel-Generierung integriert</li>
            <li>Synthesia: Unterstützung für 60+ Sprachen mit nativen Sprechern</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Kurzfazit</h2>
          <p className="text-gray-700 leading-relaxed">
            Beide Plattformen revolutionieren die Video-Erstellung, jedoch mit unterschiedlichen Ansätzen. 
            Pictory ist perfekt für Content-Creator und Marketer, die schnell ansprechende Social Media Videos 
            aus bestehenden Inhalten erstellen möchten. Synthesia hingegen ist die erste Wahl für Unternehmen, 
            die professionelle Erklärvideos und Schulungsmaterialien mit KI-Avataren produzieren wollen. 
            Für Marketing und Social Media empfehlen wir Pictory, für E-Learning und Corporate Videos Synthesia.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Affiliate-Links</h2>
          <div className="flex gap-4">
            <a href="#pictory-affiliate" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Pictory testen
            </a>
            <a href="#synthesia-affiliate" className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
              Synthesia testen
            </a>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nutzerbewertungen</h2>
          <div className="border rounded-lg p-6 bg-gray-50">
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <span className="font-semibold text-gray-800">Pictory:</span>
                <span className="ml-2 text-yellow-500">★★★★☆ (4.6/5)</span>
              </div>
              <p className="text-gray-600 text-sm">Benutzer loben die einfache Bedienung und die schnelle Video-Erstellung aus Texten.</p>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <span className="font-semibold text-gray-800">Synthesia:</span>
                <span className="ml-2 text-yellow-500">★★★★★ (4.7/5)</span>
              </div>
              <p className="text-gray-600 text-sm">Nutzer schätzen die realistischen KI-Avatare und die professionelle Qualität.</p>
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
