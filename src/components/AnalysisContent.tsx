interface Props {
  content: string;
}

export function AnalysisContent({ content }: Props) {
  return (
    <div className="prose prose-sm max-w-none space-y-6">
      {content.split("\n\n").map((paragraph, index) => {
        if (paragraph.startsWith("#")) {
          return (
            <h3 key={index} className="font-semibold text-lg text-guttenText">
              {paragraph.replace(/^#\s?/, "")}
            </h3>
          );
        }
        if (paragraph.startsWith("*")) {
          return (
            <li key={index} className="text-guttenText ml-4">
              {paragraph.replace(/^\*\s?/, "")}
            </li>
          );
        }
        return (
          <p key={index} className="text-guttenText">
            {paragraph}
          </p>
        );
      })}
    </div>
  );
}
