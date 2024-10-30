import AIAssistant from "@/app/book/[id]/AIAssistant";
import Book from "@/app/book/[id]/Book";
import { getBook, getBookContent } from "@/app/book/[id]/book.service";
import BookContent from "@/app/book/[id]/BookContent";
import AIAssistantSkeleton from "@/components/AIAssistantSkeleton";
import { BookCardSkeleton } from "@/components/BookCardSkeleton";
import { BookContentSkeleton } from "@/components/BookContentSkeleton";
import { Suspense } from "react";

export default async function BookPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const getBookPromise = getBook(id);
  const getBookContentPromise = getBookContent(id);

  return (
    <>
      <Suspense fallback={<BookCardSkeleton />}>
        <Book getBook={getBookPromise} />
      </Suspense>
      <Suspense fallback={<AIAssistantSkeleton />}>
        <AIAssistant
          getBook={getBookPromise}
          getBookContent={getBookContentPromise}
        />
      </Suspense>
      <Suspense fallback={<BookContentSkeleton />}>
        <BookContent getBookContent={getBookContentPromise} />
      </Suspense>
    </>
  );
}
