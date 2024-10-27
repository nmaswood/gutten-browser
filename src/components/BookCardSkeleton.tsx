import { Skeleton } from "@/components/ui/Skeleton";
import { Card, CardContent, CardHeader } from "./ui/Card";

export function BookCardSkeleton() {
  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <Skeleton className="h-7 w-3/4" />
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-5 w-1/2" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-6 w-24" />
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-7 w-24" />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
