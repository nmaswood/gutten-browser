import { Skeleton } from "@/components/ui/Skeleton";

export function AnalysisContentSkeleton() {
  return (
    <div className="space-y-3 w-full">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-[90%]" />
      <Skeleton className="h-4 w-[95%]" />
    </div>
  );
}
