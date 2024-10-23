import { Book } from "@/app/book/[id]/book.types";
import { getLLMAnalysis } from "@/app/llm/llm.service";

export async function POST(request: Request) {
  const { book } = (await request.json()) as {
    book: Book;
  };

  const analysis = await getLLMAnalysis(book);

  if (analysis.status === 500) {
    return Response.json({ error: analysis.data });
  }

  return Response.json({ analysis: analysis.data });
}
