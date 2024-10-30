"use client";

import { useHistory } from "@/lib/HistoryContext";
import { Button } from "./ui/Button";
import Link from "next/link";

export function SeeHistory() {
  const { books } = useHistory();

  return (
    books.length > 0 && (
      <Link href="/history">
        <Button variant="outline" className="ml-2">
          History ({books.length})
        </Button>
      </Link>
    )
  );
}
