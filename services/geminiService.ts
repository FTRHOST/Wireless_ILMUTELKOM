import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generatePosterConcept = async (businessType: string): Promise<string> => {
  if (!apiKey) {
    return "API Key tidak ditemukan. Mohon konfigurasikan API_KEY di environment.";
  }

  try {
    const model = "gemini-2.5-flash";
    const prompt = `
      Bertindaklah sebagai Creative Director yang futuristik.
      Seorang pengguna memiliki bisnis/kebutuhan: "${businessType}".
      
      Buatkan satu ide konsep "Smart NFC Poster" yang gila, unik, dan menggunakan teknologi canggih untuk bisnis ini.
      Jelaskan apa yang terjadi saat user menempelkan HP ke poster.
      
      Format jawaban:
      **Nama Konsep:** [Nama Keren]
      **Visual Poster:** [Deskripsi singkat visual poster fisik]
      **The Magic (Saat di-Tap):** [Jelaskan pengalaman digital interaktif yang terjadi di layar HP]
      
      Gunakan bahasa Indonesia yang gaul, antusias, dan "menjual". Maksimal 150 kata.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "Gagal menghasilkan ide. Coba lagi nanti.";
  } catch (error) {
    console.error("Error generating concept:", error);
    return "Maaf, sistem sedang sibuk memikirkan masa depan. Coba lagi sebentar lagi.";
  }
};