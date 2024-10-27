import { getBook } from "@/app/book/[id]/book.service";

import { SaveBookWrapper } from "@/app/book/[id]/SaveBookWrapper";
import { BookCard } from "@/components/BookCard";

interface Props {
  getBook: ReturnType<typeof getBook>;
}

export default async function Book({ getBook }: Props) {
  const book = await getBook;

  if (!book) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center p-4">
        <h2 className="text-2xl font-semibold text-guttenDarkBlue mb-2">
          Book Not Found
        </h2>
        <p className="text-gray-600">
          Sorry, we couldn&apos;t find the book you&apos;re looking for.
        </p>
      </div>
    );
  }

  return (
    <>
      <BookCard {...book} />
      <SaveBookWrapper book={book} />
    </>
  );
}
