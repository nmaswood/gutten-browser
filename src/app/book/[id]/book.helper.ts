const START_MARKER = "*** START OF THE PROJECT GUTENBERG EBOOK";

export const parseContent = (content: string) => {
  const contentStartIndex = content.indexOf(START_MARKER);

  const cleanContent = content
    .slice(contentStartIndex)
    .split("\n")
    .slice(1)
    .join("\n");

  return cleanContent
    .split(/\r?\n/)
    .reduce((acc: string[], line) => {
      if (line.trim() === "") {
        acc.push("");
      } else {
        const lastIndex = acc.length - 1;
        const lastParagraph = acc[lastIndex];
        const lastParagraphIsEmpty = lastParagraph === "";

        const trimmedLine = line.trim();

        if (lastParagraphIsEmpty) {
          acc.push(trimmedLine);
        } else {
          const extendedParagraph = `${lastParagraph} ${trimmedLine}`;
          acc[lastIndex] = extendedParagraph;
        }
      }
      return acc;
    }, [])
    .filter((p) => p !== "");
};
