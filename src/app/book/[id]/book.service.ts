import { Book } from "@/app/book/[id]/book.types";
import fetchApi from "@/lib/guttenFetch";

const BOOK_CONTENT_URL = "cache/epub/{bookId}/pg{bookId}.txt";
const getBookContentUrl = (bookId: string) =>
  BOOK_CONTENT_URL.replaceAll("{bookId}", bookId);

export const getBook = async (bookId: string) => {
  const response = await fetchApi.get<Book>(`/books/${bookId}`);

  if (response.status !== 200) {
    return;
  }

  return response.data;
};

export const getBookContent = async (bookId: string) => {
  const response = await fetchApi.get<string>(getBookContentUrl(bookId), {
    provider: "gutenberg",
  });

  if (response.status !== 200) {
    return;
  }

  return response.data;
};

export const getAiAssistantContent = async (book: Book) => {
  const response = await fetchApi.post<
    { analysis: string } | { error: string }
  >("/llm", JSON.stringify({ book }), {
    provider: "llm",
  });

  if ("error" in response.data) {
    throw new Error(response.data.error);
  }

  return response.data.analysis;
};
