import Groq from "groq-sdk";
let llmClient: Groq | null = null;
if (!!process.env.GROQ_API_KEY) {
  llmClient = new Groq({ apiKey: process.env.GROQ_API_KEY });
}

export default llmClient;
