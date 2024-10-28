"use client";

import { useEffect } from "react";
import { Book } from "@/app/book/[id]/book.types";
import { useHistory } from "@/lib/HistoryContext";

export function SaveBookWrapper({ book }: { book: Book }) {
  const { addBook } = useHistory();

  useEffect(() => {
    addBook({
      id: book.id,
      title: book.title,
    });
  }, [book.id, book.title, addBook]);

  return null;
}
