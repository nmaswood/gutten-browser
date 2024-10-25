import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import { Book } from "@/app/book/[id]/book.types";

type Props = Book;

export function BookCard({
  title,
  subjects = [],
  languages = [],
  authors,
}: Props) {
  const hasAuthors = authors && authors?.length > 0;
  const hasLanguages = languages && languages?.length > 0;

  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {hasAuthors && (
          <p className="text-guttenMutedText italic">
            by {authors?.map((author) => author.name).join(", ")}
          </p>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        {hasLanguages && (
          <div className="space-y-2">
            <h4 className="font-serif text-lg text-guttenDarkBlue">Language</h4>
            <p className="text-sm leading-relaxed">{languages.join(", ")}</p>
          </div>
        )}

        {subjects && subjects.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-serif text-lg text-guttenDarkBlue">Subjects</h4>
            <div className="flex flex-wrap gap-2">
              {subjects.map((subject, index) => (
                <span
                  key={index}
                  className="rounded-full bg-guttenGreen/20 px-3 py-1 text-sm"
                >
                  {subject}
                </span>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
