import { GoogleGenAI } from "@google/genai";

const getAIClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API Key is missing. AI features will be disabled.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateBlogAssistance = async (context: string, specificQuestion: string): Promise<string> => {
  const ai = getAIClient();
  if (!ai) return "Error: Clave API no configurada. No se puede generar contenido.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Contexto de la tarea: Unidad 2: Nuevas formas de comunicación en la sociedad del conocimiento. 
      El usuario necesita ayuda para responder la siguiente pregunta en aproximadamente 6 líneas, con un tono académico y reflexivo:
      
      Pregunta: ${specificQuestion}
      
      Contexto adicional del usuario: ${context}
      
      Respuesta sugerida:`,
      config: {
        temperature: 0.7,
        maxOutputTokens: 300,
      }
    });

    return response.text || "No se pudo generar una respuesta.";
  } catch (error) {
    console.error("Error calling Gemini:", error);
    return "Hubo un error al conectar con el asistente de IA.";
  }
};

export const improveText = async (text: string): Promise<string> => {
  const ai = getAIClient();
  if (!ai) return text;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Mejora el siguiente texto para que tenga un tono más académico, profesional y claro, manteniendo la idea original.
      
      Texto original: "${text}"`,
    });
    return response.text || text;
  } catch (error) {
    console.error("Error improving text:", error);
    return text;
  }
};