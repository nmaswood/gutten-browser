export interface Book {
  id: number;
  title: string;
  subjects?: string[];
  bookshelves?: string[];
  languages?: string[];
  copyright?: boolean;
  media_type?: string;
  download_count?: number;
  authors?: Author[];
}

export interface Author {
  name: string;
  birth_year?: number;
  death_year?: number;
}
