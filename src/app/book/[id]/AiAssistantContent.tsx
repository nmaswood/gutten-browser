"use client";

import { getAiAssistantContent } from "@/app/book/[id]/book.service";
import { Book } from "@/app/book/[id]/book.types";
import { AnalysisContent } from "@/components/AnalysisContent";
import { AnalysisContentSkeleton } from "@/components/AnalysisContentSkeleton";
import { Button } from "@/components/ui/Button";
import { useQuery } from "@tanstack/react-query";

interface Props {
  book: Book;
  content: string;
}

export default function AiAssistantContent({ book }: Props) {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["ai-assistant-content", book.id],
    queryFn: async () => getAiAssistantContent(book),
    enabled: false,
    retry: false,
  });

  return (
    <div className="space-y-4 flex flex-col items-center">
      <Button
        variant="outline"
        className="h-auto flex-col items-start gap-2 p-4 w-full md:max-w-2xl"
        onClick={() => refetch()}
      >
        <div className="flex w-full items-center gap-2">
          <span className="text-xl">📝</span>
          <span className="font-semibold">Historical Context</span>
        </div>
        <p className="text-sm text-guttenMutedText text-left whitespace-normal break-words hyphens-auto">
          Learn about the historical period, author&apos;s background, and
          cultural significance of this work
        </p>
      </Button>

      {isLoading && <AnalysisContentSkeleton />}

      {data && !isLoading && <AnalysisContent content={data} />}

      {error && <div className="text-red-500">{error.message}</div>}
    </div>
  );
}
