import { Book } from "@/app/book/[id]/book.types";
import fetchApi from "@/lib/guttenFetch";

export const getBook = async (bookId: string) => {
  const response = await fetchApi.get<Book>(`/books/${bookId}`);

  if (response.status !== 200) {
    return;
  }

  return response.data;
};
