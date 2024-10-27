import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { getBook, getBookContent } from "./book.service";
import AiAssistantContent from "@/app/book/[id]/AiAssistantContent";

interface Props {
  getBook: ReturnType<typeof getBook>;
  getBookContent: ReturnType<typeof getBookContent>;
}

export default async function AIAssistant({ getBook, getBookContent }: Props) {
  const [book, content] = await Promise.all([getBook, getBookContent]);

  if (!book || !content) return null;

  return (
    <Card className="mt-4 w-full p-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          AI Assistant <span className="text-sm">✨</span>
        </CardTitle>
      </CardHeader>
      <CardContent className=" gap-4 flex flex-col items-center">
        <AiAssistantContent book={book} content={content} />
      </CardContent>
    </Card>
  );
}
