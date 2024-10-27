"use client";

import { SAVED_BOOKS_KEY } from "@/lib/contants";
import { useEffect, useState } from "react";
import { LinkList } from "@/components/ui/LinkList";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { BookListItem } from "@/app/history/HistoryList.types";

export default function History() {
  const [history, setHistory] = useState<BookListItem[]>();

  useEffect(() => {
    const savedBooks = JSON.parse(
      localStorage.getItem(SAVED_BOOKS_KEY) || "[]"
    );
    setHistory(savedBooks);
  }, []);

  const historyLinks = history?.map((book) => ({
    id: book.id.toString(),
    href: `/book/${book.id}`,
    title: book.title,
  }));

  return (
    <>
      <div className="space-y-4">
        {historyLinks &&
          (historyLinks.length ? (
            <Card className="bg-guttenBlue">
              <CardHeader>
                <CardTitle>Book History</CardTitle>
              </CardHeader>
              <CardContent>
                <LinkList items={historyLinks} />
              </CardContent>
            </Card>
          ) : (
            <p>No history yet</p>
          ))}
      </div>
    </>
  );
}
