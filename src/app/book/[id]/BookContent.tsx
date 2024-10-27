import { parseContent } from "@/app/book/[id]/book.helper";
import { getBookContent } from "./book.service";
import { Card, CardContent } from "@/components/ui/Card";
import classNames from "classnames";

interface Props {
  getBookContent: ReturnType<typeof getBookContent>;
}

export default async function BookContent({ getBookContent }: Props) {
  const content = await getBookContent;

  if (!content) {
    return (
      <div className="p-4 text-guttenMutedText">
        Content not available for this book.
      </div>
    );
  }

  const paragraphs = parseContent(content);

  return (
    <Card className="mt-4 w-full">
      <CardContent>
        <div className="space-y-6 text-guttenText p-6">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={classNames(
                "leading-relaxed text-lg",
                paragraph.toUpperCase() === paragraph &&
                  "font-semibold text-guttenDarkBlue"
              )}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
