"use client";

import { createContext, useState, useContext, useEffect } from "react";
import { BookListItem } from "@/app/history/historyList.types";
import { SAVED_BOOKS_KEY } from "@/lib/contants";

interface HistoryContextType {
  books: BookListItem[];
  addBook: (book: BookListItem) => void;
}

const HistoryContext = createContext<HistoryContextType>({
  books: [],
  addBook: () => {},
});

export const useHistory = () => useContext(HistoryContext);

export function HistoryProvider({ children }: { children: React.ReactNode }) {
  const [books, setBooks] = useState<BookListItem[]>([]);

  useEffect(() => {
    const savedBooks = JSON.parse(
      localStorage.getItem(SAVED_BOOKS_KEY) || "[]"
    );
    setBooks(savedBooks);
  }, []);

  const addBook = (book: BookListItem) => {
    const isNewBook = !books.some((b) => b.id === book.id);

    if (isNewBook) {
      const newBooks = [...books, book];
      setBooks(newBooks);
      localStorage.setItem(SAVED_BOOKS_KEY, JSON.stringify(newBooks));
    }
  };

  return (
    <HistoryContext.Provider value={{ books, addBook }}>
      {children}
    </HistoryContext.Provider>
  );
}
