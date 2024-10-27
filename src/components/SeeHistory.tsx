"use client";

import { SAVED_BOOKS_KEY } from "@/lib/contants";
import { Button } from "./ui/Button";
import Link from "next/link";
import { useState, useEffect } from "react";
import { BookListItem } from "@/app/history/HistoryList";

export function SeeHistory() {
  const [savedBooks, setSavedBooks] = useState<BookListItem[]>([]);

  useEffect(() => {
    const books: BookListItem[] = JSON.parse(
      localStorage.getItem(SAVED_BOOKS_KEY) || "[]"
    );
    setSavedBooks(books);
  }, []);

  return (
    <Link href="/history">
      <Button variant="outline" className="ml-2">
        History ({savedBooks.length})
      </Button>
    </Link>
  );
}
