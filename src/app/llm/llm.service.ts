import { Book } from "@/app/book/[id]/book.types";
import llmClient from "@/lib/llmClient";

const getLLMAnalysisPrompt = (
  book: Book
) => `Using the following metadata about a book, provide the essential historical and contextual information a reader should know before reading it. Focus on the author's background, the historical setting, the book's significance in literature, and the main themes it explores.

    Title: ${book.title}
    ${
      book.authors
        ? `Author(s): ${book.authors
            .map(
              (author) =>
                `${author.name} (${author.birth_year} - ${author.death_year})`
            )
            .join(", ")}`
        : ""
    }
    ${book.subjects ? `Subjects: ${book.subjects.join(", ")}` : ""}
    ${book.languages ? `Languages: ${book.languages.join(", ")}` : ""}
    Please present the information in an engaging and informative manner to enhance the reader's understanding and appreciation of the book.

    Formatting Guidelines:
    - Use single # to indicate titles; do not use multiple levels of headings like ## or ###
    - Use single * for bullet points; do not use numbers.
    - Use double line breaks to separate different paragraphs, and after a title or bullet point.
    - Do not mix paragraphs and bullet points.
    - Do not use * in middle of a paragraph.
    - Only use the styles specified above; do not add any other formatting styles.

    Sections to Include:
    - Historical and Contextual Background.
    - The Context of the Book.
    - Book Significance in Literature.
    - Themes Explained.


    Notes:  
    - Section titles listed above can be customized to fit the book's theme.
    - Use # to indicate titles.
`;

export const getLLMAnalysis = async (book: Book) => {
  if (!llmClient) {
    return {
      status: 500,
      data: "LLM Api Key env not set, contact Lucas to enable it for testing",
    };
  }
  const response = await llmClient.chat.completions.create({
    messages: [{ role: "user", content: getLLMAnalysisPrompt(book) }],
    model: "llama-3.2-1b-preview",
  });

  return {
    status: 200,
    data: response.choices[0]?.message?.content,
  };
};
