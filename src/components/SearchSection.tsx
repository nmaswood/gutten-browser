"use client";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function SearchSection() {
  const [bookId, setBookId] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (bookId) {
      router.push(`/book/${bookId}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-sm items-center space-x-2"
    >
      <Input
        placeholder="Search book ID..."
        type="number"
        value={bookId}
        onChange={(e) => setBookId(e.target.value)}
      />
      <Button type="submit">Search</Button>
    </form>
  );
}
