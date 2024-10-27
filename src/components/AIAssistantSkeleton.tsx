import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Skeleton } from "@/components/ui/Skeleton";

export default function AIAssistantSkeleton() {
  return (
    <Card className="mt-4 w-full animate-in slide-in-from-top-4 duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          AI Assistant <span className="text-sm">✨</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="gap-4 flex flex-col items-center">
        <Skeleton className="w-52 h-11" />
      </CardContent>
    </Card>
  );
}
