"use client";

import { useEffect } from "react";
import { Book } from "@/app/book/[id]/book.types";

import { SAVED_BOOKS_KEY } from "@/lib/contants";
import { BookListItem } from "@/app/history/historyList.types";

export function SaveBookWrapper({ book }: { book: Book }) {
  useEffect(() => {
    const savedBooks: BookListItem[] = JSON.parse(
      localStorage.getItem(SAVED_BOOKS_KEY) || "[]"
    );

    if (!savedBooks.some((savedBook) => savedBook.id === book.id)) {
      savedBooks.push({
        id: book.id,
        title: book.title,
      });
      localStorage.setItem(SAVED_BOOKS_KEY, JSON.stringify(savedBooks));
    }
  }, [book.id, book.title]);

  return null;
}
