import { Card, CardContent } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";

export function BookContentSkeleton() {
  return (
    <Card className="mt-4 w-full">
      <CardContent>
        <div className="space-y-6 p-6">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-11/12" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-4/5" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-9/12" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-10/12" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-3/4" />
        </div>
      </CardContent>
    </Card>
  );
}
