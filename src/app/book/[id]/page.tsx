import Book from "@/app/book/[id]/Book";
import { BookCardSkeleton } from "@/components/BookCardSkeleton";
import { Suspense } from "react";

export default async function BookPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <Suspense fallback={<BookCardSkeleton />}>
      <Book id={id} />
    </Suspense>
  );
}
