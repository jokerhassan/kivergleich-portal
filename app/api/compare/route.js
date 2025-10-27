export async function POST(req) {
  const { tool1, tool2 } = await req.json();
  const prompt = `Vergleiche KI-Tool "${tool1}" mit "${tool2}" tabellarisch: Funktionen, Preise, Vorteile, Zielgruppen und eine Kurzempfehlung.`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Authorization": "Bearer xxxxx`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.4
    })
  });
  const openai = await response.json();
  const vergleich = openai.choices?.[0]?.message?.content || "Fehler beim Vergleich";

  return new Response(JSON.stringify({ comparison: vergleich }), {
    headers: { "Content-Type": "application/json" }
  });
}
